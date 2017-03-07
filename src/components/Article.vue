<template>
	<div>
	  <div class="u-container m-article">
          <articleType1 v-if="queryType == 1" :this-article="dataProps"></articleType1>
          <articleType2 v-else  :this-article="dataProps"></articleType2>
	  </div>
	  <comment></comment>
  </div>
</template>

<script>
import articleType1 from './articleType1.vue'
import articleType2 from './articleType2.vue'
import comment from './CommentWeibolike.vue'
let qs = require('qs')
export default {
  name: 'article',
  created () {
    this.getArticle()
  },
  components: {
    comment,
    articleType1,
    articleType2
  },
  data () {
    return {
      queryType: 1,
      url: '/queryAppNewsList',
      dataProps: ''
    }
  },
  methods: {
    getArticle () {
      if (this.$route.query.type === '1') {
        this.queryType = 1
      } else {
        this.url = '/queryAppNewsList'
        this.queryType = 2
      }
      this.$http.post(this.url, qs.stringify({
        id: this.$route.query.id
      }))
       .then((res) => {
         if (res.status === 200) {
           if (res.data.resultCode === 0) {
             this.dataProps = res.data.resultData.list[0] // 将获取的信息塞入实例
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
