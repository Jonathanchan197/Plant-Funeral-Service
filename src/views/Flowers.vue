<template>
    <div>
        <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header pills>
        <b-nav-text >Plant Funeral Service</b-nav-text>
      </b-nav>
    </b-card-header>
      <b-card bg-variant="secondary" text-variant="black" class="text-center" style="height: 680px">
        <div class="heading">
          <b-card-text>Love.</b-card-text>
          <b-card-text>Respect.</b-card-text>
          <b-card-text>Remember.</b-card-text>
        </div>
      </b-card>

    <b-card-body class="text-center">
      <b-card bg-variant="light" text-variant="black" class="text-center" style="height: 680px">
        <div class="heading">
          <b-card-text>More.</b-card-text>
          <b-card-text>Coming.</b-card-text>
          <b-card-text>Soon.</b-card-text>
        </div>
      </b-card>secondary
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
    
    </style>