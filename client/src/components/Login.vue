<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</template>
 
<script>
import axios from 'axios'
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,public_profile,publish_actions,manage_pages,publish_pages',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
      console.log(response)
      axios({
        method: 'post',
        url: `http://localhost:3000/login`,
        headers: {
          fbaccesstoken: localStorage.getItem('fbaccesstoken')
        }
      })
      .then(loginResponse => {
        console.log(loginResponse)
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script> 
 
<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style> 