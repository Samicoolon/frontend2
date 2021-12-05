<template>
  <div class="login">
    <p id="login_title">
      Um in den Gästebereich unserer Seite zu gelangen, beantworte bitte
      folgende Frage.
    </p>
    <p id="login_question">
      Welches Motiv befindet sich auf der Vorderseite unserer Einladungskarte?
    </p>
    <span id="login_failed"></span>
    <input
    id="login-input"
      class="form-control"
      type="password"
      name="answer"
      v-model="input.answer"
      placeholder="Antwort"
    />
    <button id="login-button" class="btn btn-primary" type="button" v-on:click="login()">
      Betreten
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        answer: '',
      },
    };
  },
  mounted() {
    const input = document.getElementById('login-input');
    input.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('login-button').click();
      }
    });
  },
  methods: {
    login() {
      if (this.input.answer !== '') {
        // if (this.input.answer == this.$parent.answer) {
        if (this.input.answer === 'Baum' || this.input.answer === 'baum') {
          this.$emit('authenticated', true);
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          this.$router.replace({ name: 'Home' });
        } else {
          document.getElementById('login_failed').innerHTML = "Die Antwort war wohl falsch. Versuch's nochmal!<br /><br />";
        }
      }
    },
  },
};
</script>

<style scoped>
.login {
  /* margin-top: 20px;
  margin-left: 20px; */
  text-align: center;
  padding: 5px;
  /* color: black;
  width: 50%; */
  background-color: rgba(0, 0, 0, 0.3);
  /* opacity: 10%; */
  padding: 5px;
}

#login_title {
  padding: 15px 25px 5px 25px;
  font-weight: bold;
  /* font-family: Dancing Script; */
  font-family: Quicksand;
  text-align: center;
  line-height: 34px;
  font-size: 21px;
  color: rgb(255, 255, 255);
}

#login_failed {
  font-weight: bold;
  /* font-family: Dancing Script; */
  font-family: Quicksand;
  text-align: center;
  font-size: 14px;
  color: red;
}

#login_question {
  padding: 5px 25px 20px 25px;
  font-family: Quicksand;
  text-align: center;
  font-size: 16px;
  color: rgb(255, 255, 255);
}

.form-control {
  box-shadow: none;
  width: 30%;
  background-color: rgb(255, 255, 255, 0.6);
  border: 0px;
  height: 42px;
  margin-left: 25px;
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: black !important;
  text-align: center;
  font-family: Quicksand;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  border-radius: 30px;
  border: 2px solid #ffffff;
}
.form-control:active,
.form-control:focus {
  outline: none;
  box-shadow: none;
  border-color: #7ba7cf;
}
.btn {
  min-width: 25px;
  margin-right: 30px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  border-radius: 30px;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  padding: 8px 15px;
  font-family: Quicksand;
}
.btn-primary {
  background-color: rgba(73, 101, 126, 0.733);
  color: #fff;
  border: 2px solid #ffffff;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: rgba(223, 146, 58, 1);
  border-color: #ffeac4 !important;
}
</style>
