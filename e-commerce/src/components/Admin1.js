import React, { useEffect, useState } from 'react'
import { supabase } from '../store/Supabase'
import styles from './Admin1.module.css'

const Admin1 = (item) => {
    const [image,setimage]=useState()
    const[id,setid]=useState()
    async function fuckyou() {
      
        const { error } = await supabase 
          .from('products')
          .delete()
          .eq('id', id)
           if(error)
           console.log(error)
            }
            useEffect(()=>{
              fuckyou()
            },[id])
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
  return (
    
      <div className={styles.box}>
             <div className={styles.itemimage}> <img width={'100%'} height={'100%'}src={image} alt={item.name}/> </div>
             <div className={styles.detail}>
             <div><span style={{fontWeight:'bold'}}>name</span> : {item.name}</div>
             <div><span style={{fontWeight:'bold'}}>price</span> : {item.price}</div>
             <div><span style={{fontWeight:'bold'}}>discription</span> : {item.detail}</div>
             <div><button onClick={()=>setid(item.id)}>delete</button></div>
             </div>
        </div>
    
  )
}

export default Admin1
