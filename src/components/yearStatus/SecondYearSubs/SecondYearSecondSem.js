import React, { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
import PhysicalActivityTowardsHealthandFitness2 from "./Component/PhysicalActivityTowardsHealthandFitness2Prof";
import SubjectBtn from "./SubjectBtn";
import InformationManagement from "./Component/InformationManagementProf";
import Networking1 from "./Component/Networking1Prof";
import WebSystemsandTechnologies from "./Component/WebSystemsandTechnologiesProf";
import SystemsIntegrationandArchitecture from "./Component/SystemsIntegrationandArchitectureProf";
import Ethics from "./Component/EthicsProf";
import LifeandWorksofRizal from "./Component/LifeandWorksofRizalProf";

function SecondYearSecondSem({onClick, title}) {
const [showPATHFIT4, setShowPATHFIT4] = useState(false)
const [showIT221, setShowIT221] = useState(false)
const [showIT222, setShowIT222] = useState(false)
const [showIT223, setShowIT223] = useState(false)
const [showIT224, setShowIT224] = useState(false)
const [showEthc, setShowEthc] = useState(false)
const [showRizal, setShowRizal ] = useState(false)
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

          {showPATHFIT4 ? (
            <>
            <PhysicalActivityTowardsHealthandFitness2 onClickBack={() => setShow(!show) & setShowIT411(!showIT411)}></PhysicalActivityTowardsHealthandFitness2>
            </>
          ) : null}

          {showIT221 ? (
            <>
            <InformationManagement>onClickBack={() => setShow(!show) & setShowIT411(!showIT411)}</InformationManagement>
            </>
          ) : null}

          {showIT222 ? (
             <>
             <Networking1>onClickBack={() => setShow(!show) & setShowIT411(!showIT411)}</Networking1>
             </>
          ) : null}

          {showIT223 ? (
             <>
             <WebSystemsandTechnologies>onClickBack={() => setShow(!show) & setShowIT411(!showIT411)}</WebSystemsandTechnologies>
             </>
          ) : null}

          {showIT224 ? (
              <>
              <SystemsIntegrationandArchitecture>onClickBack={() => setShow(!show) & setShowIT411(!showIT411)}</SystemsIntegrationandArchitecture>
              </>
          ) : null}

          {showEthc ? (
              <>
              <Ethics>onClickBack={() => setShow(!show) & setShowIT411(!showIT411)}</Ethics>
              </>
          ) : null}

          {showRizal ? (
              <>
              <LifeandWorksofRizal>onClickBack={() => setShow(!show) & setShowIT411(!showIT411)}</LifeandWorksofRizal>
              </>
          ) : null}

          {show ? (
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
              <div style={{marginLeft: "-40rem", marginTop: "-5rem"}}>
                <h1 style={{fontWeight:"bold", fontSize: 60}}>LIST OF SUBJECTS</h1>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
             </div>
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55, marginTop: "8rem"}}>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT411(!showIT411)} code="PATHFIT4" title="Physical Activity Towards Health and Fitness 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT412(!showIT412)} code="IT221" title="Information Management"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT413(!showIT413)} code="IT222" title="Networking 1"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT414(!showIT414)} code="IT223" title="Web Systems and Technologies"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT415(!showIT415)} code="IT224" title="Systems Integration and Architecture"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT412(!showIT412)} code="Ethc" title="Ethics"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowGnS(!showGnS)} code="Rizal" title="Life and Works of Rizal"></SubjectBtn>
              </div>
             </div>
             <div style={{marginTop: 54, marginLeft: -255}}>
              <BackBtn title = "BACK" onClick={onClick}></BackBtn>
             </div>
             
            </>
          ):null}
             
             
      </div>
      </>
        
  );
}

export default SecondYearSecondSem;