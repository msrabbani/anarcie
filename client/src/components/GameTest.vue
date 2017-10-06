<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-6" v-if="one.name">
        <h1>{{ one.name }}</h1>
        <p>{{ one.live }} %</p>
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-danger" :style="{width: one.live + '%'}"></div>
        </div>
        <button v-if="one.name != activePlayer1.name" @click="hitPlayerOne()" type="button" name="button" class="btn btn-lg">hit me b*tch!</button>
        <button v-if="one.name == activePlayer1.name" @click="playerOneOut()" type="button" name="button" class="btn btn-xs">i'm out...</button>
      </div>
      <div class="col-xs-6" v-else>
        <br><br><br>
        <h3 style="color:grey">Waiting player 1...</h3>
      </div>
      <div class="col-xs-6" v-if="two.name">
        <h1>{{ two.name }}</h1>
        <p>{{ two.live }} %</p>
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-danger" :style="{width: two.live + '%'}"></div>
        </div>
        <button v-if="two.name != activePlayer2.name" @click="hitPlayerTwo()" type="button" name="button" class="btn btn-lg">hit me b*tch!</button>
        <button v-if="two.name == activePlayer2.name" @click="playerTwoOut()" type="button" name="button" class="btn btn-xs">i'm out...</button>
      </div>
      <div class="col-xs-6" v-else>
        <br><br><br>
        <h3 style="color:grey">Waiting player 2...</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  computed: {
    ...mapState([
      'activePlayer1',
      'activePlayer2'
    ])
  },
  methods: {
    hitPlayerOne () {
      console.log('ini method hitPlayerOne!')
      if (this.one.live > 2) {
        this.$db.ref(`anarcie/player-one/live`).set(this.one.live -= 2)
        console.log('player-1 live:', this.one.live)
      } else {
        this.$db.ref(`anarcie/player-one/live`).set(this.one.live -= 2)
        this.gameEnd(this.one)
      }
    },
    hitPlayerTwo () {
      console.log('ini method hitPlayerTwo!')
      if (this.two.live > 2) {
        this.$db.ref(`anarcie/player-two/live`).set(this.two.live -= 2)
        console.log('player-2 live:', this.two.live)
      } else {
        this.$db.ref(`anarcie/player-two/live`).set(this.two.live -= 2)
        this.gameEnd(this.two)
      }
    },
    playerOneOut () {
      console.log('ini method playerOneOut!')
      this.$db.ref(`anarcie/player-one`).remove()
      this.$router.push('/login')
    },
    playerTwoOut () {
      console.log('ini method playerTwoOut!')
      this.$db.ref(`anarcie/player-two`).remove()
      this.$router.push('/login')
    },
    gameEnd (winPlayer) {
      console.log(`${winPlayer.name} win!`)
      this.playerOneOut()
      this.playerTwoOut()
      // alert(`${winPlayer.name} win!`)
    }
  },
  created () {
    this.$db.ref(`anarcie/player-one/live`).set(100)
    this.$db.ref(`anarcie/player-two/live`).set(100)
    if (!this.one.name && !this.two.name) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
