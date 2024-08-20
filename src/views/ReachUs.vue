<template>
  <div class="contact-page">
    <div class="heading text-center animate__animated animate__fadeInLeft">
      <h1>We Would Love Your Feedback!</h1>
    </div>

    <div class="form-container">
      <div class="form">
        <div class="text">
          <p>Required fields are marked with *</p>
        </div>
        <form action="https://formspree.io/f/mrgnjjvw" method="POST">
          <div class="names row">
            <div class="mb-3 col-6">
              <label for="firstName" class="form-label">First Name *</label>
              <input
                name="firstName"
                class="form-control"
                id="firstName"
                placeholder="Bucky"
                required
                oninvalid="this.setCustomValidity('Please insert your first name')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="lastName" class="form-label">Last Name *</label>
              <input
                name="lastName"
                class="form-control"
                id="lastName"
                placeholder="Barnes"
                required
                oninvalid="this.setCustomValidity('Please insert your last name')"
                oninput="this.setCustomValidity('')"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address *</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="wintersoldier@hydra.com"
              required
              oninvalid="this.setCustomValidity('Please insert your email address')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Leave a Message *</label>
            <textarea
              class="form-control"
              id="message"
              rows="6"
              required
              oninvalid="this.setCustomValidity('Please insert your message')"
              oninput="this.setCustomValidity('')"
            ></textarea>
          </div>
          <div class="form-buttons">
            <div class="submit">
              <button type="submit">Send</button>
            </div>
            <div class="reset">
              <button type="reset">Reset</button>
            </div>
          </div>
        </form>
      </div>
      <!-- Map Section -->
      <div class="map-container">
        <h2 class="map-title">Find Us Here</h2>
        <div class="map">
          <!-- Embedded Google Map for the address -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.7835867656235!2d18.482408415153257!3d-33.94723178061999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dccd8b6e776eb27%3A0x5a6c0cbb2f11e1ef!2s315%20Imam%20Haroon%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207970!5e0!3m2!1sen!2sus!4v1692111426872!5m2!1sen!2sus"
            width="100%"
            height="350"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-page {
  background-color: black; /* Overall background color */
  color: white; /* Text color */
  font-family: Arial, sans-serif;
}

.heading {
  margin-bottom: 20px;
  color: #00bcd4; /* Heading color */
}

.form-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form {
  background: #1e1e1e; /* Dark background for the form */
  padding: 20px;
  border-radius: 10px;
}

.text {
  margin-bottom: 15px;
  color: #00bcd4; /* Text color */
}

input,
textarea {
  color: black; /* Text color */
  border: 2px solid #00bcd4; /* Border color */
  background: white; /* Input background */
  border-radius: 5px;
}

::placeholder {
  color: #888; /* Placeholder text color */
}

.form-buttons {
  display: flex;
  justify-content: center;
  gap: 10px; /* Space between buttons */
}

button {
  color: white; /* Button text color */
  background: #00bcd4; /* Button background */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #03a9f4; /* Hover background */
  box-shadow: 0 0 10px rgba(0, 188, 212, 0.5);
}

button:active {
  background: #0288d1; /* Active background */
}

.map-container {
  background: #1e1e1e; /* Dark background for the map section */
  padding: 20px;
  border-radius: 10px;
}

.map-title {
  color: #00bcd4; /* Map section title color */
  margin-bottom: 10px;
}

.map iframe {
  border: none;
  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .form-container {
    flex-direction: column;
  }

  .form {
    width: 100%;
  }

  button {
    width: 100%;
    margin: 5px 0;
  }

  .map iframe {
    height: 250px;
  }
}
</style>
