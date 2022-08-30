<template>
  <div class="form">
    <div class="content">
      <h1>Sign up for our newsletter.</h1>
      <p>
        Get weekly plants care guide to prevent mental problems after losing
        your green friends.
      </p>
      <p>No spam, we promise.</p>
    </div>
    <b-form @submit="onSubmit" v-if="show">
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
      <div class="spam">
        <b-form-checkbox v-model="form.spam" name="check-button">
          I agree to receive e-mails from your company and your terms and
          conditions.
        </b-form-checkbox>
      </div>
      <div id="plantsquestion">
        <h4>What plants need reviving in your home?</h4>
      </div>

      <div class="plants">
        <b-form-checkbox v-model="form.indoor" name="check-button">
          indoor.
        </b-form-checkbox>
        <b-form-checkbox v-model="form.outdoor" name="check-button">
          outdoor.
        </b-form-checkbox>
      </div>
      <div class="button">
        <b-button type="submit" variant="primary">Sign Up</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { db } from "../firestoreInit";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        spam: false,
        indoor: false,
        outdoor: false,
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const name = this.form.firstName;
      const data = this.form;
      await db.collection("users").add({ data });
      console.log(JSON.stringify(this.form));
      this.$router.push({ name: "thankyou", params: { name } });
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
  color: #71b2ff;
  font-size: 160%;
  margin-bottom: 1em;
}

div.content p {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0.5em;
  margin-bottom: 1.5em;
  width: 87%;
}

div.form {
  text-align: left;
  padding: 2em;
  font-family: Montserrat;
}

div.form input {
  border: 1px solid black;
  border-radius: 2px;
}

div#input-group-1 {
  margin-top: -5em;
}
div#input-group-2 {
  margin-top: 1em;
}

div#input-group-3 {
  margin-top: 1em;
}

.spam {
  margin-right: 10px;
  margin-top: 1em;
}

#plantsquestion {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;

}

div#plantsquestion h4 {
  font-family: Montserrat;
  font-size: medium;
  font-weight: 900;
}
.plants {
  display: flex;
  margin-top: 0;
}

div.plants input {
  margin-left: 70px;
  margin-right: 5px;
}

.button {
  margin-top: 2em;
}

button {
  width: fill;
}

.btn-primary {
  background-color: #71b2ff !important;
}
</style>
