import React, { useEffect, useState } from 'react'
import styles from "./Catagory.module.css";
import { supabase } from '../store/Supabase';
import Card from '../components/Card';
const Catagory = () => {
  const[search,setsearch]=useState('flowers')
  const[file,setfile]=useState([])
  
  async function searchfile(){ 
    
    const { data, error } = await supabase
    .from('products')
    .select()
    .eq('catagory', search)
    if(data)
    {setfile(data)
    console.log(data)
  }
  if(error)
  console.log(error)
     }
     useEffect(()=>{
       searchfile()
     },[search])
  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <button onClick={()=>setsearch('flowers')} >flowers</button>
        <button onClick={()=>setsearch('electronics')} >electronics</button>
        <button onClick={()=>setsearch('cloth')} >cloth</button>
        <button onClick={()=>setsearch('shoes')} >shoes</button>
        <button onClick={()=>setsearch('books')}>books</button>
        <button onClick={()=>setsearch('cosmotics')} >cosmotics</button>
        <button onClick={()=>setsearch('cars')} >cars</button>
        <button onClick={()=>setsearch('pets')} >pets</button>
        <button onClick={()=>setsearch('lexury')} >lexury</button>
        
      </div>
        <div className={styles.title}>{search}</div>
        <div className={styles.map}>
        {(file.length===0)? <div className={styles.notfound}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
        file.map((f) => (
      <Card {...f} />
        ))}
        </div>
    </div>
  )
}

export default Catagory
