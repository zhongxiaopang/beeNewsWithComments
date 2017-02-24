<template>
    <div class="comment-input f-cb">
      <a class="avatar f-fl">
          <img v-if="avatar" :src="avatar">
          <img v-else src="../assets/avatar-default.jpg">
      </a>
      <div class="input-box f-fl">
        <input  placeholder="请输入100个字符">
      </div>
    </div>
</template>

<script>
export default {
  name: 'inputComment',
  data () {
    return {
      avatar: null
    }
  },
  methods: {
    showInput () {
      console.log('showInput')
    }
  }
}
</script>
<style scoped>
.comment-input {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ecf0f1;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.input-box{
  height: 2.5em;
  width: 79%;
  margin-left: 1rem;
  background-color: #f2f2f2;
  border-radius: 30px; 
  padding: 0 0.8em;
}
.input-box input{
  background-color: transparent;
  border:0;line-height: 1;
  height: 100%;
  padding: 0;
  width: 100%;
}
.avatar {
    display: inline-block;
    width: 2.5em;
    height: auto;
    float: left;
    /* margin: .2em 0 0; */
}


 .avatar img, .comment img.avatar {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    /* border-radius: .25rem; */
    border-radius: 50%;
}
 .avatar~.content {
    margin-left: 3.5em;
}
 .content {
    display: block;
}
.mint-cell-wrapper{
  border-radius: 20px;
  background-color: #fafafa;
  background-image: none;
}
</style>
