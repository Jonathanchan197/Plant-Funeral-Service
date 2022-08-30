<template>
    <div>
        <b-card title="Card Title" no-body>
            <b-card-header header-tag="nav">
            <b-nav card-header pills>
                <b-nav-text>Plant life after death</b-nav-text>
            </b-nav>
            </b-card-header>
            <b-card bg-variant="light" text-variant="black" class="text-center" style="height: 680px">
                <div class="heading">
                <b-card-text>Love.</b-card-text>
                <b-card-text>Respect.</b-card-text>
                <b-card-text>Remember.</b-card-text>
                </div>
            </b-card>

            <b-card-body class="text-center">

                <b-card-text class="service">personallised service every step of the way</b-card-text>

            <b-card bg-variant="light" text-variant="black" class="text-center" style="height: 680px">
                <div class="care">
                <b-card-text class="did">Did you grow a plant for years so that a neighbor would be jealous... and it died?</b-card-text>
                <b-card-text>Don’t worry we will take care of you. </b-card-text>
                </div>
                <div class="story">
                    <h2>Our Story</h2>
                    <p>Hello, is it me you're looking for?  I can see it in your eyes, I can see it in your smile, You're all I've ever wanted, and my arms are open wide, 'Cause you know just what to say, And you know just what to do, And I want to tell you so much, I love you.</p>
                </div>
            </b-card >
            <b-card bg-variant="light" text-variant="black" class="text-center"  style="height: 161px">
                <button>Sign up for our news letter</button>
                <p>Get weekly plants care guide to prevent mental problems after loosing your green friends.</p>
            </b-card>

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
        name: 'Flowers'
    }
</script>

<style>
    * {
        font-family: 'Montserrat', sans-serif;
    }
        
    nav .card-header {
        height: 80px;
        font-size: 200%;
    }
        
    .heading {
        width: 291px;
        height: 177px;
        color: #71B2FF;
        margin-top: 1em;
        font-size: 38px;
        font-weight: bold;
        text-align: left;
        position: fixed;
        top: 320px;
        left: 30px;
    }

    .service {
        margin-top: -1.25em;
    }

    .did {
        /* text-align: left; */
        font-weight: bolder;
        font-size: 32px;
    }

    .care {
        text-align: left;
    }
    

    .story {
        margin: 5em 0;
        text-align: left;
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