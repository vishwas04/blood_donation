var count=0;
window.addEventListener('scroll',()=>{
                            
                            const scrolled =window.scrollY;
                            var x=document.getElementById("h2");
                            var y=document.getElementById("h3");
                            
                            if(scrolled < 430 && count==0)
                            {
                            x.style.opacity=1;
                            y.style.opacity=0;
                            
                            }
                            
                            else if(scrolled > 430 && count==0)
                            {
                            x.style.opacity=0;
                            y.style.opacity=1;
                            count=1;
                            }
                            else if(scrolled < 430 && count==1)
                            {
                            x.style.opacity=0;
                            y.style.opacity=1;
                            
                            
                            }
                            
                            else if(scrolled >380 && count==1)
                            {
                            x.style.opacity=0;
                            y.style.opacity=1;
                                                             }
                            
                            });

