import React ,{createContext, createContextfrom, useEffect, useState} from 'react'



export const ShopContext=createContext(null)

const ShopContextProvider=(props)=> {
 
  const [all_product,setAll_product]=useState([])
  const [cartItems,setCartItems]=useState({})
  
 
  useEffect(() => {
    fetch("http://:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        setAll_product(data);
        
        const defaultCart = {};
        data.forEach((product) => {
          defaultCart[product.id] = 0; // Set default cart quantities to 0
        });
        
        // Load cart from localStorage if it exists
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        setCartItems(storedCart || defaultCart);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const totalamount = () => {
    let total = 0;

    if (all_product.length === 0) return total;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        
        if (itemInfo) {
          total += cartItems[item] * itemInfo.price;
        }
      }
    }
    return total;
  };

  
 

  const addTocart=(itemId)=>{
   
    setCartItems((prev) => {
      // Use the functional form of setState to get the latest state
      const updatedCart = {
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] + 1 : 1, // Increment the item quantity or set it to 1 if it's not in the cart
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updated cart to localStorage
      return updatedCart;
    });
    
   
  }
  const removeFromcart=(itemId)=>{
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });

  }
 
 
  
  const contextValue={all_product,cartItems,setCartItems,removeFromcart,addTocart,totalamount}
 
  return (

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

  )
}

export default ShopContextProvider