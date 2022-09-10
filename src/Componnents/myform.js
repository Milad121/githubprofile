import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Profile from '../profile';
import Repos from './repos';
//this.props.

function Myform(prop) {
    const [username, setName] = useState("");
   
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const root2 = ReactDOM.createRoot(document.getElementById('root2'));
    const shoot = () => {
       

        root.render(<Profile Username={username}/>);
        root2.render(<Repos Username={username}/>);
      }
     
     
    return( <div aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4" method="post">
    <input type="text" className="from-contorl" placeholder="insert username" value={username} onChange={(e) => setName(e.target.value)}/>
    <button onClick={shoot}>get data</button></div>);
    
  }


  export default Myform;