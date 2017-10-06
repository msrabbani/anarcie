<template>
  <div class="Login">
    <div class="utama">
      <div class="Form">
        <h4>Login here with your Facebook</h4>
        <div v-on:click="play" class="button"><div class="outer"><div class="height"><div class="inner"><img style="width:70%" src="https://cdn3.iconfinder.com/data/icons/inside/PNG/256x256/icontexto-inside-facebook.png" alt=""></div></div></div></div>
        <!-- <button v-on:click="play" type="button">Click Me to Play Sound</button> -->
        <audio ref="audioElm" src="http://soundbible.com/mp3/chinese-gong-daniel_simon.mp3"></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  methods: {
    play: function (event) {
      this.$refs.audioElm.play()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4{
  padding-bottom: 50px;
  padding-top: 35px;
  font-family: 'Nosifer', cursive;
  font-size: 35px;

}
.Form{
  /*background-image: url("https://brianlpowell.files.wordpress.com/2015/05/fist-fight.jpeg");*/
  /*background-size: 100% 100%;*/

  height: 500px;
  width: 50%;
  background-color: rgba(255,255,255,0.75);
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  border-radius: 25px;
}
.button {
	height: 150px;
	width: 180px;
	cursor: pointer;
	margin: 50px auto;
}
.button .outer {
	position: relative;
	width: 100%;
	height: 100%;
	padding: 10px;
	background: rgba(0,0,0,0.65);
	border-radius: 14px;
	-webkit-border-radius: 14px;
	-moz-border-radius: 14px;
	box-shadow: inset rgba(0,0,0,0.85) 0px 1px 5px;
	-webkit-box-shadow: inset rgba(0,0,0,0.85) 0px 1px 5px;
	-moz-box-shadow: inset rgba(0,0,0,0.85) 0px 1px 5px;
	-webkit-transform: perspective(500px) rotateX(35deg);
	-moz-transform: perspective(500px) rotateX(35deg);
}
.button .outer .height {
	position: relative;
	height: 100%;
	margin-top: -15px;
	padding-bottom: 15px;
	background: #ff0000;
	border-radius: 16px;
	-webkit-border-radius: 16px;
	-moz-border-radius: 16px;
	box-shadow: rgba(0,0,0,0.85) 0px 1px 1px, inset rgba(0,0,0,0.35) 0px -2px 8px;
	-webkit-box-shadow: rgba(0,0,0,0.85) 0px 1px 1px, inset rgba(0,0,0,0.35) 0px -2px 8px;
	-moz-box-shadow: rgba(0,0,0,0.85) 0px 1px 1px, inset rgba(0,0,0,0.35) 0px -2px 8px;
	-webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
}
.button:hover .outer .height {
	margin-top: -10px;
	padding-bottom: 10px;
	background: #ba1027;
	box-shadow: rgba(0,0,0,0.25) 0px 1px 1px, inset rgba(0,0,0,0.35) 0px -2px 6px;
	-webkit-box-shadow: rgba(0,0,0,0.25) 0px 1px 1px, inset rgba(0,0,0,0.35) 0px -2px 6px;
	-moz-box-shadow: rgba( 0,0,0,0.25) 0px 1px 1px, inset rgba(0,0,0,0.35) 0px -2px 6px;
}
.button:active .outer .height {
	margin-top: 0px;
	padding-bottom: 0px;
}
.button .outer .height .inner {
	line-height: 2.8em;
	font-size: 30px;
	letter-spacing: .05em;
	position: relative;
	height: 100%;
	text-align: center;
	text-shadow: #ff7a7a 0px 0px 1px;
	background: #d13535;
	background: -moz-linear-gradient(top, #ec7575 0%, #d03434 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#80ec75), color-stop(100%,#43d034)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #ec7575 0%,#d03434 100%); /* Chrome10+,Safari5.1+ */
	background: linear-gradient(top, #ec7575 0%,#d03434 100%); /* W3C */
	border-radius: 12px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	box-shadow: inset rgba(255,255,255,0.85) 0px 0px 1px;
	-webkit-box-shadow: inset rgba(255,255,255,0.85) 0px 0px 1px;
	-moz-box-shadow: inset rgba(255,255,255,0.85) 0px 0px 1px;
	-webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
}
.button:hover .outer .height .inner{
	text-shadow: #f48c8c 0px 0px 1px;
	background: #d03434; /* Old browsers */
	background: -moz-linear-gradient(top, #d03434 0%, #e45c5c 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#d03434), color-stop(100%,#e45c5c)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #d03434 0%,#e45c5c 100%); /* Chrome10+,Safari5.1+ */
	background: linear-gradient(top, #d03434 0%,#e45c5c 100%); /* W3C */
}
.button:active .outer .height .inner{
	text-shadow: #992626 0px 1px 0px;
	border-radius: 16px;
	-webkit-border-radius: 16px;
	-moz-border-radius: 16px;
	box-shadow: inset rgba(0,0,0,0.9) 0px 0px 8px;
	-webkit-box-shadow: inset rgba(0,0,0,0.9) 0px 0px 8px;
	-moz-box-shadow: inset rgba(0,0,0,0.9) 0px 0px 8px;
	background: #7c1212; /* Old browsers */
	background: -moz-linear-gradient(top, #7c1212 0%, #d24242 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1d7d12), color-stop(100%,#4fd342)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #1d7d12 0%,#4fd342 100%); /* Chrome10+,Safari5.1+ */
	background: linear-gradient(top, #7c1212 0%,#d24242 100%); /* W3C */
}
</style>
