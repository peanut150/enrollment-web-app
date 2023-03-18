import { useState } from 'react';
import BackBtn from './buttonprops/BackBtn';
import SemBtn from './buttonprops/SemBtn';
import year from './year/year';
import yearStatus from './yearStatus/yearStatus';
import FourthYearFirstSem from './yearStatus/FourthYearSubs/FourthYearFirstSem'
import FourthYearSecondSem from './yearStatus/FourthYearSubs/FourthYearSecondSem';


function ThirdLevelPage({onClickBack, title}) {

  const [show4FirstSem, setShow4FirstSem] = useState(false)
  const [showYearLevelPage, setShowYearLevelPage] = useState(true)
  const [show4SecondSem, setShow4SecondSem] = useState(false)

  return (

        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>
              {show4FirstSem ? (
                    <FourthYearFirstSem onClick={()=> setShow4FirstSem(!show4FirstSem) & setShowYearLevelPage(!showYearLevelPage)}></FourthYearFirstSem>
                  ) : null}

              {show4SecondSem ? (
                    <FourthYearSecondSem  onClick={()=> setShow4SecondSem(!show4SecondSem) & setShowYearLevelPage(!showYearLevelPage)}></FourthYearSecondSem>
                  ) : null}

              {showYearLevelPage ? (
                <>
                <div style=
                {
                  {
                    textAlign:"center",
                    position:"absolute",
                    left: "40rem",
                    top: 70
                  }
                }>

                
              <div>
                <h1 >ENROLL A STUDENT</h1>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
             </div>
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55}}>
              <div>
                <SemBtn onClick={() => setShow4FirstSem(!show4FirstSem) & setShowYearLevelPage(!showYearLevelPage)} title="First Semester"></SemBtn>
              </div>
              <div style={{marginTop:"-13rem"}}>
                <SemBtn onClick={() => setShow4SecondSem(!show4SecondSem) & setShowYearLevelPage(!showYearLevelPage)} title="Second Semester"></SemBtn>
              </div>
             </div>
             <div>
              <BackBtn title = "BACK" onClick={onClickBack}></BackBtn>
             </div>
                </>
              ):null}
             
             
             
             
             
             
             
      </div>
        
  );
}

export default ThirdLevelPage;