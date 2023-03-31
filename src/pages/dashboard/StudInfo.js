import { useState } from 'react';
import logo from "./../dashboard/logoUni.png";
import year from "../../components/year/year";
import "./../../styles/styles.css";
import InputProps from './Component/InputBox';
import { border } from '@mui/system';
import './dashboard.css'
import Check from './Check';

function StudInfo({back, next}) {
  //const [yearStatus, setYearStatus] = useState('');
  const [firstYear, setFirstYear] = useState(false);
  const [secondYear, setSecondYear] = useState(false);
  const [thirdYear, setThirdYear] = useState(false);
  const [fourthYear, setFourthYear] = useState(false);
  const [main, setMain] = useState(true)


  return (
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
        <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
      </div>


        <div>

          <div>
            <h1 style={{marginLeft: 100, fontSize: 50, alignItems:"flex-start", display:"flex", paddingTop: 30}}>Student Information</h1>
          </div>

          <div>

          <div style={{display:"flex", flexDirection:"row", marginLeft:"15rem"}}>
            <InputProps text="First Name"></InputProps>
            <InputProps text="Middle Name"></InputProps>
            <InputProps text="Last Name"></InputProps>
          </div>

          <div style={{display:"flex", flexDirection:"row", marginLeft:"15rem", marginTop: "3rem"}}>
            <InputProps text="Age"></InputProps>
            <InputProps text="Sex"></InputProps>
            <InputProps text="Birthdate"></InputProps>
          </div>

          <div style={{display:"flex", flexDirection:"row", marginLeft:"15rem", marginTop: "3rem"}}>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Address</h4></div>
                    <div style={{marginLeft: "5rem"}}><input style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"35rem", padding:5}}></input></div>
                </div>
            <InputProps text="Birthplace"></InputProps>
          </div>

          <div style={{display:"flex", flexDirection:"row", marginLeft:"15rem", marginTop: "3rem"}}>
            <InputProps text="Father's Name"></InputProps>
            <InputProps text="Mother's Name"></InputProps>
          </div>

          <div style={{display:"flex",  flexDirection:"row", width:"20rem", backgroundColor:"red", marginLeft:"25rem", marginTop:"2rem", marginBottom: "2rem"}}>
            <div style={{marginRight: "20rem"}}><Check title="Registrar (Forms)"></Check></div>
            <div style={{marginRight: "20rem"}}><Check title="Clearance"></Check></div>
            <div><Check title="PTA"></Check></div>    
          </div>
          
            
          </div>
        <div>

          </div>






          <div style={{display:"flex", flexDirection:"column"}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
            <button className='backbtn' onClick={back}>BACK</button>
            <button className='nextbtn' onClick={next}>NEXT</button>
          </div>
          </div>
          
      </div>
    

      
    </div>
  );
}

export default StudInfo;
