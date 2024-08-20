<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Reach Us</h2>
      </div>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name & Surname:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        successMessage: '',
        errorMessage: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('https://example.com/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.form)
          });
  
          if (response.ok) {
            this.successMessage = 'Your message has been sent successfully!';
            this.errorMessage = '';
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
          } else {
            throw new Error('Something went wrong.');
          }
        } catch (error) {
          this.errorMessage = 'There was an error sending your message. Please try again.';
          this.successMessage = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  .success {
    color: #28a745;
    margin-top: 10px;
  }
  
  .error {
    color: #dc3545;
    margin-top: 10px;
  }
  </style>
  