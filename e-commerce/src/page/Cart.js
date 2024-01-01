import React, { useEffect, useState } from 'react'
import styles from './cart.module.css'
import Zcart from '../components/Zcart' 
import { useSelector } from 'react-redux'
import { selectcartitem } from '../redux/counter'
import { Link } from 'react-router-dom'

const Cart = () => {
  const[item,setitem]=useState(1)
const cartitem = useSelector(selectcartitem)

function totalprice(){
  let total=0
for(let i=0;i<cartitem.length;i++){
  total=total+cartitem[i].price
}
setitem(total)
}

useEffect(()=>{
  totalprice()
},[cartitem])
  return (
    <div className={styles.box}>
        <div className={styles.cartheader}>
            <div className={styles.image}>IMAGE</div>
            <div className={styles.product}>PRODUCT</div>
            <div className={styles.price}>PRICE</div>
            <div className={styles.remove}>REMOVE</div>
        </div>
        {cartitem.map((l)=><Zcart {...l}/>)}
        { cartitem.length!==0? <div className={styles.total}>
          total:{item}
        <Link to = '/delivery' >Next</Link>
        </div>: <div className={styles.empty}>the cart is currently empty</div>}
    </div>
  )
}

export default Cart