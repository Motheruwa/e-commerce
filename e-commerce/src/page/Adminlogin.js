import React, { useRef, useState } from 'react'
import styles from './Adminlogin.module.css'
import { Auth } from '../store/Context'
import { useNavigate } from 'react-router-dom'
const Adminlogin = () => {
    const {Adminlogin} =Auth()
    const {Adminlogout} =Auth()
    const navigate=useNavigate()
    const[error,seterror]=useState()
    const passwordRef=useRef()
    const emailRef=useRef()
    async function loginfun(){
        try{ await Adminlogin(emailRef.current.value,passwordRef.current.value)
        navigate('/adminpage') }
        catch(err){
            seterror(err.message)
        }
    }
  return (
    <div className={styles.cont}>
        <div className={styles.box}>
        <div className={styles.title}>Admin sign in</div>
         <div className={styles.detail}>
        <input ref={emailRef} placeholder='email' type='text'/>
         <input ref={passwordRef} placeholder='password' type='text'/>
         </div>
         <button onClick={loginfun} >sign in</button>
         <div className={styles.text}>
          <div style={{color:'red'}}>{error}</div>
         </div>
      </div>
      
      
    </div>
  )
}

export default Adminlogin