<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-6">
        <p>{{ one.live }} %</p>
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-danger" :style="{width: one.live + '%'}"></div>
        </div>
        <button @click="hitPlayerOne()" type="button" name="button" class="btn btn-lg">hit me b*tch!</button>
      </div>
      <div class="col-xs-6">
        <p>{{ two.live }} %</p>
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-danger" :style="{width: two.live + '%'}"></div>
        </div>
        <button @click="hitPlayerTwo()" type="button" name="button" class="btn btn-lg">hit me b*tch!</button>
      </div>
    </div>
  </div>
</template>

<script>
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
  // data () {
  //   return {
  //     playerOneLive: 100,
  //     playerTwoLive: 100
  //   }
  // },
  methods: {
    hitPlayerOne () {
      console.log('ini method hitPlayerOne!')
      this.$db.ref(`anarcie/player-one/live`).set(this.one.live -= 2)
      console.log('player-1 live:', this.one.live)
    },
    hitPlayerTwo () {
      console.log('ini method hitPlayerTwo!')
      this.$db.ref(`anarcie/player-two/live`).set(this.two.live -= 2)
      console.log('player-2 live:', this.two.live)
    }
  },
  created () {
    this.$db.ref(`anarcie/player-one/live`).set(100)
    this.$db.ref(`anarcie/player-two/live`).set(100)
  }
}
</script>

<style lang="css">
</style>
