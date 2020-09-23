import { Button, Divider, Input } from '@material-ui/core';
import React, { useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
const Contact = ({ data }) => {
   // const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const email = "prblmslvr.adity@gmail.com"
   const [message, setMessage] = useState('');

   console.log(data)

    const handleClick = (e) => {
       e.preventDefault();
       console.log("Hey there !!!");
       if(name === "" || email === ""  || message === "") {
         alert("Please fill all the details")
       } else {
          window.open(`mailto:${email}?subject=${subject}&body=${message}`);
       }
    }

    return (

      <section id="contact">
         <div className="contact">
            <form>
                  <div className="contact-header">
                     <EmailIcon className="email-icon"/>
                     <p> Let's connect !</p>
                  </div>
                  <fieldset>
                     <div className="contact-items">
                        <label for="name">Name*</label>
                        <input className="contact-items-input" type="text" id="name" value={name} onChange={(event)=>setName(event.target.value)} />
                     </div>
                     <div className="contact-items">
                        <label for="subject">Subject*</label>
                        <input className="contact-items-input" type="text" id="subject" value={subject} onChange={(event)=>setSubject(event.target.value) }/>
                     </div>
                     <div className="contact-items message">
                        <label for="message">Message*</label>
                        <textarea className="contact-items-input" type="text" id="Message" value={message} onChange={(event)=>setMessage(event.target.value)} />
                     </div>

                     <button className="contact-button" onClick={handleClick}> Submit </button>
                  </fieldset>
               </form>
         </div>
      </section>
    )
}

export default Contact;