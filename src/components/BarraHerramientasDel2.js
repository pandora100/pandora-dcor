//BarraHerramientas1.js
//<Link to='/ModalAgentes'></Link> 
import React, { Fragment, useState,useContext } from "react";
import unocinconueve from '../assets/unocinconueve.GIF';
import './BarraHerramientasDel2.css'
import { Link, Redirect } from "react-router-dom";
import ModalAgentes from "./ModalAgentes";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientasDel2 = ({t1}) => {
   const {isModalAgentesOpen,setIsModalAgentesOpen,setT1ModalAgentes} = useContext(ModalContext);
   //console.log('BarraHerramientasDel2 0 t1:',t1);
    //console.log('BarraHerramientasDel2 1 isModalAgentesOpen:',isModalAgentesOpen);
    //console.log('BarraHerramientasDel2 2 setIsModalAgentesOpen:',setIsModalAgentesOpen);
    //console.log('BarraHerramientassDel 3 setT1ModalAgentes:',setT1ModalAgentes);
    const onClose=()=>{
          setIsModalAgentesOpen(!isModalAgentesOpen);
          setT1ModalAgentes('Del Agente'); 
                        };
  return (
    <React.Fragment>
    
    {isModalAgentesOpen && <ModalAgentes onClose={onClose}/>}
        <img  onClick={onClose} className="com__function_bar__icon" src={unocinconueve} alt="xxxxxx" title="Eliminar Agente"/>  
         
          
    </React.Fragment>
  );
};

export default BarraHerramientasDel2;

