<template>
    <div class="comment-input f-cb">
      <a class="avatar f-fl">
          <img v-if="user.userImg" :src="user.userImg">
          <img v-else src="/image/common/headerImg/default.png">
      </a>
      <form class="form-width" v-on:submit.prevent="" @keyup.enter="submitComment">
        <div class="input-box f-fl">
          <input v-model="questionContent"  placeholder="请输入100个字符" @keyup.enter="callFather" >
        </div>
        <input type="hidden" id="token" name="token" :value="user.loginToken">
      </form>
    </div>
</template>

<script>
var qs = require('qs')
export default {
  name: 'commentItem',
  data () {
    return {
      user: {
        userImg: '',
        loginToken: ''
      },
      questionContent: ''
    }
  },
  created () {
    this.getUserData()
  },
  methods: {
    getUserData () {
      var url = '/getUserInfo'
      this.$http.post(url, qs.stringify({
        token: this.$route.query.token
      }))
      .then((res) => {
        if (res.status === 200) {
          if (res.data.resultCode === 0) {
            this.user = res.data.resultData // 将获取的信息塞入实例
          } else {
            this.$message.error(res.data.resultMsg)
          }
        } else {
          console.log(res)
        }
      }, (err) => {
        console.log(err)
      })
    },
    callFather () {
      // this.
      // this.$emit('getComments')
      this.$root.$emit('getComments()')
    },
    submitComment () {
      let url = '/addQuestion'
      // let sourceId
      if (this.$route.query.type === '1') {
        this.sourceId = 7
      } else {
        this.sourceId = 8
      }
      this.$http.post(url, qs.stringify({
        videoId: this.$route.query.id,
        source: this.sourceId,
        source_code: this.$route.query.scode,
        questionContent: this.questionContent,
        token: this.$route.query.token
      }))
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data.resultCode)
          if (res.data.resultCode === 0 && res.data.resultData.code === 0) {
            // this.$message.success(res.data.resultMsg)
            this.questionContent = ''
          } else {
            this.$message.err(res.data.resultMsg)
          }
        }
        this.callFather()
        // this.$parent('getComments')
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.form-width{
  width: 100%;
}
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
