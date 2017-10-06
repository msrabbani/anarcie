<template lang="html">
  <div class="container">
    <form v-if="!one.name" @submit.prevent="start1()">
      <input v-model="player1.name" type="text" placeholder="Player 1 name">
      <button type="submit" name="submit">Submit</button>
    </form>
    <div v-else>
      <p style="color:grey">Player 1 ready..</p>
    </div>
    <br>
    <form v-if="!two.name" @submit.prevent="start2()">
      <input v-model="player2.name" type="text" placeholder="Player 2 name">
      <button type="submit" name="submit">Submit</button>
    </form>
    <div v-else>
      <p style="color:grey">Player 2 ready...</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  firebase: function () {
    return {
      one: {
        source: this.$db.ref('anarcie/player-one/'),
        asObject: true,
        cancelCallback: function () {},
        readyCallback: function () {}
      },
      two: {
        source: this.$db.ref('anarcie/player-two/'),
        asObject: true,
        cancelCallback: function () {},
        readyCallback: function () {}
      }
      // one: this.$db.ref('anarcie/player-one/'),
      // two: this.$db.ref(`anarcie/player-two/live`)
    }
  },
  data () {
    return {
      player1: {
        name: '',
        img: ''
      },
      player2: {
        name: '',
        img: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'getActivePlayer1',
      'getActivePlayer2'
    ]),
    start1 () {
      this.getActivePlayer1(this.player1)
      this.$db.ref(`anarcie/player-one`).set({
        live: 100,
        name: this.player1.name,
        img: this.player1.img,
        active: true
      })
      this.$router.push('/test')
    },
    start2 () {
      this.getActivePlayer2(this.player2)
      this.$db.ref(`anarcie/player-two`).set({
        live: 100,
        name: this.player2.name,
        img: this.player2.img,
        active: true
      })
      this.$router.push('/test')
    }
  }
}
</script>

<style lang="css">
</style>
