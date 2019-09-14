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
                        <a class="" target="_blank" href="static/pdf/Ajla-CV-v19.pdf">
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
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- ********FIRST cover***********-->
                    <div class="card-style">
                        <b-card
                            @click="show('share-it')"
                            title="Share It"
                            class="m-3"
                            img-src="static/images/shareit-cover.png"
                            img-alt="Image"
                            img-top
                            tag="article">
                            <p class="card-text">
                                UX/UI Design
                                <br/>Mobile application design
                            </p>
                        </b-card>
                    </div>

                    <!-- ********THIRD cover***********-->

                    <!-- ********FOURTH cover***********-->

                    <!-- ********FIFTH cover***********-->

                    <!-- ********SIXTH cover***********-->

                </div>
                <!-- ********FIRST cover mobile***********-->
                <div v-else class="col-sm-8">
                    <b-card
                        @click="show('share-it')"
                        title="Share It"
                        class="m-3"
                        img-src="static/images/shareit-cover.png"
                        img-alt="Image"
                        img-top
                        tag="article">
                        <p class="card-text">
                            UX/UI Design
                            <br/>Mobile application design
                        </p>
                    </b-card>
                    <!-- ********SECOND cover mobile***********-->

                    <!-- ********THIRD cover mobile***********-->

                    <!-- ********FOURTH cover mobile***********-->

                    <!-- ********FIFTH cover mobile***********-->

                    <!-- ********SIXTH cover mobile***********-->

                </div>
                <!-- ********FIRST MODAL***********-->
                <modal
                    height="auto"
                    width="90%"
                    :scrollable="true"
                    name="share-it"
                    class="pt-5">
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
                            <h4>About</h4>The challenge during this project was to design a mobile user
                            interface while following the
                            <a href="https://material.io/design/" target="_blank">Android design guidelines</a>.
                            The project was performed during a week, full-time. The task was to design an
                            app that families with children can use to rent things from each other according
                            to given requirements.
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h4>Process and Guidelines</h4>The most important part of this project was to
                            challenge myself and learn how to properly follow the guidelines with the
                            respect to given requirements for the features of the application. In order to
                            apply the rules form the guidelines to my design, I sketched out the navigation
                            flow as well as layout of individual screens to get a better understanding on
                            what parts of the content and structure needed to be further examined. The next
                            step in the process was to decide upon what components were most suitable for
                            the features in the requirements. For that I used the Android design and their
                            directions for what and how to place components properly. After establishing the
                            strucutre and layout, I prototyped a mock-up of the interface using Adobe XD.
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
                            <h4>Final Prototype</h4>The bottom navigation is the primary navigation, which
                            is a Forward navigation that has direct access to all the top level screens in
                            the hierarchy. The components that were used in this user interface are lists,
                            cards, confirmation dialogs, image lists, fullscreen dialogs, dividers,
                            call-to-action buttons, persistent search.
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
                            <h4>Learning Outcomes</h4>Even though it was quite challenging to search for
                            each direction and look up every single design component, it was still a new way
                            of working where I learned a lot along the way. The fact that I could motivate
                            each decision I made felt really good because it was a concrete and objective
                            way to place the components in relation to each other and this gave me a clearer
                            picture to why I designed the UI the way I did. A lot of times I found myself
                            scrolling through the guidelines out of curiosity to read about all the
                            different direction, even if those components weren’t relevant for my user
                            interface. I enjoyed working on this project and I have a better understanding
                            for finding a balance between following guidelines and designing an interface
                            according to own aesthetic preferences.
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col-12 col-sm-9">
                            <h3 align="right">
                                /
                                <span class="special-font">
                                    Ajla
                                    <b>Cano</b>
                                </span>
                            </h3>
                        </div>
                    </div>
                </modal>
                <!-- ********SECOND MODAL***********-->

                <!-- ********THIRD MODAL***********-->

                <!-- ********FOURTH MODAL***********-->

                <!-- ********FIFTH MODAL***********-->

                <!-- ********SIXTH MODAL***********-->

            </div>
        </b-container>
        <b-container v-if="tab === 4" class="container-fluid" fluid>
            <h1>Contact</h1>
            <div class="row">
                <div class="col-md-6">
                    <b-media class="card-style">
                        <div class="contact-social-group m-4">
                            <img
                                @click="tab = 4"
                                class="social-icon-large"
                                src="https://image.flaticon.com/icons/svg/131/131155.svg"/>
                            <a href="https://www.linkedin.com/in/johan-erlandsson-542402150/"/>
                            <img
                                class="social-icon-large"
                                src="https://image.flaticon.com/icons/svg/220/220343.svg"/>
                        </a>
                    </div>
                    <h3>Or send me a message !</h3>
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
        font-family: 'Dosis', sans-serif;
    }

    .lead {
        font-weight: bold;
    }
}

.header,
.lead {
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