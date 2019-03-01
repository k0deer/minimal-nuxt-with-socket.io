<template lang="pug">
  div
    h1 hello you!
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      socket: null
    }
  },
  mounted() {
    this.socket = io();
  }
}
</script>

<style lang="sass">
</style>
