import React, {createContext, useState} from 'react'
import { useLocation } from 'react-router-dom'

const initialState= {
    cart:[],
    setCart: ()=>{},
    getItemQuantity:()=>{},
    onIncrease:()=>{},
    onDecrease:()=>{}
}

export const CartContext= createContext(initialState)
 
export const CartProvider= ({children})=>{
    const{state}= useLocation();
  
    const item= [state]
    const[cart, setCart]=useState([])
    const onIncrease=(id)=>{
        item.find(product=> product.id===id)
        if(cart?.find((product)=>product.id===id)?.quantity===item. stock)return
        if(cart?.length===0){
          setCart([{...item, quantity:1}])
        }else if(cart?.length>0 && !cart?.find((product)=> product.id===id)){
          setCart([...cart,{...item, quantity:1}])
        }else{
          setCart(currentCart=>{return currentCart.map((product)=>{
        if(product.id===id){
        return{...product, quantity:product.quantity+1}
        }else {
        return product
         }  
    
        })})
    
          }
    
 }
    const onDecrease=(id)=>{
        setCart(currentCart=>{
            if(currentCart?.find((product)=>product.id===id)?.quantity===1){
            return currentCart.filter((product)=>product.id!==id)
            }else {
            return currentCart?.map((product)=>{
                if(item.id===id){
                return {
                    ...product,
                    quantity:product.quantity-1
                }
                }else {
                return product
                }
            })
            }
        })
        }
        const getItemQuantity=(id)=>{
            return cart?.find((product)=> product.id===id?.quantity||0)
          }
        
    return(
        <CartContext.Provider value={{cart, setCart,onIncrease, onDecrease,getItemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}