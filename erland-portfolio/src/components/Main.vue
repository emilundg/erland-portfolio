<template>
  <div id="app">
    <div>
      <b-navbar class="b-navbar" :sticky="true" toggleable="md" type="light" variant="light">
        <b-navbar-brand href="#" style="color: rgba(255,255,255,0.87)"><span class="special-font">Ajla<b>Cano</b></span></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="button" v-bind:active="tab === 1" v-on:click="changeTab(1)">Home</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 2" v-on:click="changeTab(2)">About me</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 3" v-on:click="changeTab(3)">Portfolio</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 4" v-on:click="changeTab(4)">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <transition name="fadeLeftBig">
      <div v-if="tab === 1" class="body-background clip1">
      </div>
    </transition>

    <transition name="fadeRightBig">
      <div v-if="tab === 2" class="body-background clip2">
      </div>
    </transition>

    <transition name="fadeLeftBig">
      <div v-if="tab === 3" class="body-background clip3">
      </div>
    </transition>

    <transition name="fadeRightBig">
      <div v-if="tab === 4" class="body-background clip4">
      </div>
    </transition>

    <b-container key="2" v-if="tab === 1" class="container-fluid" fluid>
      <div class="main row">
        <div class="left col-md-6">
          <b-jumbotron v-if="window.width >= 767" header="“" lead="Recognizing the need is the primary condition for design." class="quote m-3 p-5">
            <p class="bold-p">
              - Charles Eames</p>
          </b-jumbotron>
        </div>
        <div class="col-md-6">
          <b-jumbotron class="landing-profile m-5" key="3" v-if="tab === 1">
            <div class="row m-3">
              <div class="m-4">
                <span class="header">Ajla</span>
                <span class="lead">Cano</span>
              </div>
            </div>
            <p>I'm Ajla Cano, a Gothenburg based <span class="highlight-background">UX Engineer</span>. I'm design focused and process driven when it comes to powerful and elegant technology.
            </p>
            <div class="container p-4">
              <a class="gradient-button" @click="tab = 4">
                <span>Contact</span>
              </a>
            </div>
          </b-jumbotron>
          <div class="social-group" v-if="window.width >= 767">
            <img @click="tab = 4" class="social-icon" src="https://cdn.rawgit.com/emilundg/a59d3d681244a46d8a3444cb3a5960e7/raw/73d3baf271553073fbaa560a9c261aeca0b318c8/Mail.svg" />
            <br>
            <a href="https://instagram.com/ajlascreations">
              <img class="social-icon" src="https://cdn.rawgit.com/emilundg/7d2df0d4f97fa81e52486093e2decc94/raw/f7e5664b835dc1038630760bed94959ba678da8d/instagram.svg" />
              <br></a>
            <a href="https://www.linkedin.com/in/ajla-cano/">
              <img class="social-icon" src="https://cdn.rawgit.com/emilundg/cbbfd2b1fb856cb680eea5d19460e45e/raw/f98cb8c2aeaf448e13372d23b7643e363c8a59f4/Linkedin.svg" />
              <br></a>
          </div>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 2" key="3" class="container-fluid" fluid>
      <h1>About me</h1>
      <div class="row">
        <div class="col-sm-6">
          <b-img class="profile-pic img-thumbnail" src="static/images/photoofme.png"></b-img>
         
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 about">
          <div class="text">
            I'm a Gothenburg based UX engineer and Interaction designer who is passionate about solving real-life problems between people and technology, using interaction design as my main tool.
            <br>
            <br>My main goal when designing is to build a better understanding between the user and the product while at the same time creating engaging experiences. I constantly try to challenge my creativity around existing constraints in a project and
            see that as a opportunity to learn even more and grow as an interaction designer.
            <br>
            <br>During a design process, my favorite parts are the challenges that come with the problem solving. I’m a believer in finding the best solutions when getting out of your comfort zone. A feeling I enjoy is the eagerness to solve a problem which
            can then influence the user in a positive and productive way.
          </div>
        </div>
        <div class="col-sm-6">
          <b-jumbotron header=" " lead="My journey into Interaction Design">
            <light-timeline :items='items'></light-timeline>
          </b-jumbotron>
          <p class="small-italic">
            For more detailed information:
          </p>
          <div class="container">
            <a class="gradient-button" target="_blank" href="static/pdf/Ajla-CV-v19.pdf">
              <span>Open Resume</span>
             
            </a>
          </div> <br><br>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 3" class="container-flid" fluid>
      <h1>Portfolio</h1>
      <div class="row">
        <swiper v-if="window.width >= 769" :options="swiperOption" class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- ********FIRST cover***********-->
           <swiper-slide>
            <b-card @click="show('share-it')" title="Share It" class="m-3" img-src="static/images/shareit-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
                UX/UI Design<br>
                Mobile application design
              </p>
            </b-card>
          </swiper-slide>
         

          <!-- ********SECOND cover***********-->
           <swiper-slide>
            <b-card title="Muffin or Chihuahua?" @click="show('muffin')" class="m-3" img-src="static/images/muffin-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
                UX/TUI Design<br>
                Interactive Game Exhibition
              </p>
            </b-card>
          </swiper-slide>
          

          <!-- ********THIRD cover***********-->
         <swiper-slide>
            <b-card @click="show('easy-cube')" title="Tork EasyCube" class="m-3" img-src="static/images/easycube-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
                UX/UI Design and Front-end Dev.<br>
                Information visualization
              </p>
            </b-card>
          </swiper-slide>


        <!-- ********FOURTH cover***********-->
          <swiper-slide>
            <b-card title="CyberSketch." @click="show('cyber-sketch')" class="m-3" img-src="static/images/cybersketch-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
                MR Concept and Development <br>
                Rich input 3D sketching tool
              </p>
            </b-card>
          </swiper-slide>

         <!-- ********FIFTH cover***********--> 
          <swiper-slide>
            <b-card title="Status Table" @click="show('status-table')" class="m-3" img-src="static/images/statustable-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
              UX/TUI Design <br>
              Tangible Office Planner
              </p>
            </b-card>
          </swiper-slide>

          <!-- ********SIXTH cover***********--> 
          <swiper-slide>
            <b-card title="Remote Classroom" @click="show('remote-classroom')" class="m-3" img-src="static/images/rc-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
              UX/UI Design and Front-end dev. <br>
              Mobile Learning Platform
              </p>
            </b-card>
          </swiper-slide>
        </swiper>

        <!-- ********FIRST cover mobile***********-->
        <div v-else class="col-sm-8">
          <b-card @click="show('share-it')" title="Share It" class="m-3" img-src="static/images/shareit-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
                UX/UI Design<br>
                Mobile application design
              </p>
            </b-card>

        <!-- ********SECOND cover mobile***********-->
         <b-card title="Muffin or Chihuahua?" @click="show('muffin')" class="m-3" img-src="static/images/muffin-cover.png" img-alt="Image" img-top tag="article">
            <p class="card-text">
              UX/TUI Design<br>
              Interactive Game Exhibition
            </p>
          </b-card>
          

        <!-- ********THIRD cover mobile***********-->
        <b-card @click="show('easy-cube')" title="Tork EasyCube" class="m-4" img-src="static/images/easycube-cover.png" img-alt="Image" img-top tag="article">
            <p class="card-text">
            UX/UI Design and Front-end Dev. <br>
            Information visualization
            </p>
          </b-card>

        <!-- ********FOURTH cover mobile***********-->
          <b-card title="CyberSketch." @click="show('cyber-sketch')" class="m-3" img-src="static/images/cybersketch-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
                MR Concept and Development <br>
                Rich input 3D sketching tool
              </p>
            </b-card>

        <!-- ********FIFTH cover mobile***********-->
          <b-card title="Status Table" @click="show('status-table')" class="m-3" img-src="static/images/statustable-cover.png" img-alt="Image" img-top tag="article">
            <p class="card-text">
              UX/TUI Design <br>
              Tangible Office Planner 
            </p>
          </b-card>
        

         <!-- ********SIXTH cover mobile***********-->
          <b-card title="Remote Classroom" @click="show('remote-classroom')" class="m-3" img-src="static/images/rc-cover.png" img-alt="Image" img-top tag="article">
              <p class="card-text">
              UX/UI Design and Front-end dev. <br>
              Mobile Learning Platform
              </p>
            </b-card>
        </div>


        <!-- ********FIRST MODAL***********-->
        <modal height="auto" width="90%" :scrollable="true" name="share-it" class="pt-5">
            <div class="row modal-button p-4">
          <button class="button button--modal_close p-3" @click="hide()">
               <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
          </button>
            </div>

           <div class="row m-4">
              <h2 class="special-font">Share It</h2>
            </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                  <b-img src="/static/images/shareit-header.png" thumbnail fluid/>
              <h4>About</h4>
              The challenge during this project was to design a mobile user interface while following the <a href="https://material.io/design/" target="_blank"> Android design guidelines</a>. 
              The project was performed during a week, full-time. 

              The task was to design an app that families with children can use to rent things from each other according to given requirements.
              
               </div>
          </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>Process and Guidelines</h4>
                The most important part of this project was to challenge myself and learn how to properly follow the guidelines with the respect 
                to given requirements for the features of the application.
                In order to apply the rules form the guidelines to my design, I sketched out the navigation flow as well as layout of individual 
                screens to get a better understanding on what parts of the content and structure needed to be further examined. The next step in the 
                process was to decide upon what components were most suitable for the features in the requirements. For that I used the Android design 
                and their directions for what and how to place components properly. After establishing the strucutre and layout, I prototyped a mock-up of 
                the interface using Adobe XD. 
              </div>
          </div>



          <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>Early Sketches</h4>
                <b-img src="/static/images/share-it/sketches-navigation.png" thumbnail fluid/>
              </div>
          </div>

          <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>Final Prototype</h4>
                The bottom navigation is the primary navigation, which is a Forward navigation that has direct access to all the top 
                level screens in the hierarchy. The components that were used in this user interface are lists, cards, confirmation dialogs, 
                image lists, fullscreen dialogs, dividers, call-to-action buttons, persistent search. 
                <div class="row">
                <div class="col">
                <b-img src="/static/images/share-it/ShareIT-posting.gif" thumbnail fluid/>
                </div>
                <div class="col">
                <b-img src="/static/images/share-it/ShareIT-renting.gif" thumbnail fluid/>
                </div>

               </div>
              </div>
          </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>Learning Outcomes</h4>
                Even though it was quite challenging to search for each direction and look up every single design component, 
                it was still a new way of working where I learned a lot along the way. The fact that I could motivate each decision 
                I made felt really good because it was a concrete and objective way to place the components in relation to each other and 
                this gave me a clearer picture to why I designed the UI the way I did. A lot of times I found myself scrolling through the 
                guidelines out of curiosity to read about all the different direction, even if those components weren’t relevant for my user interface. 
                I enjoyed working on this project and I have a better understanding for finding a balance between following guidelines and designing an interface according to own aesthetic preferences.  
              </div>
          </div>




          <div class="row m-3">
               <div class="col-12 col-sm-9">
               <h3 align="right"> / <span class="special-font">Ajla<b>Cano</b></span> </h3>
              </div>
          </div>

        </modal>
 
        <!-- ********SECOND MODAL***********-->
        <modal height="auto" width="90%" :scrollable="true" name="muffin" class="pt-5">
          <div class="row modal-button p-4">
          <button class="button button--modal_close p-3" @click="hide()">
               <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
          </button>
          </div>

           <div class="row m-4">
              <h2 class="special-font">Muffin or Chihuahua?</h2>
            </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                  <b-img src="/static/images/muffin-header.png" thumbnail fluid/>
               <p>DESCRIPTION COMING SHORTLY!</p>
               </div>
          </div>

          <div class="row m-3">
               <div class="col-12 col-sm-9">
               <h3 align="right"> / <span class="special-font">Ajla<b>Cano</b></span> </h3>
              </div>
          </div>


        </modal>


         <!-- ********THIRD MODAL***********--> 
          <modal height="auto" width="90%" :scrollable="true" name="easy-cube" class="pt-5">
            <div class="row modal-button p-4">
              <button class="button button--modal_close" @click="hide()">
               <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
              </button>
            </div>

            <div class="row m-4">
              <h2 class="special-font">Tork EasyCube</h2>
            </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                  <b-img src="/static/images/easycube-header.png" thumbnail fluid/>
               <p>During summer of 2018 in a project at Essity AB, I designed the interface and user experience of Tork EasyCube's internal dashboard and developed the front-end in Angular 6. 
               I worked independenly as the UX Designer and Developer. The focus of this project was to re-design the dashboard that displayed relevant data and connect it in a way that is meaningful to the company.
               </p>

              <h4>The Problem</h4>
               The starting point of this project was the existing dashboard at the company. It consisted of only one screen with a few graphs and charts showcasing numbers related to the products and customers. 
               The old dashboard got a fair amount of critique from the employees since it didn't appeal to them in any way, especially after a longer while. The biggest challenge was to try and meet all the employees' needs
               and desires while keeping the information short enough to still be interesting. 
              </div>
          </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>The Audience</h4>
                Since the intention of such a dashboard is to be visible and displayed on a few larger TV info-screens for an entire floor at the company, 
                the user group included a mixture of employees with different backgrounds such as developers, marketing teams, project managers, researchers, etc.
             
              </div>
          </div>

          <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>The Design Process</h4>
                The process was performed in several stages such as research phase, ideation phase, prototyping phase, evaluation phase, and implementation phase.
                <br>The <b>research phase</b> was initiated with interview results from a previous similiar study from the year before, that I reviewed and collected the most 
                common answers in order to structure them and establish the first requirements. I also performed interviews that included questions regarding the current dashboard
                but also general questions about their needs and areas of interest. The results from those interviews were added to the requirements list. 
                <br> During the <b> ideation phase</b> I held two brainstorming workshops with other summer worker collegues, one having the focus of generating new use cases and types of information that could be potentially 
                interesting, and the other one focusing on the established requiremets. 
                <br> From those results I could continue with the <b>prototyping phase</b> and create two different prototypes: paper wireframes, and hi-fi look-and-feel mockup that followed the company's brand guidelines.
                <br> A quick <b> evaluation </b> of the proposed mock-up was performed together with the stakeholders and after a few changes I <b>implemented</b> the structure of the dashboard, as well as a few graphs and all the placeholders.
       
              <br><br>
                The core idea for the new internal dashboard is that it would consist of two versions, one which has a slide-show like structure suitable for the info TV-screen, and one desktop version with a sidebar navigation.
                <b-img src="/static/images/rotatingscreen.png" thumbnail fluid/>
              </div>
          </div>

            <div class="row m-3">

            <div class="col-12 col-sm-9">
              <h4> The Design Interface </h4>
              Below are the four different pages (mock-up version) on the dashboard with different focus areas. Note that all data visualized is fake data.
               <h5>First Page: In Number</h5> 
                <b-img src="/static/images/InNumbers.png" thumbnail fluid/>
              </div>
            </div>
            <div class="row m-3">
              <div class="col-12 col-sm-9">
                <h5>Second Page: Our Customers</h5>
                <b-img src="/static/images/OurCustomers.png" thumbnail fluid/>
              </div>
            </div>
            <div class="row m-3">
              <div class="col-12 col-sm-9">
                <h5>Third Page: People Pattern</h5>
                <b-img src="/static/images/PeoplePattern.png" thumbnail fluid/>
              </div>
            </div>
             <div class="row m-3">
              <div class="col-12 col-sm-9">
                <h5>Fourth Page: Self-Service</h5>
                <b-img src="/static/images/SelfService.png" thumbnail fluid/>
              </div>
            </div>

          <div class="row m-3">
               <div class="col-12 col-sm-9">
              <h4>The Outcome</h4>
               <div>In contrast to the old dashboard, the new one is more dynamic and consists of several different pages, targeting different user groups. 
                 It also has two different version, one slideshow version and one desktop version that includes the Self-service page.
               </div>
               
               <b>Info-boxes</b><br>
               Even though the dashboard itself was different from traditional one-page dashboards in a way 
               that it consisted of different pages that covered various topics, I tried to keep a common thread on each page. 
               The common thread are the different motivational info-boxes on each page, indicating that the information 
               visualized is meaningful to the company and that there might be new use cases and take aways they can gain from 
               the information. 
               <b-img src="/static/images/inspirationboxes.png" thumbnail fluid/>
               <br><br>
               <b>Scalability</b><br>
               The dashboard was purposely designed with a sidebar navigation which makes it possible to add more pages depending on requests and demands from the users. Below is an example that was a suggested use case by the company during the last week of summer work.
               <b-img src="/static/images/BusinessTalk2.png" thumbnail fluid/>
               <br><br>
               The end result of this summer's project was an implemented general structure of the dashboard 
               with all the placeholders and description texts needed. A few graphs where implemented 
               with D3.js but most of the data was not visualized yet. The project was handed off to 
               the fulltime developer team at the company. 
              </div>
          </div>

          <div class="row m-3">
               <div class="col-12 col-sm-9">
               <h3 align="right"> / <span class="special-font">Ajla<b>Cano</b></span> </h3>
              </div>
          </div>


          </modal>





        <!-- ********FOURTH MODAL***********-->
        <modal height="auto" width="90%" :scrollable="true"  name="cyber-sketch" class="pt-5">
          <div class="row modal-button p-4">
          <button class="button button--modal_close p-3" @click="hide()">
             <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
           </button>
          </div>

           <div class="row m-4">
              <h2 class="special-font">CyberSketch.</h2>
            </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                  <b-img src="/static/images/cybersketch-header.png" thumbnail fluid/>
                  
                  The challenge of this project was to solve the problems of handheld controllers for VR and specialised hardware 
                  setups by creating a new rich input structure. To demonstrate that, we designed and developed a tool for sketching 
                  and modelling in 3D. 
                  <br>
                  <br> 
                  The time frame of this research project was eight weeks, half-time, 
                  in partnership with <a target="_blank" href="https://danielroeven.com/"> Daniel Roeven.</a> Read our full paper <a target="_blank" href="/static/pdf/CyberSketch_Report.pdf">here</a>.
                  <br>
                  <br>
                <div class="resp-container">
                  <iframe class="resp-iframe" src="https://player.vimeo.com/video/272779701" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
               </div>
               </div>

               <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>The Problem</h4>
                It is no secret that current VR controllers require complex and expensive hardware setup. Those controllers are 
                limited in terms of rich interaction possibilities. Problems include reliable and precise tracking, user fatigue 
                (the gorilla-arm effect), and practical setup.
              </div>
              </div>

            <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>The Concept</h4>
                We propose the touchscreen as an input device for AR and VR: it reliably and accurately captures input, commercially 
                available technologies allow for rich interaction, and it does not require an elaborate setup.

                The prototype is a 3D sketching tool, allowing users to quickly model 3D artefacts in a sketchy and exploratory 
                fashion. Envisioned users are 3D designers, for example architects, industrial designers, and CG modellers.
                </div>
            </div>

            <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>The Design Process</h4>
                Responsibilities covered during this design process were; VR Research, Interaction design for VR, Prototyping in iOS 
                with Swift and Unreal Engine, UX Evaluations. 
                <div class="row">
                <div class="col">
                  <b>Ideation:</b> sketch with AR concept
                <b-img src="/static/images/cybersketch/ARsketch.jpeg" thumbnail fluid/>
                </div>
                <div class="col">
                   <b>Ideation:</b> sketch with concept using primitives
                <b-img src="/static/images//cybersketch/SRsketch2.png" thumbnail fluid/>
                </div>
                </div>

                 <div class="row">
                <div class="col">
                   <b>Bodystorming</b> session
                <b-img src="/static/images/cybersketch/bodystorming.jpg" thumbnail fluid/>
                </div>
                <div class="col">
                  <b>Evaluation</b> phase, some of the cards used
                <b-img src="/static/images/cybersketch/evaluation.png" thumbnail fluid/>
                </div>
                </div>
               
              </div>
            </div>

             <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>The Prototype</h4>
                The prototype setup consists of a VR headset connected to a computer running a VR application. Also connected to the 
                computer is the multitouch tablet, through which the primary interaction will take place. The position of the tablet 
                in the real world is synchronized with a virtual representation of the tablet in the virtual world. 
                See the full description of the prototype in the video above.
              </div>
            </div>

            <div class="row m-3">
               <div class="col-12 col-sm-9">
            <div class="row">
                <div class="col">
                   <b>VR headset and tablet input</b> 
                <b-img src="/static/images/cybersketch/in-action.png" thumbnail fluid/>
                </div>
                <div class="col">
                  <b>Setup</b> of the system
                <b-img src="/static/images/cybersketch/Setup-digital.png" thumbnail fluid/>
                </div>
            </div>
               </div>
            </div>
            

            <div class="row m-3">
               <div class="col-12 col-sm-9">
            <div class="row">
                <div class="col">
                  <b>Interaction gestures</b>
                <b-img src="/static/images/cybersketch/Gestures.png" thumbnail fluid/>
                </div>
                <div class="col">
                  <b>VR UI</b> 
                <b-img src="/static/images/cybersketch/VRinterface.png" thumbnail fluid/>
                </div>
            </div>
               </div>
            </div>


            <div class="row m-3">
               <div class="col-12 col-sm-9">
                <h4>The Evaluation </h4>
                We performed an UX evaluation on a group of fellow interaction design students. The evaluation consisted of three 
                different steps; moderated task test where the participants were asked to create different types of 3D models, questionnaire 
                using the microsoft product reaction cards (to determine the UX and desirability of our system), and ended on an follow-up interview. 
              </div>
            </div>

            <div class="row m-3">
               <div class="col-12 col-sm-9">
                Some positive adjectives used to describe our system were: "Straightforward, Clean, Engaging, Entertaining, Approachable, Creative”. 

                Some negative adjectives were: unrefined, difficult, and inconsistent. However, the follow-up interview showed that the users 
                wanted to make use of all three dimension of freedom in VR but felt constrained by the 2D tablet. Since the benefits of the 
                tablet’s accuracy and lack of arm fatigue wasn’t clear enough, further research work would focus on conveying that more. 
              </div>
            </div>

             <div class="row m-3">
              <div class="col-12 col-sm-9">
                <b-img src="/static/images/cybersketch/logocybersketch.png" fluid/>
              </div>
            </div>


          </div>

          <div class="row m-3">
               <div class="col-12 col-sm-9">
               <h3 align="right"> / <span class="special-font">Ajla<b>Cano</b></span> </h3>
              </div>
          </div>
        </modal>

        <!-- ********FIFTH MODAL***********-->
        <modal height="auto" width="90%" :scrollable="true"  name="status-table" class="pt-5">
          <div class="row modal-button p-4">
          <button class="button button--modal_close p-3" @click="hide()">
              <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
            </button>
          </div>

          <div class="row m-4">
              <h2 class="special-font">Status Table</h2>
            </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                  <b-img src="/static/images/statustable-header.png" thumbnail fluid/>
               <p>DESCRIPTION COMING SHORTLY!</p>

               <iframe width="560" height="315" src="https://www.youtube.com/embed/trOtyn_VjWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
          </div>

          <div class="row m-3">
               <div class="col-12 col-sm-9">
               <h3 align="right"> / <span class="special-font">Ajla<b>Cano</b></span> </h3>
              </div>
          </div>
        </modal>

        <!-- ********SIXTH MODAL***********-->
        <modal height="auto" width="90%" :scrollable="true"  name="remote-classroom" class="pt-5">
          <div class="row modal-button p-4">
          <button class="button button--modal_close p-3" @click="hide()">
              <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
            </button>
          </div>

          <div class="row m-4">
              <h2 class="special-font">Remote Classroom</h2>
            </div>


          <div class="row m-3">
               <div class="col-12 col-sm-9">
                  <b-img src="/static/images/rc-header.png" thumbnail fluid/>
               <p>DESCRIPTION COMING SHORTLY!</p>
              
              </div>
          </div>

          <div class="row m-3">
               <div class="col-12 col-sm-9">
               <h3 align="right"> / <span class="special-font">Ajla<b>Cano</b></span> </h3>
              </div>
          </div>
        </modal>
      </div>
    </b-container>





    <b-container v-if="tab === 4" class="container-fluid " fluid>
      <h1>Contact</h1>
      <div class="row">
        <div class="col-md-6">
          <b-media>
            <div class="contact-social-group m-4">
              <img @click="tab = 4" class="social-icon-large" src="https://cdn.rawgit.com/emilundg/a59d3d681244a46d8a3444cb3a5960e7/raw/73d3baf271553073fbaa560a9c261aeca0b318c8/Mail.svg" />
              <a href="https://instagram.com/ajlascreations">
                <img class="social-icon-large" src="https://cdn.rawgit.com/emilundg/7d2df0d4f97fa81e52486093e2decc94/raw/f7e5664b835dc1038630760bed94959ba678da8d/instagram.svg" />
              </a>
              <a href="https://www.linkedin.com/in/ajla-cano/">
                <img class="social-icon-large" src="https://cdn.rawgit.com/emilundg/cbbfd2b1fb856cb680eea5d19460e45e/raw/f98cb8c2aeaf448e13372d23b7643e363c8a59f4/Linkedin.svg" />
              </a>
            </div>
            <h3>Or send me a message!</h3>
            <b-form class="m-4">
              <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1">
                <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="Enter email"></b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup2" label="Topic:" label-for="exampleInput2">
                <b-form-input id="exampleInput2" type="text" v-model="form.topic" required placeholder="Enter topic"></b-form-input>
              </b-form-group>
              <b-form-textarea id="textarea1" v-model="form.text" placeholder="" :rows="3" :max-rows="6"></b-form-textarea>
              <div class="container mt-4">
                <a class="gradient-button" @click="sendEmail()">
                  <span>Submit</span>
                </a>
              </div>
            </b-form>
          </b-media>
        </div>
      </div>
    </b-container>

  </div>
