import React, { useEffect, useState }  from 'react'
import styles from './zitempage.module.css'
// import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams,  } from 'react-router-dom';
import { supabase } from '../store/Supabase';
import { decrement, increment } from '../redux/counter';
import { useDispatch } from 'react-redux';
import Card from '../components/Card';
const Zitempage = () => {
  const[file,setfile]=useState([])
  const params=useParams()
  const [image,setimage]=useState()
  const [recomend,setrecomend]=useState([])
  const dispatch = useDispatch()
  const [show,setshow]=useState(true)
  async function recomendation(){ 
    
    const { data, error } = await supabase
    .from('products')
    .select()
    .eq('catagory', file.catagory)
    if(data)
    {setrecomend(data)
    console.log(recomend)
    console.log(data)}
    if(error)
    console.log(error)
     }
     useEffect(()=>{
       recomendation()
     },[file.catagory])
  async function searchfile(){ 
    
    const { data, error } = await supabase
    .from('products')
    .select()
    .eq('id', params.id) 
    if(data)
    {setfile(data[0])
    console.log(data)}
    if(error)
    console.log(error)
     }
     useEffect(()=>{
       searchfile()
       if(file.photo)downloadimage(file.photo)

     },[params.id])

     async function downloadimage(file){
       const { data} = await supabase
       .storage
       .from('pimage')
       .download(file)
       
         const url = URL.createObjectURL(data)
           setimage(url)
       }
       function addtocart(e){
        dispatch(increment(e)) 
        setshow(false)
      }
      function removefromcart(e){
        dispatch(decrement(e.name))
        setshow(true)
      }
     
  return (
    <div className={styles.container}>
    <div className={styles.cont}>
        <div className={styles.box}>
        <div className={styles.itemimg}>
        <img width="100%" height='100%' src={image} alt={image}/>
        </div>
        <div className={styles.iteminfos}>
            <div className={styles.catagory}>{file.catagory} {params.id}</div>
            <div className={styles.itemname}>name: {file.name}
            <div className={styles.itemprice}>price: {file.price}</div>
            </div>
            <div className={styles.itemaddtocart} >{ show? <button onClick={()=>addtocart(file)}>Add to cart</button> : <button onClick={()=>removefromcart(file)}>remove from cart</button>}</div>
            <div className={styles.productdetails}>{file.detail}</div>
        </div>
    </div>

        
    </div>
    <div className={styles.recomended}>recomended</div>
    <div className={styles.map}>
    {recomend.map((f) => (
      <Card {...f} />
    ))}
    </div>
    </div>
  )
}

export default Zitempage