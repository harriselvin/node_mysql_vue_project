<template>
    <div class="card" justify-content= center>
        <div class="card-content">
            <div class="photo">
                <slot name="cardHeader"></slot>
            </div>
            <div class="details">
                <div class="title">
                    <slot name="cardBody"></slot>
                </div>
                <div class="background-title">
                    <slot name="prod-title"></slot>
                </div>
                <div class="description">
                    <slot name="Desc"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComp"
}
</script>

<style scoped>
.card {
  background: #1b1b1b; /* Dark background consistent with home page */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Consistent with home page */
  padding: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  width: 250px; /* Width of the card */
  margin: 10px;
  position: relative; /* Ensure correct positioning for child elements */
}

.card:hover {
  transform: scale(1.05); /* Scale on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); /* Enhanced shadow on hover */
}

.card-content {
  position: relative;
  overflow: hidden; /* Ensure content does not overflow */
}

.photo {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: transform 0.5s ease;
}

.card:hover .photo {
  transform: scale(1.05); /* Scale image on hover */
}

.photo img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .photo img {
  transform: scale(1.1); /* Zoom in on hover */
}

.details {
  color: #fff;
}

.title {
  font-size: 1rem;
  color: white; /* Title color consistent with home page */
  margin: 10px 0;
}

.background-title {
  font-size: 10em;
  font-weight: 900;
  font-style: italic;
  color: rgba(255, 255, 255, 0.04);
  position: absolute;
  max-width: 120%;
  top: -150%;
  transition: transform 0.6s ease;
}

.card:hover .background-title {
  transform: translateY(60%); /* Move title on hover */
}

.description {
  font-size: 14px;
  color: #eee; /* Description color consistent with home page */
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  margin-top: 10px;
}

.card:hover .description {
  opacity: 1; /* Fade in description on hover */
  visibility: visible;
}
</style>
