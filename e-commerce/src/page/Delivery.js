import React, { useState } from 'react'
import styles from './Delivery.module.css'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { supabase } from '../store/Supabase'
import { selectcartitem } from '../redux/counter'
const Delivery = () => {
    const phoneRef=useRef()
    const [location,setlocation]=useState(null)
    const [lerror,setlerror]=useState()
    const cartitem = useSelector(selectcartitem);
    const counteritem=cartitem.length
    async function buyproduct(){
        for(let x=0; x<counteritem; x++){

        
            const { error} = await supabase
            .from("delivery")
            .insert({p_id:cartitem[x].id , location: location , phone:phoneRef.current.value,name:cartitem[x].name,photo:cartitem[x].photo})
            if(error){
                setlerror('error')
            }
    }
}
    function selectlocation(e){
        setlocation(e.target.value)
    }
    function submit(){
        if(phoneRef.current.value&&location)
        alert("completed")
        else
        alert("enter the attribute in proper way")
    }
    function buysubmit(){
        submit()
        buyproduct()
    }
  return (
    <div className={styles.cont}>
        <div className={styles.box}>
            <div className={styles.title}>ADD DELIVERY ADDRESS</div>
            <div className={styles.location}>
            <select onChange={(e)=>selectlocation(e)}>
                <option value=''>Location</option>
                <option value='hawassa'>hawassa</option>
                <option value='sheger'>sheger</option>
                <option value='daye'>daye</option>
                <option value='gonder'>gonder</option>
            </select>
            </div>
            <div className={styles.phone}>
            <input placeholder='Phone number' ref={phoneRef} type='number'/>
            </div>
            {lerror}
            <button onClick={buysubmit} >BUY PRODUCT</button>
        </div>
    </div>
  )
}

export default Delivery
