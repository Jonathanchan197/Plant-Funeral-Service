<template>
  <div class="form">
    <div class="content">
      <h1>Sign up for our newsletter.</h1>
      <p>
        Get weekly plants care guide to prevent mental problems after losing
        your green friends. 
      </p>
      <p>
        No spam, we promise.
      </p>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="First name" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last name" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Email" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <div id="mail">
            <b-form-checkbox value="mail">
              I agree to receive e-mails from your company and your terms and
              conditions.
            </b-form-checkbox>
          </div>
          <p id="plantsquestion">What plants need reviving in your home?</p>
          <div class="plants">
            <b-form-checkbox value="indoor">Indoor</b-form-checkbox>
            <b-form-checkbox value="outdoor">Outdoor</b-form-checkbox>
          </div>
        </b-form-checkbox-group>
      </b-form-group>
      <div class="button">
        <b-button type="submit" variant="primary">Sign Up</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>

div.content {
  margin-top: -2em;
  text-align: center;
}

div.content h1 {
  font-weight: 900;
  color: #71B2FF;
}

div.content p {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 1em;
  margin-bottom: 1.5em;
}

div.form {
  text-align: left;
  padding: 1em;
  
}

div.form input {
  border: 1px solid black;
  border-radius: 2px;
}

div#input-group-1 {
  margin-top: 1em;
}
div#input-group-2 {
  margin-top: 1em;
}

div#input-group-3 {
  margin-top: 1em;
}

div#checkboxes-4 input {
  margin-right: 10px;
  margin-top: 2em;
}

#mail {
  width: auto;
}

#plantsquestion {
  text-align: center;
  margin-top: 1em;
  margin-bottom: -1em;
}
.plants {
  display: flex;
  margin-top: 0;
}

div.plants input {
  margin-left: 70px;
}

.button {
  margin-top: 2em;
}

button {
  width: fill;
}

.btn-primary {
  background-color:#71B2FF !important;
}
</style>
