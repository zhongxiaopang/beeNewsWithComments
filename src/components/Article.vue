<template>
  <div class="u-container m-article">
    <header>
      <h1>{{article.name}} </h1>
      <p class="article-by">编辑：{{article.edit}} &nbsp;&nbsp;| &nbsp;&nbsp;来源：{{article.source}} </p>
      <p class="article-by " >{{article.modify_time}}  </p>
    </header>
    <article class="article-details">{{article.details}} </article>
  </div>
</template>

<script>
export default {
  name: 'article',
  created () {
    this.getArticle()
  },
  data () {
    return {
      article: {
        name: '',
        edit: '',
        source: '',
        modify_time: '',
        details: ''
      }
    }
  },
  methods: {
    getArticle () {
      console.log(this.$route.query.id)
      // console.log(this.$route.query.type)
      console.log(this.$route.query.token)
      let url
      if (this.$route.query.type === '1') {
        url = 'http://10.1.1.245/api/1488448356513/10005/7127678a3c5625cd5ba7715ce470ce3d/queryAppNewsList'
        // console.log('1')
      } else {
        url = 'http://10.1.1.245/api/1488448356513/10005/7127678a3c5625cd5ba7715ce470ce3d/queryAppNewsList'
        // console.log('2')
      }
      this.$http.post(url, {
        id: this.$route.query.id,
        token: this.$route.query.token
      })
       .then((res) => {
         if (res.status === 200) {
           if (res.data.resultCode === 0) {
             this.article = res.data.resultData.list[0] // 将获取的信息塞入实例
             console.log(res.data.resultData)
           }
           this.$message.success(' json ready ok !!!!!!!!!!!!!!!!!! ')
         } else {
           this.$message.error('获取失败！')
         }
       }, (err) => {
         this.$message.error('获取失败！')
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
  padding-top: 25px;
  padding-bottom: 20px;
}
.article-by{color: #959595;}
.article-details p{
  line-height: 1.6em;
}
</style>
