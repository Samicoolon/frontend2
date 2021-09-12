<template>
  <div class="start">
    <Welcome
      welcome="Wir begrüßen Euch herzlich auf unserer Webseite!"
      message="Liebe Familie und Freunde, wir möchten diesen virtuellen Raum anlässlich
       unserer Hochzeit nutzen, um Euch über aktuelle Entwicklungen und die Rahmenbedingungen
       unserer Hochzeit auf dem Laufenden zu halten.
       Am Tag unserer Feier werden wir hier allen, die leider nicht vor Ort dabei sein können,
       die Möglichkeit geben über einen Livestream virtuell mit uns zu feiern."
      regards="Eure Veronique und Euer Samson"
    />
    <Login @authenticated="sendAuth" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'Start',
  methods: {
    sendAuth() {
      this.$emit('authenticated', true);
    },
  },
  components: {
    Welcome,
    Login,
  },
};
</script>

<style scoped>
</style>
