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

            <b-card-text class="service">personallised service every step of the way</b-card-text>

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
            <section class="newsLetter"  style="height: 161px">
                <p>Get weekly plants care guide to prevent mental problems after loosing your green friends.</p>
                <button @click.prevent="onClick">Sign up for our news letter</button>
            </section>

            <b-card bg-variant="light" text-variant="black" class="text-center"  style="height: 250px">
                <h2>Service Option</h2>
                <div class="option"><ul>
                    <li>Burial</li>
                    <li>Cremation</li>
                </ul>
                </div>
                <ul class="links">
                    <li>Standard Funeral.</li>
                    <li>Fancy Funeral.</li>
                    <li>VIP Funeral.</li>
                    <li>Customised super fancy cool funeral.</li>
                </ul>
            </b-card>

            <b-card bg-variant="light" text-variant="black" class="text-center"  style="height: 550px">
                
                <div class="testimonials">
                    <h2>We thank the following families for allowing us to be part of their story.</h2>
                    <div class="testimonial">
                        <h6>Betty</h6>
                        <p>I killed the plant that my friend asked me to look after. It traumatized me to the core when she found out we sobbed together for about 20 minutes. But after I remembered this wonderful service, the pain immediately went away and I realized that we have a wonderful opportunity to worthily say goodbye to our cactus Bob. Thank you...</p>
                    </div>
                </div>
            </b-card>

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
    }

    .newsLetter button {
        width: 300px;
        height: 50px;
    }

    .option ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
    }

    .option a {
        color: black;
        list-style-type: none;
    }

    .links {
        list-style-type: none;
        text-align: left;
        font-size: 15px;
        font-weight: lighter;
    }

    .testimonials {
        margin: 4em 0 4em 0;
        text-align: left;
    }

    .testimonials h2 {
        font-weight: bold;
    }

    .testimonial {
        font-size: small;
        margin: 3em 1em;
    }    .testimonial {
        font-size: small;
        margin: 3em 3em;
    }

    .testimonial h6 {
        font-weight: bold;
    }

    </style>