<template>
  <div class="u-container m-article">
    <header>
      <h1>{{article.title}} </h1>
      <p class="article-by">编辑：{{article.edit}} &nbsp;&nbsp;| &nbsp;&nbsp;来源：{{article.from}}</p>
      <p class="article-by">{{article.publishDay}}</p>
    </header>
    <article class="article-details">
      <p>{{article.text}}</p>
    </article>
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
        title: '',
        edit: '',
        from: '',
        publishDay: '',
        text: ''
      }
    }
  },
  methods: {
    getArticle () {
      var url = 'https://seven-lh.github.io/' + this.$route.params.id + '/article.json'
      console.log(url)
      this.$http.get(url)
       .then((res) => {
         if (res.status === 200) {
           this.article = res.data // 将获取的信息塞入实例
           console.log(res.data)
           this.$message.success(' json ready ok !!!!!!!!!!!!!!!!!! ' + url)
         } else {
           this.$message.error('获取失败！')
         }
       }, (err) => {
         this.$message.error('获取失败！' + url)
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
