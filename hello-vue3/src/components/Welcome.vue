<template>
  <div class="welcome">
    <img id="splash" src="../assets/title-couple.jpg" />
    <p id="welcome_title">
      <b>{{ welcome }}</b>
    </p>
    <p id="welcome_message">{{ message }}</p>
    <p id="welcome_regards">{{ regards }}</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    welcome: String,
    message: String,
    regards: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#splash {
  width: 100%;
  height: auto;
}

.welcome {
  /* margin-left: 20px; */
  text-align: center;
  color: black;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* opacity: 10%; */
  /* padding: 0px; */
}

#welcome_title {
  text-align: center;
  font-family: Indie Flower;
  line-height: 40px;
  font-size: 32px;
  color: rgb(255, 255, 255);
}

#welcome_message {
  font-family: Indie Flower;
  text-align: left;
  line-height: 30px;
  font-size: 26px;
  padding-left: 20px;
  padding-right: 20px;
  color: rgb(255, 255, 255);
}

#welcome_regards {
  text-align: center !important;
  font-family: Indie Flower;
  text-align: left;
  line-height: 30px;
  font-size: 26px;
  color: rgb(255, 255, 255);
  padding-bottom: 40px;
  margin-bottom: 0px;
}
</style>
