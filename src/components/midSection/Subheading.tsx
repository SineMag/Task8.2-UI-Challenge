import React from 'react'

export default function Subheading() {
  return (
    <div style={{
        width: '80%',
        height: '10vh',
        display: ' flex',
        flexDirection: 'row',
        justifySelf: 'center',
        alignContent:'center',
        alignItems: ' center',
        justifyItems: 'end',
        marginTop: '10%',
        backgroundColor: '#2C263E',
        color: ' #FFFFFD'
    }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
      <p
      style={{
        width:'50%',
        fontSize: '20px',
        paddingLeft: '10%',
      }}>Find out more about how we work</p>

      <div className="viewButton" style={{
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        <button
          style={{
        
            fontSize: "8px",
            padding: "5px",
            borderRadius: "0px",
            backgroundColor: "#2C263F",
            color: "#bbb9c0ff",
            border: "1px solid #bbb9c0ff",
          }}
        >
          HOW WE WORK
        </button>
      </div>
      </div>
    </div>
  )
}
