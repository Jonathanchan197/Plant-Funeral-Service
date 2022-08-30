<template>
  <div id="app">
    <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header pills>
        <b-nav-text >Plant Funeral Service</b-nav-text>
      </b-nav>
    </b-card-header>
      <b-card bg-variant="secondary" text-variant="black" class="text-center" style="height: 680px">
        <b-card-text>Love.</b-card-text>
        <b-card-text>Respect.</b-card-text>
        <b-card-text>Remember.</b-card-text>
      </b-card>

    <b-card-body class="text-center">

    </b-card-body>
  </b-card>
  </div>  
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
  nav.card-header {
    height: 80px;
    font-size: 200%;
  }

</style>