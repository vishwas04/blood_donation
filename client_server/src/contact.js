import React from 'react';
import './contact.css';

function Contactus(){
    return(
    <div className='leftContactpage' style={{clear: 'both'}}>
        <div className='leftblocks'>
        <div className='cardcontainer'>
           <h2 className="hhh2" style={{textAlign:"center"}}>Regarding Plasma Donation</h2>
            
            <h3>General Info:</h3>
            <h3 ><a href='https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/donate-covid-19-plasma#:~:text=People%20who%20have%20fully%20recovered,are%20eligible%20to%20donate%20blood.'>USFDA Covid-19 Plasma</a></h3>
            <h3 ><a href='https://covid19.karnataka.gov.in/storage/pdf-files/Circular-Guidelines%20for%20COVID-19%20Convalscent%20Plasma%20Therapy.pdf'>Govt. Guidelines for Plasma Donation</a></h3>
            
            <h3>Govt Plasma Donation Helpline:</h3>
            <h3 > 080 6191490</h3>
        </div>

        <div className='cardcontainer'>
            <h2 className="hhh2" style={{textAlign:"center"}}>Helpline Numbers</h2>
            <h3>Control Room Numbers:</h3>
            <h3 >+91-9745697456</h3>
            <h3 >+91-9980299802</h3>
            <h3>State Govt Apthamitra:</h3>
            <h3 > 14410</h3>
        </div>
    </div>
    </div>);
}

export default Contactus;

