//BarraHerramientasDel3.js
//<Link to='/ModalModulos'></Link> 
import React, { Fragment, useState,useContext } from "react";

import tresseissiete from '../assets/tresseissiete.GIF';
import './BarraHerramientasDel3.css'
import { Link, Redirect } from "react-router-dom";
import ModalModulos from "./ModalModulos";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientasDel3 = ({t1}) => {
   const {isModalModulosOpen,setIsModalModulosOpen,setT1ModalModulos} = useContext(ModalContext);
   //console.log('BarraHerramientasDel3 0 t1:',t1);
    //console.log('BarraHerramientasDel3 1 isModalModulosOpen:',isModalModulosOpen);
    //console.log('BarraHerramientasDel3 2 setIsModalModulosOpen:',setIsModalModulosOpen);
    //console.log('BarraHerramientassDel 3 setT1ModalModulos:',setT1ModalModulos);
    const onClose=()=>{
          setIsModalModulosOpen(!isModalModulosOpen);
          setT1ModalModulos('Del Modulo'); 
                        };
  return (
    <React.Fragment>
   
    {isModalModulosOpen && <ModalModulos onClose={onClose}/>}
             <img onClick={onClose} className="com__function_bar__icon" src={tresseissiete} alt="xxxxxx" title="Eliminar Modulo"/>
          
    </React.Fragment>
  );
};

export default BarraHerramientasDel3;

