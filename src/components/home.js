import React from 'react'
import IMAGES from './images.js'

function Home() {
    return (
    <div>

    {/*<nav class="navbar navbar-expand-lg navbar-light bg-light topbar">
        <a class="navbar-brand" href="#">Swen Tang</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a id = "Programming" class="nav-link" href = "#banner3">Stack</a>
            </li>
            <li class="nav-item">
                <a id = "Blog" class="nav-link" href = "#banner4">Projects</a>
            </li>
            <li class="nav-item">
                <a id = "Blog" class="nav-link" href = "#banner5">Experience</a>
            </li>
            <li class="nav-item">
                <a id = "Contact" class="nav-link" href = "#banner6">Travels</a>
            </li>
            <li class="nav-item">
                <a id = "Blog" class="nav-link" href = "#banner5">Socials</a>
            </li>
        </ul>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="http://www.github.com/EssWhyy">
                    <i class = "fa fa-github"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="http://www.linkedin.com/in/swen-yi-tang-895b6b1b2">
                    <i class="fa fa-linkedin"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="http://www.instagram.com/sytang99">
                    <i class="fa fa-instagram"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <i class="fa fa-youtube"></i>
                </a>
            </li>
        </ul>
    </div>

    </div>
    </nav>*/}


<div className ="banner" id = "banner1">
    <div id = "slideshow">
        <img className = "slide" id = "slide1" src= {require('../images/slides/slide1.jpg')}></img>
        <img className = "slide" id = "slide2" src= {require('../images/slides/slide2.jpg')}></img>
        <img className = "slide" id = "slide3" src= {require('../images/slides/slide3.jpg')}></img>
        <img className = "slide" id = "slide4" src= {require('../images/slides/slide4.jpg')}></img>
    </div>
    <div className = "transparencylayer">
    <div className = "banner-heading">
        <h1>Swen Tang</h1>
        <h3>Singaporean Computer Science Undergraduate and Developer</h3>

        <a id="arrow" href = "#banner2"></a>
    </div>
    </div>
</div>

{/*
<div class= "banner" id = "banner2">

<div class = "banner-heading2"> 
<img id="profile_pic" src="images/headshot.png"></img>
<h2> 
Hello!
</h2>
<h5>I'm Swen, a penultimate year Computer Science student from NUS.
I'm interested in the fields of Full Stack Web and Software Development and UI/UX Design

<br />
Here you can find some of the work that I have done, the skills I offer, as well as other interesting things about me.
</h5>
<br/>
</div>
</div>

<div class="banner" id = "banner3">
<div class= "banner-heading3">
    <h5 style="line-height: 150%;"> 
    I'm a fullstack developer who is most passionate about web development. 
    I have experience working in various front-end and back-end technologies and tools.
    I draw my learning from multiple internships and independent projects.
    <br/>
    </h5>

    <h3>Stack</h3>
    <div id="techstack"></div> 

    <h3>Recent Projects:</h3>
    <div class = "stackrow">
        <div class="portfoliomodal hoverexpand">
            <img src="../../public/assets/images/projects/latest1.jpg" class="portfolioimage2"/>
            <div class="captionblock">
                <div class="captiontext">TrainGoWhere</div>
            </div>
        </div>
        <div class="portfoliomodal hoverexpand">
            <img src="images/projects/latest2.jpg" class="portfolioimage2"/>
            <div class="captionblock">
                <div class="captiontext">NUS ModReg Demand (WIP)</div>
            </div>
        </div>
        <div class="portfoliomodal hoverexpand">
            <img src="images/projects/latest3.jpg" class="portfolioimage2"/>
            <div class="captionblock">
                <div class="captiontext">Uplifting News (WIP)</div>
            </div>
        </div>

    </div>
    <h3>Work/Intern Experience:</h3>
    <div class="stackrow">
        <div class="portfoliomodal hoverexpand">
            <img src="images/internships/latest1.jpg" class="portfolioimage2"/>
            <div class="captionblock">
                <div class="captiontext">A*STAR SimTech (Nov 2016 - Jan 2017)</div>
            </div>
        </div>
        <div class="portfoliomodal hoverexpand">
            <img src="images/internships/latest2.jpg" class="portfolioimage2"/>
            <div class="captionblock">
                <div class="captiontext">Venture Corporation Limited (Jan - Apr 2020)</div>
            </div>
        </div>
        <div class="portfoliomodal hoverexpand">
            <img src="images/internships/latest3.jpg" class="portfolioimage2"/>
            <div class="captionblock">
                <div class="captiontext">Urban Redevelopment Authority (May - Sep 2022)</div>
            </div>
        </div>
    </div>
    
    <button type="button" onclick= "location.href='http://www.github.com/EssWhyy';" class="btn btn-dark btn-lg btn-block">Also check out my Github!</button>
    <br/>
    <button type="button" onclick= "location.href='http://www.linkedin.com/in/swen-yi-tang-895b6b1b2';"class="btn btn-info btn-lg btn-block">And my LinkedIn page!</button>
    </div>

</div>


<div class="banner" id ="banner5">
    <div class="transparencylayer">
    <div class="banner-heading5">
    <h2>Other Things That I Do</h2>
    <br/>
    <h4>
        I have a blog where I occasionally (but not frequently) write about: 
        <br />
        <br />
        University life, places I went to, shows that I watched, and various other life experiences!
    </h4> 
    <br/>
    <div class="stackrow">
        <img class="portfolioimage hoverexpand" src="images/blog/latest1.jpg"></img>
        <img class="portfolioimage hoverexpand" src="images/blog/latest2.jpg"></img>
        <img class="portfolioimage hoverexpand" src="images/blog/latest3.jpg"></img>
    </div>
    <br/>
    <button type="button" onclick="location.href='https://svensaysthings.wordpress.com/'"class="btn btn-info btn-lg btn-block">Check It Out Here!</button>
    </div>
    </div>
</div>

<div class = "banner" id = "banner6">
    <div class="banner-heading6" id = "banner6">
        <br/>
        <br/>
        <h2>Connect With Me</h2>
        <br/>
        <h4>
            I'm open to collaborations and internships! <br/>
            Feel free to drop me an email<br />
            if you want to discuss about my projects or services!
        </h4>
        <br/>
        <button type="button" class="btn btn-secondary btn-lg" onclick="location.href='mailto:swenyitang99@gmail.com';">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope"
            viewBox="0 0 16 16">
            <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
        </svg>  Send A Message</button>
        <br/>
        <br/>
        <h4>Check out my Socials As Well!</h4>

        <div id = "sociallisting" class="stackrow">
            <a class="fa fa-github" href="http://www.github.com/EssWhyy">
            </a>
            <a class="fa fa-linkedin" href="http://www.linkedin.com/in/swen-yi-tang-895b6b1b2">
            </a>
            <a class="fa fa-instagram" href="http://www.instagram.com/sytang99">
            </a>
            <a class="fa fa-youtube" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            </a>
        </div>
    <br />
    <br />
    
    <div class="footer">
        <p>Copyright 2022 Sven Tang; Hosted On Github Pages</p>
    </div>

        </div>
    </div>
    */}

    </div>
    
    )

};

export default Home