import React, { useState,useEffect } from 'react'
import styles from "./Adminpage.module.css"
import { supabase } from '../store/Supabase'
import Admin1 from '../components/Admin1'
import { Auth } from '../store/Context'
import { Link, useNavigate } from 'react-router-dom'

const Adminpage = () => {
    const {currentAdmin,Adminlogout} = Auth()
    const navigate=useNavigate()
    const[file,setfile]=useState([])
    
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
   
         useEffect(()=>{
          if(!currentAdmin){
            navigate('/adminlogin')
          }
          else{
            navigate('/adminpage')
          }
        },[currentAdmin])
   async function logoutfun(){
    await Adminlogout()
    navigate('/')
   }
  return (
    <div className={styles.cont}>
      <div className={styles.title}> <div className={styles.text}> <Link to='/bought'><div>bought</div></Link><div className={styles.product}>product's</div></div> <div onClick={logoutfun} className={styles.me}>logout</div></div>
        { file.map((item) => (<Admin1 {...item}/>))}
      
    </div>
  )
}

export default Adminpage
