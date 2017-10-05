<template>
  <div class="">
    <div id="header-game">
      <h1>Anarcie</h1>
      <p>Anarcie, with a multiplayer twist</p>
      <div class="test">
        <div class="col-sm-1">
        </div>

        <div class="col-sm-5">
          <p>Player 1</p>
          <div class="progress">
            <div class="progress-bar progress-bar-danger" style="width: 80%"></div>
          </div>
          <button id="btn-image"><img src="../assets/face1.png"></button>
        </div>

        <div class="col-sm-5">
          <p>Player 2</p>
          <div class="progress">
            <div class="progress-bar progress-bar-danger" style="width: 80%"></div>
          </div>
          <button id="btn-image"><img src="../assets/face1.png"></button>
        </div>
      </div>
    </div>
    <div id="howToPlay">
      <h2>How To Play</h2>
      <p>blablalalnalnaldnaslndslakdsalkdaslkd</p>
      <p>blablalalnalnaldnaslndslakdsalkdaslkd</p>
      <p>blablalalnalnaldnaslndslakdsalkdaslkd</p>
      <p>blablalalnalnaldnaslndslakdsalkdaslkd</p>
      <p>blablalalnalnaldnaslndslakdsalkdaslkd</p>
    </div>
  </div>



</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
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
.col-sm-5{
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
</style>
