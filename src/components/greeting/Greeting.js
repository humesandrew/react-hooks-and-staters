
import React, { useState } from 'react'; 
import "./greeting.scss";



export default function Greeting() {

const [firstName, setFirstName] = useState('Bat');
const [lastName, setLastName] = useState('Man');


const handleFirstNameChange = (e) => setFirstName(e.target.value);
const handleLastNameChange = (e) => setLastName(e.target.value);

return(
    <div>

    <h1>This is a greeting tester. </h1>

    </div>
    )
};