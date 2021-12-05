<template>
  <div id="app">
    <div id="topnav" class="nav">
      <!-- <router-link
        v-if="authenticated"
        to="/start"
        replace
        class="active"
        >Start</router-link
      > -->
      <router-link v-if="authenticated" to="/home">Home</router-link>
      <router-link v-if="authenticated" to="/gallery">Gallery</router-link>
      <a href="javascript:void(0);" class="icon" v-on:click="toggle()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: 'Start' });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
      localStorage.setItem('authenticated', status);
    },
    logout() {
      this.authenticated = false;
      localStorage.setItem('authenticated', false);
    },
    toggle() {
      const x = document.getElementById('topnav');
      if (x.className === 'nav') {
        x.className += ' responsive';
      } else {
        x.className = 'nav';
      }
    },
  },
  components: {},
};
</script>

<style>
body {
  background-color: rgb(255, 255, 255);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}

#app {
  /* background-image: url("./assets/title-couple.jpg"); */
  font-family: Quicksand, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* Add a black background color to the top navigation */
.nav {
  background-color: #ffffff;
  color: rgba(73, 101, 126, 0.733);
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.nav a {
  float: left;
  display: block;
  color: rgba(73, 101, 126, 0.733);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.nav a:hover {
  background-color: #ddd;
  color: rgb(255, 255, 255);
}

/* Add an active class to highlight the current page */
.nav a.active {
  background-color:  rgb(255, 255, 255);;
  color: rgba(73, 101, 126, 0.733);
}

/* Hide the link that should open and close the topnav on small screens */
.nav .icon {
  display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one. */
/* Show the link that contains should open and close the topnav (icon) */
@media screen and (max-width: 600px) {
  .nav a:not(:first-child) {
    display: none;
  }
  .nav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript */
/* when the user clicks on the icon. */
/* This class makes the topnav look good on small screens */
/* (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .nav.responsive {
    position: relative;
  }
  .nav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .nav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

</style>
