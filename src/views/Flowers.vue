<template>
    <div>
        <b-card title="Card Title" no-body>
            <b-card-header header-tag="nav">
            <b-nav card-header pills>
                <b-nav-text>Plant Funeral Service</b-nav-text>
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
                <b-card-text class="did">Did you grow a plant for years so that a neighbor would be jealous and it died?</b-card-text>
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
                </ul></div>
                <ul class="links">
                    <li>Standard Funeral.</li>
                    <li>Fancy Funeral.</li>
                    <li>VIP Funeral.</li>
                    <li>Customised super fancy cool funeral.</li>
                </ul>
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
        
    nav.card-header {
        height: 80px;
        font-size: 200%;
    }
        
    .heading {
        margin-top: 1em;
        font-size: 48px;
        font-weight: bold;
        text-align: left;
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

    </style>