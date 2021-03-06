//BarraHerramientas10.js

import React, { Fragment, useState,useContext } from "react";
import dostrescuatro from '../assets/dostrescuatro.GIF';
import './BarraHerramientas11.css'
import { Link, Redirect } from "react-router-dom";
import ModalNewAlarmas from "./ModalNewAlarmas";
import {ModalContext} from "../context/ModalesContext.js";

const BarraHerramientas11 = ({t1}) => {
const {isModalNewAlarmasOpen,setIsModalNewAlarmasOpen,t1ModalNewAlarmas,setT1ModalNewAlarmas} = useContext(ModalContext);   
   
    //console.log('BarraHerramientas11...');
  const onClose=()=>{

       setIsModalNewAlarmasOpen(!isModalNewAlarmasOpen);
       setT1ModalNewAlarmas('Add NewAlarma');                   
                      
                     };

                          
  return (
    <React.Fragment>
     
          {isModalNewAlarmasOpen && <ModalNewAlarmas onClose={onClose}/>} 
          <img onClick={onClose} className="com__function_bar__icon" src={dostrescuatro} alt="xxxxxx" title="Insertar Alarma"/>
         
    </React.Fragment>
  );
};

export default BarraHerramientas11;

