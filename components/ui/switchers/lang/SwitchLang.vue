<template>
  <div id="switch-lang" class="lang-switcher">
    <div class="lang-switcher__item current">{{ lang.en }}</div>
    <div class="lang-switcher__item">{{ lang.ua }}</div>
  </div>
</template>

<script>
  // [ EN, UA ]
  export default {
    name: 'SwitchLang',
    data() {
      return {
        lang: {
          en: 'EN',
          ua: 'UA',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "SwitchLang";
</style>
