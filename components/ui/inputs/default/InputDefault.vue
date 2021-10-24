<template>
  <div class="input-default">
    <label v-if="label && id" :for="id">{{ label }}</label>
    <input :id="id"
           :type="type"
           :name="name"
           :placeholder="placeholder"
           :value="myValue"
           @input="onChange($event)"
           
    />
    <div class="mess-error">{{ message }}</div>
  </div>
</template>

<script>
  export default {
    name: 'InputDefault',
    data() {
      return {
        myValue: this.value
      }
    },
    props: {
      label: String,
      id: String,
      name: String,
      type: {
        type: String,
        default: 'text',
      },
      value: {
        type: String,
        default: ''
      },
      placeholder: String,
      message: String,
    },
    methods:{
      onChange (e) {
        this.myValue = e.target.value
        this.$emit(
          'input', this.myValue 
          )
      }
    }
  }
</script>

<style lang="scss">
  @import "InputDefault";
</style>
