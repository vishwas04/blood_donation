import React from 'react';
import './photos.css';

class Images extends React.Component{
    render(){ 
      var slideIndex = 1;

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        }

      return (
        <div className='fullContactpage'>
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertext">1 / 5</div>
                <img src="https://www.ballarataquaticcentre.com/wp-content/uploads/2020/07/mask-icon.jpg" style={{width:'100%'}} alt=''/>
              </div>
    
              <div className="mySlides fade">
                <div className="numbertext">2 / 5</div>
                <img src="https://www.ballarataquaticcentre.com/wp-content/uploads/2020/07/mask-icon.jpg" style={{width:'100%'}} alt=''/>
              </div>
      
              <div className="mySlides fade">
                <div className="numbertext">3 / 5</div>
                <img src="https://www.ballarataquaticcentre.com/wp-content/uploads/2020/07/mask-icon.jpg" style={{width:'100%'}} alt=''/>
              </div>
      
              <div className="mySlides fade">
                  <div className="numbertext">4 / 5</div>
                  <img src="https://www.ballarataquaticcentre.com/wp-content/uploads/2020/07/mask-icon.jpg" style={{width:'100%'}} alt=''/>
              </div>
      
              <div className="mySlides fade">
                  <div className="numbertext">5 / 5</div>
                  <img src="https://www.ballarataquaticcentre.com/wp-content/uploads/2020/07/mask-icon.jpg" style={{width:'100%'}} alt=''/>
              </div>
    
              <link className="prev" to='#' onclick={plusSlides(-1)}>&#10094;</link>
              <link className="next" to="#" onclick={plusSlides(1)}>&#10095;</link>
      
            </div>
            <br/>
      
            <div style={{textAlign:'center'}}>
              <span className="dot" onclick={currentSlide(1)}></span> 
              <span className="dot" onclick={currentSlide(2)}></span> 
              <span className="dot" onclick={currentSlide(3)}></span> 
              <span className="dot" onclick={currentSlide(4)}></span> 
              <span className="dot" onclick={currentSlide(5)}></span> 
              
            </div>
            <showSlides n={slideIndex}/>
        </div>
      );
    }
}

export default Images;
