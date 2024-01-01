import React, { useEffect, useState } from 'react'
import styles from './zcart.module.css'
import { MdDelete } from 'react-icons/md'
import {decrement} from '../redux/counter'
import { useDispatch } from 'react-redux'
import { supabase } from '../store/Supabase'
const Zcart = (item) => {
  const [image,setimage]=useState()

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
const dispatch = useDispatch();

  return (
        <div className={styles.cartheader}>
            <div className={styles.image}><img width="20px" height='30px' src={image} alt={item.product}/></div>
            <div className={styles.product}>{item.name}</div>
            <div className={styles.price}>{item.price}</div>
            <div className={styles.remove}><MdDelete size={30} onClick={()=>dispatch(decrement(item.id))}/></div>
        </div>
  )
}

export default Zcart