<template>
  <div>
      <form >
          <label>Email :</label>
          <input type="email" v-model="email" required>
  
          <label>Password :</label>  
          <input type="password" v-model="password" required>            
          
          <label>Role :</label>
          <select v-model="role">
              <option value="designer">Web Designer</option> 
              <option value="developer">Web Developer</option> 
          </select>
  
          <div>
              <input type="checkbox" value="highschool" v-model="education" >
              <label>High School</label>
              <input type="checkbox" value="bechelors" v-model="education" >
              <label>Bachelor's Degree</label>
               <input type="checkbox"  value="masters" v-model="education" >
              <label>Master's Degree</label>
          </div>      
          <div>
              <input type="checkbox" v-model="terms" required>
              <label>Please accept terms and conditions</label>
          </div>
          <div class="button">
              <button class="submit" type="submit">Sign up here</button>
          </div>
      </form>
  
      <p> Email: {{ email }} </p>
      <p> Password: {{ password }} </p>
      <p> Role: {{ role }} </p>
      <p> Education: <span v-for="edu in education" :key="edu"> {{ edu }}</span></p>  
      <p> Terms : {{ terms }} </p>
      
  </div>
  
  </template>

<script>
  export default{
  
      data() {
          return {
              email: '',
              password: '',
              role: 'designer',
              education: [],
              terms: false,
              passwordError: ''
          }
      },
      methods: {
     
          handleSubmit() {
              //Validate password field length
              this.passwordError = this.password.length > 6 ? 
              '' : 'Password should be more than 6 characters long!';
  
              if(!this.passwordError) {
                  console.log(this.email);
                  console.log(this.password);
                  console.log(this.role);
                  console.log(this.education);
                  console.log(this.terms);
  
              }
          }
      }
      
  }
  </script>