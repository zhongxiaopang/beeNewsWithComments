<template>
  <div class="article-comments comment-area">
    <inputComment class="u-container"></inputComment>
    <div class=" u-container">
      <div v-for="comen in comens" class="comen-item">
            <div class="comment comments">
                <a class="avatar">
                    <img v-if="comen.headerImg" :src="comen.headerImg">
                    <img v-else src="/image/common/headerImg/default.png">
                </a>
                <div class="content" >
                    <a class="author">{{comen.askUser}}</a>
                    <div class="metadata">
                        <span class="date">{{comen.askTime}}</span>
                    </div>
                    <div class="text">{{comen.askContent}}</div>
                    <div class="comments" v-if=" comen.replyContent != '' ">
                        <div class="comment">
                            <div class="content">
                                <a class="author">{{comen.replyUser}}</a>
                                <div class="metadata">
                                    <span class="date">{{comen.replyTime}}</span>
                                </div>
                                <div class="text">
                                    {{comen.replyContent}}
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
let qs = require('qs')
export default {
  name: 'commentItem',
  data () {
    return {
      comens: [
        {
          headerImg: '',
          askUser: '',
          askTime: '',
          askContent: '',
          replyUser: '',
          replyTime: '',
          replyContent: ''
        }
      ]
    }
  },
  components: {
    inputComment
  },
  created () {
    this.getComments()
  },
  computed: {
  },
  methods: {
    getComments () {
      let sourceId
      if (this.$route.query.type === '1') {
        sourceId = 7
      } else {
        sourceId = 8
      }
      console.log(sourceId)
      var url = '/queryQuestionList'
      this.$http.post(url, qs.stringify({
        videoId: this.$route.query.id,
        source: sourceId
      }))
      .then((res) => {
        if (res.status === 200) {
          if (res.data.resultCode === 0 && res.data.resultData) {
            console.log(res.data.resultData.list)
            this.comens = res.data.resultData.list // 将获取的信息塞入实例
          } else {
            this.$message.error(res.data.resultMsg)
          }
        } else {
          console.log(res)
        }
      }, (err) => {
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
