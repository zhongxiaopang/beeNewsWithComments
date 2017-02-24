<template>
  <div class="u-container m-article">
    <header>
      <h1>{{title}}</h1>
      <p class="article-by">编辑：{{edit}} &nbsp;&nbsp;| &nbsp;&nbsp;来源：{{from}}</p>
      <p class="article-by">{{publishDay}}</p>
    </header>
    <article class="article-details">
      <p>{{text}}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
      title: '这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？?',
      edit: 'by Who ?',
      from: 'by Where ?',
      publishDay: '2017-02-10 17:56',
      text: '这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？这个页面，你评估一下时间呗，APP那个新闻的详情页，你这边跟张闻佳商量的怎么样了？有什么问题吗？'
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
