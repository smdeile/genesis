<template>
  <div class="input-default">
    <label v-if="label && id" :for="id">{{ label }}</label>
    <input :id="id"
           :type="type"
           :name="name"
           :placeholder="placeholder"
    />
    <div class="mess-error">{{ message }}</div>
  </div>
</template>

<script>
  export default {
    name: 'InputDefault',
    props: {
      label: String,
      id: String,
      name: String,
      type: {
        type: String,
        default: 'text',
      },
      placeholder: String,
      message: String,
    }
  }
</script>

<style lang="scss">
  @import "InputDefault";
</style>
