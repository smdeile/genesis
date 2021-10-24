<template>
  <div>
    <a v-if="!onClick" :id="id" :href="href" class="btn-login">
      {{ $t("login") }}
    </a>
    <button v-if="onClick" :id="id" class="btn-login" @click="onClick">
      {{ $t("login") }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnLogin",
  props: {
    id: {
      type: String,
      default: "btn-login"
    },
    href: {
      type: String,
      default: "#"
    },
    onClick: {
      default: null
    }
  }
};
</script>

<style lang="scss">
@import "BtnLogin";
</style>
