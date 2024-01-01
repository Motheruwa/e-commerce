import React,{useEffect, useState} from "react";
import styles from './topnav.module.css'
import {HiHome} from 'react-icons/hi'
import {FaShopify} from 'react-icons/fa'
import {HiTemplate} from 'react-icons/hi'
import {TbHexagonLetterA} from 'react-icons/tb'
import {FiLogOut,FiLogIn} from 'react-icons/fi'
import {FaSellsy} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import { useSelector} from 'react-redux';
import { BsCartCheck} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from '../store/Supabase'
import { selectcartitem } from "../redux/counter";
import Card from "./Card";
import { Auth } from "../store/Context";
const TopNav=()=>{
  const {currentUser,logout}=Auth()
    const[search,setsearch]=useState()
    const[file,setfile]=useState([])
    const[right,setright]=useState(false)
  const cartitem = useSelector(selectcartitem);
 const counteritem=cartitem.length

 async function searchfile(){ 
    
const { data, error } = await supabase
.from('products')
.select()
.eq('name', search)
if(data)
{setfile(data)
console.log(data)}
if(error)
console.log(error)
 }
 useEffect(()=>{
   searchfile()
 },[search])
 
  function onclick(){
    setright(false)
    setsearch("")
  }
  const navigate=useNavigate()
 
  async function logoutfun(){
    await logout()
    navigate('/')
  }
    return(
        <div className={styles.cont}>
            <div className={styles.box}>
           <Link to="/"> <div className={styles.logo}>AFCANSHOP</div></Link>
            <div className={styles.bottomlogo}><TbHexagonLetterA size={"3rem"}/></div>
            <div className={styles.links}>
                <Link to='/' className={styles.link}>Home</Link>
                <Link to='shop' className={styles.link}>Shop</Link>
                <Link to='catagory' className={styles.link}>Catagory</Link>
                <Link to='sell' className={styles.link}>Sell</Link>
                
                <div className={styles.searchcontainer}>
            <div className={styles.searchbox}>
                <input onClick={()=>setright(true)} value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="Enter to Search" text='text'/>
            </div>
            { search?
              <div className={styles.subcont} style={{display: right? "flex" : "none"}}>
            <div className={styles.close} >
              <span className={styles.closeicon}>< FaTimes color={"white"} size={"1.5rem"}  onClick={onclick}/></span>
            </div>
            <div className={styles.searchcont} >
                <div className={styles.sbox}>{
                  (file.length===0)? <div className={styles.notfound}><div></div></div>:
                    file.map((item)=> (<Card {...item}/>))
                    
                }</div>
            </div>
            
            </div>
            : <span></span>
            }
            </div>
            <Link to='login' className={styles.link} style={{display: !currentUser? 'flex' : 'none'}}>login</Link>
            <Link className={styles.link} style={{display:  currentUser? 'flex' : 'none'}} onClick={logoutfun}>logout</Link>
            <div className={styles.fcounter}><Link to='/cart' className={styles.cart}><BsCartCheck size={20} /></Link>
             <span className={styles.counter}>{counteritem}</span>
            </div>
            </div>
        </div>
       <div className={styles.bottomcont}>
           <div className={styles.bottomlinks}>
           <Link to='/' className={styles.blink}><HiHome size={'1.5rem'}/></Link>
                <Link to='shop' className={styles.blink}><FaShopify size={'1.5rem'}/></Link>
                <Link to='catagory' className={styles.blink}><HiTemplate size={'1.5rem'}/></Link>
                <Link to='sell' className={styles.blink}><FaSellsy size={'1.5rem'}/></Link>
                <span  style={{display:  currentUser? 'flex' : 'none'}} onClick={logoutfun}><FiLogOut size={'1.5rem'}/></span>
                <Link to='login' className={styles.blink} style={{display:  !currentUser? 'flex' : 'none'}} ><FiLogIn size={'1.5rem'}/></Link>
           </div>
       </div>
        </div>
    )
}

export default TopNav