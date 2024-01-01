import styles from "./card.module.css";
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {increment,decrement, selectcartitem} from '../redux/counter';
import { Link } from "react-router-dom";
import { supabase } from "../store/Supabase";
  const Card = (item) => {
    const [image,setimage]=useState()
  const[show,setshow]= useState(false);
  const dispatch = useDispatch();
  const cartitem=useSelector(selectcartitem)
  
async function downloadimage(file){
const { data} = await supabase
.storage
.from('pimage')
.download(file)

  const url = URL.createObjectURL(data)
    setimage(url)
}
  useEffect(()=>{
    if(item.photo)downloadimage(item.photo)
  })
  useEffect(()=>{
     if(cartitem.some(cart => cart.id === item.id)){
      setshow(true)
     }
  },[cartitem,item.id])
  const handlecart = () =>{
    if(show){
    dispatch(decrement(item.id))
    setshow(false)
    }
    else {
    dispatch(increment(item))
    setshow(true)
    }
  };
  return (
    <div className={styles.itembox}>
      <Link to={`/product/${item.id}`}  className={styles.itemimg}><img src={image} alt={item.name}/></Link>
      <div className={styles.iteminfo}>
        <div className={styles.itemtxt}>
        <div className={styles.itemname}><span>{item.name}</span></div>
        <div className={styles.itemprice}>{item.price}</div>
        </div>
        <div className={styles.additemtocart} >
         <button onClick={handlecart}>{show? "remove" : "add"}
         </button>
        </div>
      </div>

    </div>
  );
};

export default Card;
