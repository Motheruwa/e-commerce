import React, { useEffect, useState } from 'react'
import styles from './Bought.module.css'
import Admin from '../components/Admin'
import { supabase } from '../store/Supabase'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../store/Context'
const Bought = () => {
    const[file,setfile]=useState([])
    const navigate=useNavigate()
    const {Adminlogout}=Auth()
    async function getfile() {
      
        const { data, error } = await supabase
        .from('delivery')
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
          async function logoutfun(){
            await Adminlogout()
            navigate('/')
           }
  return (
    <div className={styles.cont}>
      <div className={styles.title}><div className={styles.text}> <div className={styles.bought}>bought</div><Link to='/adminpage'><div>product's</div></Link> </div><div onClick={logoutfun} className={styles.me}>logout</div></div>
       <div className={styles.sold}>recently sold products!</div>
      {file.map((item)=>(<Admin {...item}/>))}
    </div>
  )
}

export default Bought
