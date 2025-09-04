import React from "react";

export default function SubHeadings() {
  return (
    <div className="bottomNavBar" style={{
        display:'flex',
        flexDirection: 'row',
        width:'80%',
        justifyContent:'space-between',
        alignContent:'center',
        color: '#5e5c64ff',
        lineHeight:'150%',
        fontSize:'10px',
        padding:'10px',
       

        
    }}>
      <div className="howWeWork">
        <ul style={{
        display:'flex',
        flexDirection: 'column',
        listStyleType:'none'}}>
          <li>How we work</li>
          <li> Why Insure?</li>
          <li> View plans</li>
          <li> Reviews</li>
        </ul>
      </div>

      <div className="faq">
        <ul style={{
        display:'flex',
        flexDirection: 'column',
        listStyleType:'none'}}>
          <li>FAQ</li>
          <li> Terms of use</li>
          <li> Privacy policy</li>
          <li> Cookies</li>
        </ul>
      </div>

      <div className="sales">
        <ul style={{
        display:'flex',
        flexDirection: 'column',
        listStyleType:'none'}}>
          <li> Sales</li>
          <li> Support</li>
          <li> Live chat</li>
        </ul>
      </div>

      <div className="careers">
        <ul style={{
        display:'flex',
        flexDirection: 'column',
        listStyleType:'none'}}>
          <li> Careers</li>
          <li> Press</li>
          <li> Licenses</li>
        </ul>
      </div>
    </div>
  );
}
