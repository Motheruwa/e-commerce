import React, { useEffect, useRef, useState } from 'react'
import styles from "./Sell.module.css"
import { supabase } from '../store/Supabase'
import { Auth } from '../store/Context'
import { useNavigate } from 'react-router-dom'
const Sell = () => {
  const[image,setimage]=useState()
  const [catagory,setcatagory]=useState()
  const [location,setlocation]=useState()
  const [show,setshow]=useState(true)
  const [file,setfile]=useState()
  const [zpath,setzpath]= useState()
  const img=useRef()
  function theimage(e){
    const file = e.target.files[0]

    const url = URL.createObjectURL(file)
    setimage(url)
    setfile(file)
    
  }
  async function upload(){
const {data, error } = await supabase
  .storage
  .from('pimage')
  .upload(zpath, file)
    if(error){
    console.log(error)
  }
  }
  function choose(){
    img.current.click()
  }
  async function sell(){
    if(file){
      const filetext = file.name.split(".").pop();
      const filename = `${Math.random()}.${filetext}`;
      const path = `${filename}`;
      setzpath(filename);
const { error } = await supabase 
.from('products')
.insert({  name: nameref.current.value , price: priceref.current.value , catagory: catagory , address: location, detail: detailref.current.value, photo: zpath})
   if(error)
   console.log(error)
    }
    upload()
  }
  useEffect(() => {
    if (file) {
      const filetext = file.name.split(".").pop();
      const filename = `${Math.random()}.${filetext}`;
      const path = `${filename}`;
      setzpath(filename);
    }
  }, [file]);
  function selectcatagory(e){
     setcatagory(e.target.value)
  }
  function selectlocation(e){
     setlocation(e.target.value)
  }
  function submit(){
    if(nameref.current.value && priceref.current.value&& catagory && location && detailref.current.value)
    alert("submitted")
    else
    alert(" not submitted please enter in proper ways")
  }
  function sellsubmit(){
    sell()
    submit()
  }
  const {currentUser}=Auth()
  const navigate=useNavigate()
  useEffect(()=>{
    if(!currentUser){
      navigate('/login')
    }
    else{
      navigate('/sell')
    }
  },[currentUser])
  const nameref= useRef()
  const priceref= useRef()
  const detailref= useRef()
  return (
    <div className={styles.box}>
      <div className={styles.first} style={{display:show?'flex':'none'}}>
        <div className={styles.top}>Step 1:Product</div>
        <div className={styles.body}>
          <input ref={nameref} placeholder='product name'/>
          <img className={styles.chooseimg} onClick={choose} src={image} alt='choose img'/>
          <select onChange={selectcatagory}>
            <option value=''>Catagory</option>
            <option value='flowers'>flowers</option>
            <option value='pets'>Pets</option>
            <option value='food'>Food</option>
            <option value='ehone'>Phone</option>
            <option value='electronics'>Electronics</option>
            <option value='books'>Book</option>
            <option value='cosmotics'>cosmotics</option>
            <option value='shoes'>shoes</option>
            <option value='lexury'>lexury</option>
          </select>
          <select onChange={selectlocation}>
            <option value=''>location</option>
            <option value='addisabeba'>addis abeba</option>
            <option value='Hawassa'>Hawassa</option>
            <option value='daye'>daye</option>
            <option value='gonder'>gonder</option>
          </select>
        </div>
        <button onClick={()=>setshow(false)}>Next</button>
      </div>
      <div className={styles.second} style={{display:show?'none':'flex'}}>
      <div className={styles.top}>Step 2:Product Details</div>
      <button onClick={()=>setshow(true)} className={styles.back} style={{color:'rgb(0,140,255'}}>Back</button>
        <div className={styles.body}>
          <input ref={priceref} type='number' placeholder='Price'/>
          <input ref={img} type='file' hidden onChange={theimage}/>
          <input ref={detailref} type='text' maxLength={150} placeholder='Description'/>
        </div>
        <button onClick={sellsubmit}>Sell</button>
      </div>
    </div>
  )
}

export default Sell
