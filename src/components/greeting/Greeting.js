
import React, { useState, useEffect } from 'react'; 
import "./greeting.scss";



export default function Greeting() {


    // now im going to use useEffect hook to put input in local storage, and ahve that be the persistent state///////////////////////
    
    const [firstName, setFirstName] = useState(() =>
    window.localStorage.getItem('hooksFirstName') || ''
  );
  const [lastName, setLastName] = useState(() =>
    window.localStorage.getItem('hooksLastName') || ''
  );


const handleFirstNameChange = (e) => setFirstName(e.target.value);
const handleLastNameChange = (e) => setLastName(e.target.value);

useEffect(() => {
    window.localStorage.setItem('hooksFirstName', firstName);
    window.localStorage.setItem('hooksLastName', lastName);
  });

return(
    <div className='greeting'>

    <h2>This is a greeting tester. </h2>

    <input value={firstName} onChange={handleFirstNameChange}></input>
    < br/>
    <input value={lastName} onChange={handleLastNameChange}></input>
<p> Hello, {firstName} {lastName}. </p>
    </div>
    )
};