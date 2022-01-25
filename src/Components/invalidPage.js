import React from 'react';
import { Link } from 'react-router-dom';

export default function InvalidPage() {
  return(
    <div style={{display:"block",width:"80%",margin:"20px auto"}}>
        <h2 style={{textAlign:"center", marginTop:"4%", marginBottm:"4%"}}>Looks like you are lost in space. Click here to go home</h2>
        <Link to="/" replace={true} style={{marginLeft:"45%", marginTop:"100px",borderRadius:"8px", padding:"16px 30px", backgroundColor:"green", textDecoration:"none", color:"white"}}>Click here</Link>
    </div>
  );
}
