<template>
  <h1>sdfsdfsd</h1>
</template>

<script>
import { doc, setDoc } from "firebase/firestore";
export default {
  async created () {
    this.writeToFirestore(),
    this.readFromFirestore()
  },
  mounted() {
    console.log(this.$store);
  },

  methods: {

  },
  async created () {
    
  }
}
</script>
