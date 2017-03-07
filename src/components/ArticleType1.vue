<template>
    <div class="u-container m-article">
       <div class="article">
         <header>
           <h1>{{thisArticle.name}} </h1>
           <p class="article-by">编辑：{{thisArticle.edit}} &nbsp;&nbsp;| &nbsp;&nbsp;来源：{{thisArticle.source}} </p>
           <p class="article-by">{{thisArticle.modify_time}}  </p>
         </header>
         <article class="article-details" v-html="thisArticle.details"></article>
       </div>
    </div>
</template>

<script>
export default {
  name: 'articleType1',
  created () {
  },
  props: ['thisArticle'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
