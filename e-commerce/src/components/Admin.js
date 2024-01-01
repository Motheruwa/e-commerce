import React, { useEffect, useState } from 'react'
import styles from './Admin.module.css'
import { supabase } from '../store/Supabase'
const Admin = (item) => {
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
  return (
    
      <div className={styles.box}>
        <div className={styles.img}><img width={'100%'} height={'100%'} src={image} alt={'error'}/></div>
         <div className={styles.detail}>
            <div><span style={{fontWeight:'bold'}}>ID</span> : {item.id}</div>
            <div><span style={{fontWeight:'bold'}}>Name</span> : {item.name}</div>
         <div><span style={{fontWeight:'bold'}}>Transaction_No</span> : {item.created_at}</div>
         </div>
      </div>
    
  )
}

export default Admin
