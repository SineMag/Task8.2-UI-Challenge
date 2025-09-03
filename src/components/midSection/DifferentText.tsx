import React from "react";

export default function DifferentText() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20%',
    }}>
    <div
      className="differentText"
      style={{
        display: "flex",
        width: "80%",
        height: "70%",
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <hr style={{
        color: "grey",
        height: '2px',
        width:'13%',
        border:'1px solid #F6EFF7'
      }} />
      <h2 style={{color:'#2C292F'}}>We're different</h2>
    </div>
    </div>
  );
}
