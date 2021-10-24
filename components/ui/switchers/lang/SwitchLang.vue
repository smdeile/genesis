<template>
  <div id="switch-lang" class="lang-switcher">
    <div v-for="lang in $i18n.locales"
         :key="lang.code"
         @click="changeLang($i18n, lang.code)"
         :class="`lang-switcher__item ${$i18n.locale === lang.code ? 'current' : ''}`"
    >
      {{ lang.name }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SwitchLang',
    methods: {
      changeLang(i18n, code) { // [ en, ru ]
        return i18n.locale = code
      }
    }
  }
</script>

<style lang="scss">
  @import "SwitchLang";
</style>
