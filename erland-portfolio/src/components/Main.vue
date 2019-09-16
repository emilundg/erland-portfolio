<template>
    <div id="app">
        <div>
            <b-navbar
                class="b-navbar"
                :sticky="true"
                toggleable="md"
                type="light"
                variant="light">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item class="button" v-bind:active="tab === 1" v-on:click="changeTab(1)">Home</b-nav-item>
                        <b-nav-item class="button" v-bind:active="tab === 3" v-on:click="changeTab(3)">Portfolio</b-nav-item>
                        <b-nav-item class="button" v-bind:active="tab === 4" v-on:click="changeTab(4)">Contact</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <transition name="slideLeft">
            <div v-if="tab === 1" class="body-background clip1"></div>
        </transition>
        <transition name="slideLeft">
            <div v-if="tab === 3" class="body-background clip3"></div>
        </transition>
        <transition name="slideRight">
            <div v-if="tab === 4" class="body-background clip4"></div>
        </transition>
        <b-container key="2" v-if="tab === 1" class="container-fluid" fluid>
            <div class="m-2">
                <p class="header">Johan Erlandsson</p>
            </div>
            <div class="main row">
                <div class="col-md-5">
                    <b-jumbotron class="landing-profile m-2 p-5" key="3" v-if="tab === 1">
                        <div class="row">
                            <div class="col-sm-6 m-2">
                                <b-img class="profile-pic img-thumbnail" src="static/images/photoofme.jpg"></b-img>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 about">
                                <div class="text">
                                    My name is Johan Erlandsson and I am currently studying my last year in the
                                    master Interaction design at chalmers university of technology, gothenburg. I
                                    have my bachelor in computer science and i like to focus on user-centered design
                                    combined with efficient solutions to meet the design criteria.
                                    <br/>
                                    <br/>As a person I enjoy working in projects and benefiting from the members
                                        abilities to generate the best possible design
                                </div>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <div class="container">
                            <a class="gradient-button" @click="tab = 4">
                                <span>Contact</span>
                            </a>
                        </div>
                    </b-jumbotron>
                </div>
                <div class="col-md-3 landing-profile m-2 p-5">
                    <b-jumbotron header=" " lead="">
                        <light-timeline :items="items"></light-timeline>
                    </b-jumbotron>
                    <p class="small-italic">For more detailed information:</p>
                    <div class="container">
                        <a class="" target="_blank" href="static/pdf/CV.pdf">
                            <span>Open Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </b-container>

        <b-container v-if="tab === 3" class="container-flid" fluid>
            <h1>Portfolio</h1>
            <div class="row">
                <div v-if="window.width >= 769" class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <!-- ********FIRST cover***********-->
                    <div class="card-style mb-5">
                        <b-card
                            @click="show('deception')"
                            title="Deception"
                            class="m-3"
                            img-src="static/images/deception/Annotations_Group10-1-33-1-1.png"
                            img-alt="Image"
                            img-top
                            tag="article">
                            <p class="card-text">
                                UX/UI Design
                                <br/>Mobile application design
                            </p>
                        </b-card>
                    </div>

                    <!-- ********SECOND cover***********-->
                    <div class="card-style mb-5">
                        <b-card
                            @click="show('timeedit')"
                            title="Improved timeedit"
                            class="m-3"
                            img-src="static/images/timeedit/pres.png"
                            img-alt="Image"
                            img-top
                            tag="article">
                            <p class="card-text">
                                UX/UI Design
                                <br/>GUI design
                            </p>
                        </b-card>
                    </div>

                    <!-- ********THIRD cover***********-->
                    <div class="card-style mb-5">
                        <b-card
                            @click="show('sail')"
                            title="Sail away"
                            class="m-3"
                            img-src="static/images/sail/Presentation_group30.png"
                            img-alt="Image"
                            img-top
                            tag="article">
                            <p class="card-text">
                                Mobile application created to Encourage sailor to sail and explore more.
                            </p>
                        </b-card>
                    </div>

                    <!-- ********FOURTH cover***********-->
                    <div class="card-style mb-5">
                        <b-card
                            @click="show('timereg')"
                            title="Time reg"
                            class="m-3"
                            img-src="static/images/timepres/timereg.png"
                            img-alt="Image"
                            img-top
                            tag="article">
                            <p class="card-text">
                                UX/UI Design
                                <br/>Application
                            </p>
                        </b-card>
                    </div>

                </div>

                <div v-else class="col-sm-8">
                    <!-- ********FIRST cover mobile***********-->
                    <b-card
                        @click="show('Deception')"
                        title="Deception"
                        class="m-3"
                        img-src="static/images/deception/Annotations_Group10-1-33-1-1.png"
                        img-alt="Image"
                        img-top
                        tag="article">
                        <p class="card-text">
                            UX/UI Design
                            <br/>Mobile application design
                        </p>
                    </b-card>
                    <!-- ********SECOND cover mobile***********-->
                    <b-card
                        @click="show('timeedit')"
                        title="timeedit"
                        class="m-3"
                        img-src="static/images/timeedit/pres.png"
                        img-alt="Image"
                        img-top
                        tag="article">
                        <p class="card-text">
                            UX/UI Design
                            <br/>GUI design
                        </p>
                    </b-card>
                    <!-- ********THIRD cover mobile***********-->
                    <b-card
                        @click="show('sail')"
                        title="Sail away"
                        class="m-3"
                        img-src="static/images/sail/Presentation_group30.png"
                        img-alt="Image"
                        img-top
                        tag="article">
                        <p class="card-text">
                            Mobile application created to Encourage sailor to sail and explore more.
                        </p>
                    </b-card>

                    <!-- ********FOURTH cover mobile***********-->
                    <b-card
                        @click="show('timereg')"
                        title="Timereg"
                        class="m-3"
                        img-src="static/images/timepres/timereg.png"
                        img-alt="Image"
                        img-top
                        tag="article">
                        <p class="card-text">
                            UX/UI Design
                            <br/>Application
                        </p>
                    </b-card>
                </div>
                <!-- ********FIRST MODAL***********-->
                <modal height="auto" width="90%" :scrollable="true" name="deception">
                    <div class="row modal-button p-4">
                        <button class="button button--modal_close p-3" @click="hide()">
                            <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                        </button>
                    </div>
                    <div class="row m-4">
                        <h2 class="special-font">Deception</h2>
                    </div>

                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>About</h4>
                            Mobile version of the board game Deception. Project where the Task was to create
                            a Mobile/tablet version of the board game deception. The design process
                            consisted of getting a good understanding of the existing model and then using
                            various ideating methods to come up with design ideas and then prototype, peer
                            reviews until final design was done.
                        </div>
                    </div>

                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>Gallery</h4>
                            <b-img
                                class="mb-3"
                                src="/static/images/deception/Investigator_ Identity_Witness.png"
                                thumbnail
                                fluid/>
                            <b-img
                                class="mb-3"
                                src="/static/images/deception/Investigator-pick card.png"
                                thumbnail
                                fluid/>
                            <b-img class="mb-3" src="/static/images/deception/Tiles.png" thumbnail fluid/>
                            <b-img
                                class="mb-3"
                                src="/static/images/deception/Forensic.png"
                                thumbnail
                                fluid/>
                        </div>
                    </div>
                </modal>
                <!-- ********SECOND MODAL***********-->
                <modal height="auto" width="90%" :scrollable="true" name="timeedit">
                    <div class="row modal-button p-4">
                        <button class="button button--modal_close p-3" @click="hide()">
                            <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                        </button>
                    </div>
                    <div class="row m-4">
                        <h2 class="special-font">Timeedit</h2>
                    </div>

                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>About</h4>
                            In this individual project. We were assigned to improve the existing design of
                            the schedule manager that my university was using, timeedit. The design process
                            consisted of evaluating the existing model, finding pros and cons and then
                            coming up with improvement suggestion to implement in the final design.
                        </div>
                    </div>

                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>Gallery</h4>
                            <b-img class="mb-3" src="/static/images/timeedit/1.png" thumbnail fluid/>
                            <b-img class="mb-3" src="/static/images/timeedit/3.png" thumbnail fluid/>
                            <b-img class="mb-3" src="/static/images/timeedit/7.png" thumbnail fluid/>
                            <b-img class="mb-3" src="/static/images/timeedit/BM1.png" thumbnail fluid/>
                            <b-img class="mb-3" src="/static/images/timeedit/BM4.png" thumbnail fluid/>
                        </div>
                    </div>
                </modal>

                <!-- ********THIRD MODAL***********-->
                <modal height="auto" width="90%" :scrollable="true" name="sail">
                    <div class="row modal-button p-4">
                        <button class="button button--modal_close p-3" @click="hide()">
                            <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                        </button>
                    </div>
                    <div class="row m-4">
                        <h2 class="special-font">Sail away</h2>
                    </div>

                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>About</h4>
                            In this project we were assigned a task to encourage sailors to sail and explore
                            more. The process to create this app design consisted of various brainstorming
                            methods, prototyping, user interviews as well as iterative design work to
                            improve our design as much as possible in the given time we had
                        </div>
                    </div>

                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>Gallery</h4>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/DmyX3c8T_Xc"
                                frameborder="0"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </modal>

                <!-- ********FOURTH MODAL***********-->
                <modal height="auto" width="90%" :scrollable="true" name="timereg">
                    <div class="row modal-button p-4">
                        <button class="button button--modal_close p-3" @click="hide()">
                            <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                        </button>
                    </div>
                    <div class="row m-4">
                        <h2 class="special-font">Timereg</h2>
                    </div>

                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>About</h4>
                            In this Company-focused project we were asked to develop an application for a
                            consultancy firm to register their worked hours. The project consisted of User
                            interviews, brainstorming, iterating on the design and contact with the project
                            owner to develop it in the best possible way.
                        </div>
                    </div>

                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>Gallery</h4>
                            <b-img
                                class="mb-3"
                                src="/static/images/timepres/1_Startscreen.png"
                                thumbnail
                                fluid/>
                            <b-img
                                class="mb-3"
                                src="/static/images/timepres/5_Add_Comment.png"
                                thumbnail
                                fluid/>
                            <b-img
                                class="mb-3"
                                src="/static/images/timepres/8_Pressed_calendar.png"
                                thumbnail
                                fluid/>
                            <b-img
                                class="mb-3"
                                src="/static/images/timepres/9_Pressed_Stats.png"
                                thumbnail
                                fluid/>
                        </div>
                    </div>
                </modal>

            </div>
        </b-container>
        <b-container v-if="tab === 4" class="container-fluid" fluid>
            <h1>Contact</h1>
            <div class="row">
                <div class="col-md-6">
                    <b-media class="card-style">
                        <div class="contact-social-group m-4">
                            <h3>Linkedin</h3>
                            <a href="https://www.linkedin.com/in/johan-erlandsson-542402150/">
                            <img
                                class="social-icon-large"
                                src="/static/images/linkedin.png"/>
                            </a>
                        </div>
                        <h3>Or email me</h3>
                        <b-form class="m-4">
                            <b-form-group
                                id="exampleInputGroup1"
                                label="Email address:"
                                label-for="exampleInput1">
                                <b-form-input
                                    id="exampleInput1"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    placeholder="Enter email"></b-form-input>
                            </b-form-group>
                            <b-form-group id="exampleInputGroup2" label="Topic:" label-for="exampleInput2">
                                <b-form-input
                                    id="exampleInput2"
                                    type="text"
                                    v-model="form.topic"
                                    required
                                    placeholder="Enter topic"></b-form-input>
                            </b-form-group>
                            <b-form-textarea
                                id="textarea1"
                                v-model="form.text"
                                placeholder
                                :rows="3"
                                :max-rows="6"></b-form-textarea>
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

    require('vue2-animate/dist/vue2-animate.min.css');

    import * as api from '../api';

    import 'swiper/dist/css/swiper.css';

    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {

        name : 'app',
        components : {
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
                        onlyInViewport: true
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        dynamicBullets: true
                    }
                },
                tab: 1,
                currentModal: '',
                items: [
                    {
                        color: '#3D3A61',
                        tag: '2018-2020',
                        content: 'M.SC. Interaction Design and Technologies at Chalmers'
                    }, {
                        tag: '2015-2018',
                        color: '#dcdcdc',
                        type: 'circle',
                        content: 'B.Sc. Computer Science and Engineering at Chalmers'
                    }, {
                        tag: '2011-2014',
                        color: '#dcdcdc',
                        type: 'circle',
                        content: 'Technical education at De la Gardie'
                    }

                ],
                form: {
                    email: '',
                    topic: '',
                    text: ''
                }
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        methods : {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            },
            show(name) {
                this.currentModal = name;
                this
                    .$modal
                    .show(name);
            },
            hide() {
                this
                    .$modal
                    .hide(this.currentModal);
            },
            changeTab(num) {
                this.tab = num;
            },
            async sendEmail() {
                var response = await api.sendEmail(this.form.email, this.form.topic, 'Hello, someone showed interest! ' + this.form.text);
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
    @import url( 'https://fonts.googleapis.com/css?family=Dosis:500&display=swap');

    .modal-button {
        justify-content: flex-end !important;
    }

    .button {
        &.button--modal_close {
            background: none;
            outline: none;
            border: none;
            float: right;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        background: none;
        &:hover {
            opacity: 0.87;
        }
    }

    .navbar {
        background-color: transparent !important;
    }

    .jumbotron {
        padding: 0;
        background-color: transparent;
    }

    .profile-pic {
        border-radius: 50%;
        max-width: 144px;
    }

    .media {
        background: white;
        border-radius: 8px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

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
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
        // box-shadow: 0 10px 20px rgba( 0,0,0, 0.19), 0 6px 6px rgba(0,0,0,0.23);
        border: 1px solid black;
        background: white;
        border-radius: 13px;
        .header,
        .lead {
            font-size: 34px;
            color: black;
            font-family: 'Dosis', sans-serif;
        }

        .lead {
            font-weight: bold;
        }
    }

    .header,
    .lead {
        color: black;
        font-size: 55px;
        font-family: 'Dosis', sans-serif;
    }

    .card-style {
        border: 1px solid black;
        border-radius: 13px;
    }

    .about {
        .text {
            text-align: left;
            margin: 0 auto;
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
        background-color: rgba(116, 167, 158, 0.36);
    }

    .col-form-label {
        float: left;
    }

    .body-background {
        background-clip: content-box;
        background: url('/static/images/unsplash-background.jpg');
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
        opacity: 0.21;
        // -webkit-clip-path: polygon(0 0, 49% 0, 38% 100%, 0% 100%);
        // clip-path: polygon(0 0, 49% 0, 38% 100%, 0% 100%);
    }

    .clip3 {
        //   background: linear-gradient(
        //     to right top,
        //     #834E66,
        //     #3D3A61,
        //     #a997d8,
        //     #9aace7,
        //     #90beef
        //   );
        opacity: 0;
    }

    .clip4 {
        //   background: linear-gradient(
        //     to right top,
        //     #c36ca1,
        //     #b882c0,
        //     #a997d8,
        //     #9aace7,
        //     #90beef
        //   );
        opacity: 0.21;
    }

    .special-font {
        color: rgba(0, 0, 0, 0.87);
        font-family: "Expletus Sans", cursive;
    }

</style>