<template>
  <div id="ty">
    <div class="exit">
      <b-button @click.prevent="onExit">
        <b-icon icon="x-lg" aria-label="Help"></b-icon>
      </b-button>
    </div>
    <div class="header">
      <h1>
        Thanks for signing up to our newsletter, {{ $route.params.name }}!
      </h1>
    </div>
    <div class="img"></div>
    <div class="message">
      <p>Thank God,<br />I will be safe...</p>
    </div>
    <div class="footer">
      <p>
        You should receive a confirmation email soon, please check your inbox.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  methods: {
    onExit() {
      this.$router.push({ name: "flowers" });
    },
  },
};
</script>

<style>
div.exit button {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 0;
  border: 0;
  position: absolute;
  top: 0;
  right: 0;
}
div.exit g {
  color: black;
}
#ty {
  text-align: center;
  width: 95vw;
  margin: 0 auto;
  font-family: Montserrat;
}
div.header {
  margin-left: 70px;
  margin-top: 5em;
  height: 100px;
  width: 250px;
  margin-bottom: -1em;
}

div.header h1 {
  font-size: large;
  font-weight: bolder;
}

div.img {
  margin: 0 auto;
  height: 270px;
  width: 220px;
  background-image: url("../assets/thankyou.png");
  margin-bottom: 2em;
}

div.message {
  width: 140px;
  height: 100px;
  display: flex;
  margin-left: 77px;
  top: 418px;
  position: absolute;
  color: #71b2ff;
  font-size: small;
  font-weight: 600;
}

div.footer {
  margin-top: 5em;
  margin-left: 70px;
  height: 250px;
  width: 260px;
  font-size: 85%;
  font-weight: 100;
}
</style>
