<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2>Add New User</h2>
      <form @submit.prevent="addUser">
        <label for="firstName">First Name:</label>
        <input v-model="user.firstName" type="text" id="firstName" required />

        <label for="lastName">Last Name:</label>
        <input v-model="user.lastName" type="text" id="lastName" required />

        <label for="email">Email:</label>
        <input v-model="user.email" type="email" id="email" required />

        <label for="gender">Gender:</label>
        <select v-model="user.gender" id="gender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label for="age">Age:</label>
        <input v-model="user.age" type="number" id="age" required />

        <button type="submit">Add User</button>
        <button type="button" @click="close">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['show'],
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        gender: 'Male',
        age: null,
      },
    };
  },
  methods: {
    async addUser() {
      try {
        await axios.post('https://your-api-url/users', this.user);
        this.$emit('user-added');
        this.close();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 5px 0;
}

input, select {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
}
</style>
