import React, { useEffect,useState } from 'react'
import Card from "../components/Card";

import styles from "./Shop.module.css"
import { supabase } from '../store/Supabase';

const Shop = () => {
  const [file,setfile]=useState([])
async function getfile() {
  
const { data, error } = await supabase
.from('products')
.select()
.order("created_at",{ascending:false})
if(data)
setfile(data)
if(error)
console.log(error)
}
  useEffect(()=>{
    getfile()
  },[])

return (
<div className={styles.cont}>
  <div className={styles.box}>
    {(file.length===0)? <div className={styles.notfound}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
    file.map((f) => (
      <Card {...f} />
    ))}
  </div>
</div>
);
}

export default Shop
