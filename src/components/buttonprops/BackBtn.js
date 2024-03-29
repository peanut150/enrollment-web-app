import React from "react";



export default function BackBtn ({title, onClick}){
    return(
        <div style={{marginTop: "30rem", marginLeft: "-55rem", display:"flex", position:"relative"}}>
            <div>
            <button
            onClick={onClick}
            style={{
                display:"block",
                height: 41,
                width: 90,
                border:"none",
                background: "linear-gradient(to right, #18ABDA, #49C5EC, #7EE0FF)",
                borderRadius: 5,
                boxShadow:"5px 10px 15px #A9E1F2",
                color: "white",
                fontWeight: 'bold',

            }}
            >{title}</button>
            </div>
            
        </div>
    )
}