<template>
  <div id="login-popup" class="popup-login">
    <div class="popup-login-box">
      <div class="popup-login-box_close" @click="onClose">X</div>
      <h2 class="popup-login__title">{{$t('registration')}}</h2>
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
      <InputDefault id="login-password-rep"
                    v-model="repPassw"  
                    name="login-password"
                    type="password"
                    placeholder="Repeat your password..."
                    label="Password"
                    message="Pass must be longer than 5 chars."
      />
      <button class="btn-primary popup-submit" @click="onRegister">Submit</button>
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
        password: '',
        repPassw: ''
      }
    },
    methods: {
      onClose () {
        this.$store.commit('IS_POPUP_SIGNUP',false)
      },
      async onRegister () {
        if(this.password === this.repPassw) {
          console.log(' this.mail',  this.mail, this.password);
          const data = await this.$store.dispatch('CREATE_USER', { mail: this.mail, password: this.password })
          console.log('11111111111111111111', data );
          if (data && data.user) {
            this.$store.commit('IS_POPUP_SIGNUP',false)
            this.$store.commit('LOGGED_USER', {
            uid: data.user.uid,
            mail: data.user.email
          })
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "PopupLogin";
</style>
