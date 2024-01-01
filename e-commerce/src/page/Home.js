import React from "react";
import styles from "./home.module.css";
import {GrUserAdmin} from"react-icons/gr"
import {CiDeliveryTruck} from"react-icons/ci"
import {AiOutlineShoppingCart} from"react-icons/ai"
import {MdEmail} from"react-icons/md"
import {FaTelegramPlane} from"react-icons/fa"

import {FaShopify} from 'react-icons/fa'
import {FaSellsy} from 'react-icons/fa'
import {HiTemplate} from 'react-icons/hi'

import {FiLogIn} from 'react-icons/fi'

import { Link } from "react-router-dom";
import Pic from '../img/bk.jpg'
const Home = () => {
  return(
    <div className={styles.cont}>
      <div className={styles.animated}>
        <div className={styles.letter}>A</div>
        <div className={styles.letter}>F</div>
        <div className={styles.letter}>C</div>
        <div className={styles.letter}>A</div>
        <div className={styles.letter}>N</div>
        <div className={styles.letter}> </div>
        <div className={styles.letter}>S</div>
        <div className={styles.letter}>H</div>
        <div className={styles.letter}>O</div>
        <div className={styles.letter}>P</div>
      </div>
    <div className={styles.home}>
      <img width={"100%"} height={"600px"} src={Pic} alt={"fuck"}/>
    </div>
    <div className={styles.bottom}>
      <div>
        <div className={styles.contact}>contact us</div>
        <span className={styles.l}><span><FaTelegramPlane/></span><span><a href="https://t.me/@motheruwa">Telegram</a></span></span>
        <span className={styles.l}><span><MdEmail/></span><span><a href="mailto:estifanosassalif19@gmail.com">Estifanos Assalif</a></span></span>
      </div>
      <div>
    <div><Link to='catagory'><HiTemplate/>catagory</Link></div>
    <div><Link to='shop'><FaShopify/>shop</Link></div>
    <div><Link to='sell'><FaSellsy/>sell</Link></div>
    <div><Link to='delivery'><CiDeliveryTruck/>delivery</Link></div>
    <div><Link to='cart'><AiOutlineShoppingCart/>cart</Link></div>
    </div>

    <div>
    <div>
    <div>
       <Link to='adminpage'><GrUserAdmin color={"white"}/>admin</Link> </div>
      <Link to='login'><FiLogIn/>login</Link></div>
      
    </div>
    </div>
    </div>
  )
};

export default Home;
