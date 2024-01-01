import React, { useRef, useState } from 'react'
import styles from './Login.module.css'
import { Auth } from '../store/Context'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const {login} =Auth()
  const {signup} =Auth()
  const navigate = useNavigate()
    const[show,setshow]=useState(true)
    const[error,seterror]=useState()
    const passwordRef=useRef()
    const emailRef=useRef()
    async function loginfun(){
      try{
        await login(emailRef.current.value,passwordRef.current.value)
      navigate('/')
      }
      catch(err){
        if(err.message==='Firebase: The email address is badly formatted. (auth/invalid-email).')
        {seterror('invalid email')}
        if(err.message==='Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).')
        {seterror('Account not found')}
        else
        {seterror(err.message)}
      }
    }
    async function signupfun(){
      try{
        await signup(emailRef.current.value,passwordRef.current.value)
        navigate('/')
      }
      catch(err){
        if(err.message==='Firebase: The email address is badly formatted. (auth/invalid-email).'){
      seterror('invalid email')}
      else if(err.message==='Firebase: A non-empty password must be provided (auth/missing-password).'){
        seterror('provide password ')}
      else if(err.message==='Firebase: Password should be at least 6 characters (auth/weak-password).'){
        seterror('password too short')
      }}
    }
  return (
    <div className={styles.cont}>
      { show? 
        <div className={styles.box}>
        <div className={styles.title}>sign in</div>
         <div className={styles.detail}>
        <input ref={emailRef} placeholder='email' type='text'/>
         <input ref={passwordRef} placeholder='password' type='text'/>
         </div>
         <button onClick={loginfun}>sign in</button>
         <div className={styles.text}>
          <div style={{color:'red'}}>{error}</div>
            <div> don't have an account?</div>
         <div onClick={()=>setshow(false)}>sign up here</div>
         </div>
      </div>
      :
      <div className={styles.box}>
        <div className={styles.title}>sign up</div>
         <div className={styles.detail}>
        <input ref={emailRef} placeholder='email' type='text'/>
         <input ref={passwordRef} placeholder='password' type='text'/>
         </div>
         <button onClick={signupfun}>sign up</button>
         <div className={styles.text}>
          <div style={{color:'red'}}>{error}</div>
        <div> have an account?</div>
         <div onClick={()=>setshow(true)}>sign in here</div>
         </div>
      </div>
      }
    </div>
  )
}

export default Login
