<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-6" v-if="one.name">
        <h3>{{ one.name }}</h3>
        <p>{{ one.live }} %</p>
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-danger" :style="{width: one.live + '%'}"></div>
        </div>
        <!-- <button v-if="one.name != activePlayer1.name" @click="hitPlayerOne()" type="button" name="button" class="btn btn-lg">hit me b*tch!</button> -->
        <button class="btn1" v-if="one.name != activePlayer1.name" @click="hitPlayerOne()" id="btn-image"><img src="../assets/face1.png"></button>
        <button v-else disabled @click="hitPlayerOne()" id="btn-image"><img src="../assets/face1.png"></button>
        <br><button v-if="one.name == activePlayer1.name" @click="block1()" type="button" name="block" class="btn-danger btn-lg">block!</button>
        <br><br><button v-if="one.name == activePlayer1.name" @click="playerOneOut()" type="button" name="button" class="btn btn-xs">i'm out...</button>
      </div>
      <div class="col-xs-6" v-else>
        <br><br><br>
        <h3 style="color:grey">Waiting player 1...</h3>
      </div>
      <div class="col-xs-6" v-if="two.name">
        <h3>{{ two.name }}</h3>
        <p>{{ two.live }} %</p>
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-danger" :style="{width: two.live + '%'}"></div>
        </div>
        <!-- <button v-if="two.name != activePlayer2.name" @click="hitPlayerTwo()" type="button" name="button" class="btn btn-lg">hit me b*tch!</button> -->
        <button class="btn1" v-if="two.name != activePlayer2.name" @click="hitPlayerTwo()" id="btn-image"><img src="../assets/face2.png"></button>
        <button v-else disabled @click="hitPlayerTwo()" id="btn-image"><img src="../assets/face2.png"></button>
        <br><button v-if="two.name == activePlayer2.name" @click="block2()" type="button" name="block" class="btn-danger btn-lg">block!</button>
        <br><br><button v-if="two.name == activePlayer2.name" @click="playerTwoOut()" type="button" name="button" class="btn btn-xs">i'm out...</button>
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
        this.gameEnd(this.two)
      }
    },
    hitPlayerTwo () {
      console.log('ini method hitPlayerTwo!')
      if (this.two.live > 2) {
        this.$db.ref(`anarcie/player-two/live`).set(this.two.live -= 2)
        console.log('player-2 live:', this.two.live)
      } else {
        this.$db.ref(`anarcie/player-two/live`).set(this.two.live -= 2)
        this.gameEnd(this.one)
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
      alert(`${winPlayer.name} win!`)
    },
    block1 () {
      if (this.one.live <= 98) {
        this.$db.ref(`anarcie/player-one/live`).set(this.one.live += 2)
      }
    },
    block2 () {
      if (this.two.live <= 98) {
        this.$db.ref(`anarcie/player-two/live`).set(this.two.live += 2)
      }
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
  #header-game {
    /*font-family: system-ui;*/
    font-family: 'Germania One', cursive;
  }
  h1 {
    font-size: 75px;
  }
  p {
    margin: 0px;
   }
  .col-xs-6 {
    height: 500px;
    background:rgba(255,255,255, 0.75);
    /*border-radius: 25px;*/
  }
  #howToPlay {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 520px;
    margin: 50px auto 10px auto;
  }
  h2 {
    font-family: system-ui;
  margin-bottom: 20px;
  text-align: center;
  }
  img {
    display: block;
    max-width:500px;
    max-height:250px;
    width: auto;
    height: auto;
  }
  .btn1 {
    cursor: url('https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-2-1/200/misc_punch-128.png'), auto;
  }
</style>
