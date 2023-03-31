import { useState } from 'react';
import logo from "./../dashboard/logoUni.png";
import year from "../../components/year/year";
import YearLevelPage from '../../components/FourthLevelPage';
import FirstLevelPage from '../../components/FirstLevelPage';
import SecondLevelPage from '../../components/SecondLevelPage';
import ThirdLevelPage from '../../components/ThirdLevelPage';
import StudInfo from '../dashboard/StudInfo';
import InputProps from './Component/InputBox';

function Confirmation({back, next}) {

  return (
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
        <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
      </div>
      

        <div>
            <div>
                <h1 style={{marginLeft: 100, fontSize: 50, display:"flex", paddingTop: 30, paddingBottom: 30}}>Confirmation</h1>
            </div>
        </div>
        <div style={{marginLeft:"15rem"}}>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div ><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Address</h4></div>
                    <div style={{marginLeft: "-35rem"}}><input disabled style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"35rem", padding:5}}></input></div>
                </div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column", marginTop: 30}}>
                    <div ><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Year Level</h4></div>
                    <div style={{marginLeft: "-53rem"}}><input disabled style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"17rem", padding:5}}></input></div>
                </div>
            
          </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "7rem" }}>
          <div style={{marginRight: 30}}><button style={{width:"20rem", fontWeight:"inherit", fontSize: 15, marginLeft: "25rem"}} className='backbtn'>Confirm Enrollment</button></div>
            <div style={{marginLeft: 30}}><button style={{width:"20rem", fontWeight:"inherit", fontSize: 15, marginRight: "25rem"}} className='nextbtn'>Print COR</button></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 50 }}>
            <button className='backbtn' onClick={back}>BACK</button>
            <button style={{width:"10rem"}} className='nextbtn' onClick={next}>DASHBOARD</button>
        </div>
    </div>
  );
}

export default Confirmation;
