export default {
  template: `
    <div>
    <h2>{{ message }}</h2>
    <button @click="btnClick()">按钮</button>
    </div>`,
  methods: {
    btnClick() {
      console.log('点击按钮');
    }
  },
  data() {
    return {message: '00'}
  }
}