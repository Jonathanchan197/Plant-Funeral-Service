<template>
    <div>
        <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#">Plant life after death</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>
        <b-card title="Card Title" no-body>

            <section class="title" style="">
                <div class="heading">
                <b-card-text>Love.</b-card-text>
                <b-card-text>Respect.</b-card-text>
                <b-card-text>Remember.</b-card-text>
                </div>
            </section>

            <b-card-body class="text-center">

            <p class="service">personallised service every step of the way</p>

            <section style="height: 680px">
                <div class="care">
                <b-card-text class="did">Did you grow a plant for years so that a neighbor would be jealous... and it died?</b-card-text>
                <b-card-text>Don’t worry we will take care of you. </b-card-text>
                </div>
                <div class="story">
                    <h2>Our Story</h2>
                    <p>Hello, is it me you're looking for?  I can see it in your eyes, I can see it in your smile, You're all I've ever wanted, and my arms are open wide, 'Cause you know just what to say, And you know just what to do, And I want to tell you so much, I love you.</p>
                </div>
            </section >
            <section class="newsLetter"  style="height: 200px">
                <p>Get weekly plants care guide to prevent mental problems after loosing your green friends.</p>
                <button @click.prevent="onClick">Sign up for our news letter</button>
            </section>

            <section class="ServiceOption">
                <h2>Service Options</h2>
                <div class="option">
                    <ul>
                        <li id="Burial" >Burial</li>
                        <li>Cremation</li>
                    </ul>
                </div>
                <ul class="links">
                    <li>Standard Funeral.</li>
                    <li>Fancy Funeral.</li>
                    <li>VIP Funeral.</li>
                    <li>Customised super fancy cool funeral.</li>
                </ul>
            </section>

            <section class="bye">
                <h2>Bye</h2>
            </section>

            <section class="testimonials">
                <h2>We thank the following families for allowing us to be part of their story.</h2>
                <div class="testimonial">
                    <h6>Betty</h6>
                    <p>I killed the plant that my friend asked me to look after. It traumatized me to the core when she found out we sobbed together for about 20 minutes. But after I remembered this wonderful service, the pain immediately went away and I realized that we have a wonderful opportunity to worthily say goodbye to our cactus Bob. Thank you...</p>
                </div>
            </section>

            <section class="consequences">
                <h2>Сonsequences of plant abuse.</h2>
                <div>
                    <h1>they got hooked on drugs.</h1>
                </div>
                <p>This is a sad effect of plant neglect... <br><span>Read more</span></p>
            </section>

            </b-card-body>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Flowers',
        methods: {
            onClick() {
                this.$router.push({ name: "register"});
            }
        } 
    }
</script>

<style>
    * {
        font-family: 'Montserrat', sans-serif;
    }

    body {
        margin-top: 10px;
    }
        
    .navbar-toggler {
        width: 60px;
    }

    .title {
        height: 780px;
        background: url(./img/image-2.png) no-repeat;
        background-size: cover;
    }

    .heading {
        font-size: 48px;
        top: 452px;
        left: 19px;
        width: 291px;
        height: 177px;
        color: #71B2FF;
        margin-top: 1em;
        font-weight: bold;
        text-align: left;
        position: relative;
    }

    .card-text {
        margin: -5px 0;
    }

    .service {
        margin: -10px 0 50px 0;
    }

    .did {
        /* text-align: left; */
        font-weight: bolder;
        font-size: 32px;
    }

    .care {
        text-align: left;
        margin-right: 2.8em;
    }

    .story {
        margin: 5em 0;
        text-align: left;
    }

    .story h2 {
        color: #449AFF;
        font-weight: bold;
    }

    .newsLetter {
        background-color: #ECF5FF;
        padding: 20px 0;
        height: 175px;
    }

    .newsLetter button {
        width: 300px;
        height: 50px;
        background-color: #ffffff;
        font-weight: bold;
    }
    
    .ServiceOption {
        height: 250px;
        padding: 40px 0;
        text-align: left;
    }

    .ServiceOption h2 {
        font-weight: bold;
        color:#449AFF;
        margin: 20px 0;
    }

    .option ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        border:solid 1px #DBEBFF;
        max-width: 350px;
    }

    .option li {
        text-align: center;
        width: 175px;
        height: 30px;
        padding: 4px 0;
    }

    #Burial {
        background-color: #DBEBFF;
        margin-left: -32px;
    }

    .links {
        list-style-type: none;
        font-size: 15px;
        font-weight: lighter;
        margin-left: -30px;
    }

    .bye {
        height: 211px;
        background: url(./img/image-8.png) no-repeat;
        background-size: cover;
        margin: 30px 0;
    }

    .bye h2 {
        font-weight: bold;
        color: #71B2FF;
        font-size: 36px;
        position: relative;
        top: 155px;
        right: 140px;
    }

    .testimonials {
        height: 375px;
        background-color: #ECF5FF;
        margin: 4em 0 4em 0;
        text-align: left;
        padding: inherit;
    }

    .testimonials h2 {
        font-weight: bold;
        margin-right: 19px;
        font-size: 24px;
        width: 310px;
    }
    
    .testimonial {
        font-size: small;
        margin: 3em 3em;
    }

    .testimonial h6 {
        font-weight: bold;
    }

    .consequences {
        text-align: left;

    }

    .consequences h2 {
        font-size: 24px;
        width: 215px;
        color: #449AFF;
        font-weight: bold;
    }

    .consequences div {
        background: url(./img/image-9.png) no-repeat;
        background-size: cover;
        background-size: contain;
        height: 230px;
    }

    .consequences h1 {
        color: white;
        font-size: 61px;
        font-weight: 300;
        margin-left: 15px;
    }

    .consequences span {
        color: #71B2FF;
        text-decoration: underline;
    }

    </style>