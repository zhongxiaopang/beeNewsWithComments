<template>
  <div class="ui comments">
    <div class="comment">
          <a v-if="comment.avatar" class="avatar">
            <img :src="comment.avatar">
          </a>
          <a v-if="comment.avatar" class="avatar">
            <img :src="comment.avatar">
          </a>
          <div class="content">
            <a class="author">{{comment.content.author}}</a>
            <div class="metadata">
              <span class="date">{{comment.content.date}}</span>
            </div>
            <div class="text">{{comment.content.text}}</div>
            <!-- <div class="actions">
              <a class="reply">回复</a>
            </div> -->
          </div>
          <div class="comments" >
            <div v-for="comment in comment.comments" class="comment">
              <a class="avatar">
                <img :src="comment.avatar">
              </a>
              <div class="content">
                <a class="author">{{comment.content.author}}</a>
                <div class="metadata">
                  <span class="date">{{comment.content.date}}</span>
                </div>
                <div class="text">
                  {{comment.content.text}}
                </div>
                <!-- <div class="actions">
                  <a class="reply">回复</a>
                </div> -->
              </div>
            </div>
          </div>
          <!-- <div v-else >null</div> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'commentItem',
  props: {
    avatar: 'http://www.91bee.com//image/common/headerImg/default.png',
    content: {
      author: 'author',
      date: '2017-02-14',
      text: '上周问周健那边了，张姚老师说是什么样式的问题，之前的图片是下面的部分被盖掉了，放这个图片的尺寸盒子是你这边来定的吧，这个怎么弄？'
    },
    comments: [
      {
        avatar: 'http://m.91bee.com//image/bee1444187249282.png',
        content: {
          author: 'author',
          date: '2017-02-14',
          text: '上周问周健那边了，张姚老师说是什么样式的问题，之前的图片是下面的部分被盖掉了，放这个图片的尺寸盒子是你这边来定的吧，这个怎么弄？'
        }
      },
      {
        avatar: 'http://m.91bee.com//image/bee1445930969733.png',
        content: {
          author: 'author',
          date: '2017-02-14',
          text: 'Vue采用的MVVM设计模式Vue采用的MVVM设计模式Vue采用的MVVM设计模式'
        }
      }
    ]
  },
  data: function () {
    return { comment: this.props }
  },
  // data () {
  //   return {
  //     avatar: 'http://m.91bee.com//image//bee1445930001428.png',
  //     content: {
  //       author: 'author',
  //       date: '2017-02-14',
  //       text: '这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？'
  //     },
  //     comments: [
  //       {
  //         avatar: 'http://m.91bee.com//image/bee1444187249282.png',
  //         content: {
  //           author: 'author',
  //           date: '2017-02-14',
  //           text: '上周问周健那边了，张姚老师说是什么样式的问题，之前的图片是下面的部分被盖掉了，放这个图片的尺寸盒子是你这边来定的吧，这个怎么弄？'
  //         }
  //       },
  //       {
  //         avatar: 'http://m.91bee.com//image/bee1445930969733.png',
  //         content: {
  //           author: 'author',
  //           date: '2017-02-14',
  //           text: 'Vue采用的MVVM设计模式Vue采用的MVVM设计模式Vue采用的MVVM设计模式'
  //         }
  //       }
  //     ]
  //   }
  // },
  methods: {
    showInput () {
      console.log('showInput')
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
  .comment{text-align: left;}
  .ui.comments:last-child {
    margin-bottom: 0;
}
.ui.comments {
    font-size: 1em;
}
.ui.comments {
    margin: 1.5em 0;
    /* max-width: 650px; */
}

.ui.comments .comment:first-child {
    margin-top: 0;
    padding-top: 0;
}
.ui.comments .comment {
    position: relative;
    background: 0 0;
    margin: .5em 0 0;
    padding: .5em 0 0;
    border: none;
    border-top: none;
    line-height: 1.2;
}
.ui.comments .comment .avatar {
    display: block;
    width: 2.5em;
    height: auto;
    float: left;
    margin: .2em 0 0;
}
.ui.comments .comment .avatar img, .ui.comments .comment img.avatar {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    /* border-radius: .25rem; */
    border-radius: 50%;
}
.ui.comments .comment>.avatar~.content {
    margin-left: 3.5em;
}
.ui.comments .comment>.content {
    display: block;
}
.ui.comments .comment a.author {
    cursor: pointer;
}
.ui.comments .comment .author {
    font-size: 1em;
    color: rgba(0,0,0,.87);
    font-weight: 700;
}
.ui.comments .comment .metadata {
    display: inline-block;
    margin-left: .5em;
    color: rgba(0,0,0,.4);
    font-size: .875em;
}
.ui.comments .comment .metadata>:last-child {
    margin-right: 0;
}
.ui.comments .comment .metadata>* {
    display: inline-block;
    margin: 0 .5em 0 0;
}
.ui.comments .comment .text {
    margin: .25em 0 .5em;
    font-size: 1em;
    word-wrap: break-word;
    color: rgba(0,0,0,.87);
    line-height: 1.3;
    background: #e4e4e4;
    padding: 5px;
    border-radius: .25em;
    position: relative;
}
.ui.comments .comment .text:before{
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
  /* margin-left: 8px; */
  margin-top: 5px;
}
.comment .comments .comment .text{
  font-size: .9em;
}
.content{border-bottom: 1px solid #ccc}
</style>
