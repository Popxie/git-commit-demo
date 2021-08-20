<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
      v-if="msg"
      class="msg-cont">
      123
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    testClick() {
      this.$emit('test-click')
    }
  }
}
</script>
