<template>
  <div class="article-comments comment-area">
    <inputComment class="u-container"></inputComment>
    <div class=" u-container">
      <div v-for="comen in comens" class="comen-item">
            <div class="comment comments">
                <a class="avatar">
                    <img v-if="comen.avatar" :src="comen.avatar">
                    <img v-else src="../assets/avatar-default.jpg">
                </a>
                <div class="content" @click="showInput">
                    <a class="author">{{comen.content.author}}</a>
                    <div class="metadata">
                        <span class="date">{{comen.content.date}}</span>
                    </div>
                    <div class="text">{{comen.content.text}}</div>
                    <div class="comments">
                        <div v-for="item in comen.comIns" class="comment">
                            <div class="content">
                                <a class="author">{{item.content.author}}</a>
                                <div class="metadata">
                                    <span class="date">{{item.content.date}}</span>
                                </div>
                                <div class="text">
                                    {{item.content.text}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div v-else >null</div> -->
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import inputComment from './inputComment.vue'
export default {
  name: 'commentItem',
  data () {
    return {
      comens: [
        {
          avatar: '',
          content: {
            author: '',
            date: '',
            text: ''
          },
          comIns: [
            {
              avatar: '',
              content: {
                author: '',
                date: '',
                text: ''
              }
            }
          ]
        }
      ]
    }
  },
  components: {
    inputComment
  },
  created () {
    this.getDatas()
  },
  methods: {
    showInput () {
      console.log(this.$route.params.id)
    },
    getDatas () {
      var url = 'https://seven-lh.github.io/' + this.$route.params.id + '/comment.json'
      this.$http.get(url) // 向后端发送请求
      .then((res) => {
        if (res.status === 200) {
          this.comens = res.data // 将获取的信息塞入实例
          console.log(res.data)
          this.$message.success('获取' + url)
        } else {
          this.$message.error('获取失败！')
        }
      }, (err) => {
        this.$message.error('获取失败！' + url)
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
*, :after, :before {
    box-sizing: inherit;
}
p {
    margin: 0 0 1em;
    line-height: 1.4285em;
}
p {
    margin: 1em 0em;
}
p:first-child {
    margin-top: 0em;
}
.comment-area {margin-top: 20px;}
.comment{text-align: left;}
.comments:last-child {
    margin-bottom: 0;
}
.comments {
    font-size: 1em;
}
.comments {
    margin: 1.5em 0;
}
.comment:first-child {
    margin-top: 0;
    padding-top: 0;
}
.comment {
    position: relative;
    background: 0 0;
    margin: .5em 0 0;
    padding: .5em 0 0;
    border: none;
    border-top: none;
    line-height: 1.2;
}
.comment .avatar {
    display: block;
    width: 2.5em;
    height: auto;
    float: left;
    margin: .2em 0 0;
}
.comment .avatar img, .comment img.avatar {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    /* border-radius: .25rem; */
    border-radius: 50%;
}
.comment >.avatar~.content {
    margin-left: 3.5em;
}
.comment>.content {
    display: block;
}
.comment a.author {
    cursor: pointer;
}
.comment .author {
    font-size: 1em;
    color: rgba(0,0,0,.87);
    font-weight: 700;
}
.comment .metadata {
    display: inline-block;
    margin-left: .5em;
    color: rgba(0,0,0,.4);
    font-size: .875em;
}
.comment .metadata>:last-child {
    margin-right: 0;
}
.comment .metadata>* {
    display: inline-block;
    margin: 0 .5em 0 0;
}
.comment .text {
    margin: .25em 0 .5em;
    font-size: 1em;
    word-wrap: break-word;
    color: rgba(0,0,0,.87);
    line-height: 1.3;
    
}
.comment .comments .comment:before{
  content: '';
  display: block;
  position: absolute;
  top: -11px;
  left: 6px;
  font-size: 0;
  width: 0;
  height: 0;
  line-height: 0;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: -2px;
  border: 0 dashed transparent;
  border-width: 6px;
  /* .arrow-top { */
  border-bottom-style: solid;
  border-bottom-color: #e4e4e4;
}
.comment .comments{
  /* margin-top: 10px; */
}
.comment .comments .comment{
  /* margin-left: 8px; */
  margin-top: 10px;
  background: #e4e4e4;
  padding: 5px !important;
  border-radius: .25em;
  position: relative;
}
.comment .comments .comment .text{
  font-size: .9em;
}
.content{padding-bottom: 10px}
.comen-item {padding-top: 10px;}
</style>
