<template>
    <a class="avatar">
        <img v-if="avatar" :src="avatar">
        <img v-else src="../assets/avatar-default.jpg">
    </a>
    </a>
</template>

<script>
export default {
  name: 'avatar',
  data () {
    return {
      avatar: 'http://m.91bee.com//image//bee1445930001428.png'
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>

</style>
