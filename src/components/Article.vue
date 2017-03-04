<template>
	<div>
	  <div class="u-container m-article">
       <div class="article">
         <header>
           <h1>{{article.name}} </h1>
           <p class="article-by">编辑：{{article.edit}} &nbsp;&nbsp;| &nbsp;&nbsp;来源：{{article.source}} </p>
           <p class="article-by">{{article.modify_time}}  </p>
         </header>
         <article class="article-details" v-html="article.details"></article>
       </div>
	  </div>
	  <comment></comment>
  </div>
</template>

<script>
import comment from './CommentWeibolike.vue'
let qs = require('qs')
export default {
  name: 'article',
  created () {
    this.getArticle()
  },
  components: {
    comment
  },
  data () {
    return {
      article: {
        name: null,
        edit: '',
        source: '',
        modify_time: '',
        details: ''
      }
    }
  },
  methods: {
    getArticle () {
      let url
      if (this.$route.query.type === '1') {
        url = '/queryAppNewsList'
      } else {
        url = '/queryAppNewsList'
      }
      this.$http.post(url, qs.stringify({
        id: this.$route.query.id
      }))
       .then((res) => {
         if (res.status === 200) {
           if (res.data.resultCode === 0) {
             this.article = res.data.resultData.list[0] // 将获取的信息塞入实例
           } else {
             this.$message.error(res.data.resultMsg)
           }
         } else {
           console.log(res)
         }
       }, (err) => {
         console.log(err)
       }
      )
    }
  }
}
</script>

<style scoped>
*, :after, :before {
    box-sizing: inherit;
}
*{text-align:left}
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
.m-article {
  padding-bottom: 20px;
}
.article-by{color: #959595;}
.article-details p{
  line-height: 1.6em;
}
</style>
