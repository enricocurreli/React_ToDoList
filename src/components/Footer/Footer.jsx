import Button from '../Button/Button'
import { useState } from 'react';
import style from './Footer.module.css';
import { AiFillLike } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";

const Footer = () => {


  const [counter, setCounter]= useState(1)

  const handleCounterUP = () => {

    if (counter < 10) {
      
      setCounter((prev) => prev +1)
    }

  }

  const handleCounterDOWN = () => {

    if (counter > 1) {
      
      setCounter((prev) => prev - 1)
    }

  }

  const textUP = <AiFillLike />
  const textDOWN = <AiFillDislike />
  return (

    <>
    <footer className="container-fluid pb-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6 mt-5 mb-3">
            <h4 className={'fw-bold ' + style.title}>Hai trovato utile la pagina?</h4>
            <h5 className={'my-3 ' + style.title}> Lasciami un voto </h5>
            <h6 className={' ' + style.title}>Voto: <span className='fw-bold'>{counter} / 10</span></h6>
            <div className="row">
              <div className="col-2"><Button  text={textUP} callback={handleCounterUP}/></div>
              <div className="col-6"><Button  text={textDOWN} callback={handleCounterDOWN}/></div>
            </div>
            
           
          </div>
          <div className="col-12 col-md-6">
            <h5 className={'mt-5 ' + style.title}>Seguimi sui social :</h5>
            <a target='_blank' href="https://www.linkedin.com/in/e-curreli-webdeveloper" className={'fs-4 text-decoration-none social p-3 ' + style.logoLinkedin}> <BsLinkedin /> </a>
            <a target='_blank' href="https://github.com/enricocurreli" className='fs-4 text-dark social '> <FaGithub /> </a>
            <p className={"mt-3 " + style.title}>© All right Reversed.</p>
          </div>
            
        </div>
    </footer>
    
    
    </>
  )
}


export default Footer;