</template>

<script>
  require('vue2-animate/dist/vue2-animate.min.css')
  import * as api from '../api'

  import 'swiper/dist/css/swiper.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'


  export default {
    name: 'app',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        window: {
          width: 0,
          height: 0
        },
        swiperOption: {
          slidesPerView: '2',
          speed: 400,
          mousewheel: true,
          centeredSlides: true,
          keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true
          }
        },
        tab: 1,
        currentModal: '',
        items: [{
          tag: '2017-2019',
          content: 'M.SC. Interaction Design and Technologies at Chalmers'
        }, {
          tag: '2014-2017',
          color: '#dcdcdc',
          type: 'circle',
          content: 'B.Sc. Computer Science and Engineering at Chalmers'
        }, {
          tag: '2013-2014',
          color: '#dcdcdc',
          type: 'circle',
          content: 'Engineering Foundation Year at Chalmers'
        }, {
          tag: '2010-2013',
          color: '#dcdcdc',
          type: 'circle',
          content: 'Arts Programme in High School'
        }],
        form: {
          email: '',
          topic: '',
          text: ''
        }
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
      show(name) {
        this.currentModal = name;
        this.$modal.show(name);
      },
      hide() {
        this.$modal.hide(this.currentModal);
      },
      changeTab(num) {
        this.tab = num;
      },
      async sendEmail() {
        var response = await api.sendEmail(this.form.email, this.form.topic, 'Hello, someone showed interest! ' + this.form.text)
        if (response.status === 200) {
          window
            .location
            .reload();
        }
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Expletus+Sans');
  .modal-button {
    justify-content: flex-end !important
  }

  .button {
    &.button--modal_close {
      background: none;
      outline: none;
      border: none;
      float: right;
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      opacity: 0.87;
      img {
        width: 23px;
      }
      &:hover {
        opacity: 0.56;
      }
    }
  }

  .card {
    border: none;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    background: none;
    &:hover {
      opacity: 0.87;
    }
  }

  .navbar {
    background-color: transparent !important;
  }

  .jumbotron {
    padding: 0px;
    background-color: transparent;
  }

  .profile-pic {
    border-radius: 50%;
    max-width: 200px;
  }

  .media {
    background: white;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .media-content {
      margin: 0 auto;
    }
    img {
      transition: all 0.2s ease-in-out;
      max-width: auto;
      max-height: 140px;
    }
  }

  .social-group {
    position: absolute;
    right: 0;
    top: 65vh;
    img {
      margin-right: 8px;
    }
  }

  .social-icon {
    width: 22px;
  }

  .social-icon,
  .social-icon-large {
    opacity: 0.87;
    height: auto;
    margin-bottom: 24px;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover {
      opacity: 0.56;
      cursor: pointer;
    }
  }

  .social-icon-large {
    margin: 8px;
    width: 38px;
  }

  .back-icon {
    float: left;
    width: 18px;
  }

  .quote {
    width: 90%;
    color: rgba(255, 255, 255, 0.87);
    .lead {
      font-style: italic;
      font-size: 40px;
    }
  }

  .bold-p {
    font-weight: 500;
  }

  .landing-profile {
    .lead,
    .header {
      font-size: 72px;
      font-family: 'Expletus Sans', cursive;
    }
    .lead {
      font-weight: bold;
    }
  }

  .about {
    .text {
      text-align: left;
      margin: 0 auto;
      width: 80%;
    }
  }

  .line-item {
    text-align: left;
  }

  .contact-social-group {
    .social-icon {
      margin: 30px 15px;
    }
  }

  .small-italic {
    font-size: 13px;
    font-style: italic;
    color: rgba(0, 0, 0, 0.56);
  }

  .row {
    justify-content: center;
  }

  .highlight-background {
    background-color: rgba(195, 109, 160, 0.36);
  }

  .col-form-label {
    float: left;
  }

  .body-background {
    background-clip: content-box;
    background: url('https://github.com/AjlaC/portfolio/blob/master/background_ajla_full.png?raw=true') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100%;
    min-width: 1024px;
    /* Set up proportionate scaling */
    width: 100%;
    height: auto;
    /* Set up positioning */
    position: fixed;
    top: 0;
    left: 0;
  }

  .resp-container {
      position: relative;
      overflow: hidden;
      padding-top: 56.25%;
  }

  .resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}



  .clip1 {
    -webkit-clip-path: polygon(0 0, 49% 0, 38% 100%, 0% 100%);
    clip-path: polygon(0 0, 49% 0, 38% 100%, 0% 100%);
  }

  .clip2 {
    background: linear-gradient(to right top, #c36ca1, #b882c0, #a997d8, #9aace7, #90beef);
    -webkit-clip-path: polygon(100% 22%, 100% 0, 100% 100%, 90% 100%);
    clip-path: polygon(100% 22%, 100% 0, 100% 100%, 90% 100%);
  }

  .clip3 {
    background: linear-gradient(to right top, #c36ca1, #b882c0, #a997d8, #9aace7, #90beef);
    -webkit-clip-path: polygon(0 0, 0 0, 19% 100%, 0 100%);
    clip-path: polygon(0 0, 0 0, 19% 100%, 0 100%);
  }

  .clip4 {
    background: linear-gradient(to right top, #c36ca1, #b882c0, #a997d8, #9aace7, #90beef);
    -webkit-clip-path: polygon(100% 0, 95% 80%, 100% 100%);
    clip-path: polygon(100% 0, 95% 80%, 100% 100%);
  }

  .special-font {
    color: rgba(0, 0, 0, 0.87);
    font-family: 'Expletus Sans', cursive
  }
</style>