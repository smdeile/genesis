<template>
  <div id="login-popup" class="popup-login">
    <div class="popup-login-box">
      <h2 class="popup-login__title">Login</h2>
      <InputDefault id="login-email"
                    name="login-email"
                    type="email"
                    placeholder="Enter your email..."
                    label="Email"
                    message="Email is not valid."
      />
      <InputDefault id="login-password"
                    name="login-password"
                    type="password"
                    placeholder="Enter your password..."
                    label="Password"
                    message="Pass must be longer than 5 chars."
      />
      <button class="btn-primary popup-submit">Submit</button>
    </div>
  </div>
</template>

<script>
  import InputDefault from '../../../ui/inputs/default/InputDefault'

  export default {
    name: 'PopupLogin',
    components: {
      InputDefault,
    },
  }
</script>

<style lang="scss">
  @import "PopupLogin";
</style>
