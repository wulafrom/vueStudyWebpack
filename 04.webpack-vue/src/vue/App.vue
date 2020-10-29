<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick()">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  name: "App",
  methods: {
    btnClick() {
      console.log('点击按钮');
    }
  },
  data() {
    return {message: '00'}
  },
  components: {
    Cpn: Cpn
  }
}
</script>

<style scoped>
.title {
  color: aquamarine;
}
</style>