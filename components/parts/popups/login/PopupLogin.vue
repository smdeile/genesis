<template>
  <div id="login-popup" class="popup-login">
    <div class="popup-login-box">
      <div class="popup-login-box_close" @click="onClose">X</div>
      <h2 class="popup-login__title">{{ $t("login") }}</h2>
      <InputDefault id="login-email"
                    v-model="mail"
                    name="login-email"
                    type="email"
                    placeholder="Enter your email..."
                    label="Email"
                    message="Email is not valid."
      />
      <InputDefault id="login-password"
                    v-model="password"
                    name="login-password"
                    type="password"
                    placeholder="Enter your password..."
                    label="Password"
                    message="Pass must be longer than 5 chars."
      />
      <button class="btn-primary popup-submit" @click="onLogin">Submit</button>
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
    data () {
      return {
        mail: '',
        password: ''
      }
    },
    methods: {
      onClose () {
        this.$store.commit('IS_POPUP_SIGNIN',false)
      },
      async onLogin () {
        const data = await this.$store.dispatch('SIGNIN_USER', { mail: this.mail, password: this.password })
        this.$store.commit('IS_POPUP_SIGNIN',false)
        if (data && data.user) {
          this.$store.commit('LOGGED_USER', {
            uid: data.user.uid,
            mail: data.user.email
          })
          console.log('data.user', data.user);
        }


        console.log('44444444444444', data);
      }
    }
  }
</script>

<style lang="scss">
  @import "PopupLogin";
</style>
