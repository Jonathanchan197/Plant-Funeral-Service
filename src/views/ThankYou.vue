<template>
  <div id="ty">
    <div class="header">
      <h1>Thanks for signing up to our newsletter, {{$route.params.name}}!</h1>
    </div>
    <div class="content">
      <p>Thank God, I will be safe...</p>
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
};
</script>

<style>
#ty {
  text-align: center;
  width: 95vw;
  margin-left: 10px;
}
.header {
  margin-top: 8em;
  height: 100px;
}
.content {
  height: 270px;
}
.footer {
  height: 250px;
}
</style>
