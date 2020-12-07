import React from 'react';
import './AboutUs.css';

function Card({Name,ImageUrl,Details}) {
  return( 
    <div className='card-container'>
      <div className='image-container'>
        <img src={ImageUrl} alt=''/>
      </div>
         <div className='name'><h4>{Name}</h4></div>
      <div className='details'><p>{Details}</p></div>  
    </div>
  );
}

function AboutUs(){
  return(
  <div className='contactPage' style={{background : "orangered"}}>
    <br/>
    <p style={{margin:'0rem 1rem' ,fontSize:'1rem',color:"black"}}>
      This Website was created in the year 2020 to help patients suffering from Covid-19 by connecting them with Covid-recovered people interested Donating Plasma and Blood for treatments.<br/>
      The Covid-19 recovered patients interested in donating plasma for Plasma therapy can register through this website and provide their details through which they can be reached to.<br/>
      Any Suggestions regarding this Website can be mailed to <strong><i>plasmadonors_pesu@gmail.com</i></strong>
    </p>
    <h2 style={{margin:'1rem'}}>Creators of this Website:</h2>

    <div className='allCards'>
      <Card Name='Vishwas R' ImageUrl='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/21/16/albert-einstein-head.jpg' Details='Student of PES University'/>
      <Card Name='Uthpal P' ImageUrl='https://www.ballarataquaticcentre.com/wp-content/uploads/2020/07/mask-icon.jpg' Details='Student of PES University'/>
      <Card Name='Vireesh R Kadole' ImageUrl='https://image.shutterstock.com/image-vector/vector-illustration-scientist-albert-einstein-260nw-1593352288.jpg' Details='Student of PES University'/>
      <Card Name='Tejas Vasishta' ImageUrl='https://image.shutterstock.com/image-vector/vector-illustration-scientist-albert-einstein-260nw-1593352288.jpg' Details='Student of PES University'/>
    </div>

  </div>)
}

export default AboutUs;

