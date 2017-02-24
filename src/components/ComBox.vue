<template>
    <commentItem>
    </commentItem>
</template>

<script>
import commentItem from './Comment.vue'

export default {
  name: 'combox',
  // data () {
  //   return {
  //     comments: [
  //       {
  //         avatar: 'http://www.91bee.com//image/common/headerImg/default.png',
  //         content: {
  //           author: 'author',
  //           date: '2017-02-14',
  //           text: '上周问周健那边了，张姚老师说是什么样式的问题，之前的图片是下面的部分被盖掉了，放这个图片的尺寸盒子是你这边来定的吧，这个怎么弄？'
  //         },
  //         comments: [
  //           {
  //             avatar: 'http://m.91bee.com//image/bee1444187249282.png',
  //             content: {
  //               author: 'author',
  //               date: '2017-02-14',
  //               text: '上周问周健那边了，张姚老师说是什么样式的问题，之前的图片是下面的部分被盖掉了，放这个图片的尺寸盒子是你这边来定的吧，这个怎么弄？'
  //             }
  //           },
  //           {
  //             avatar: 'http://m.91bee.com//image/bee1445930969733.png',
  //             content: {
  //               author: 'author',
  //               date: '2017-02-14',
  //               text: 'Vue采用的MVVM设计模式Vue采用的MVVM设计模式Vue采用的MVVM设计模式'
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         avatar: 'http://www.91bee.com//image/common/headerImg/default.png',
  //         content: {
  //           author: 'author',
  //           date: '2017-02-14',
  //           text: 'Vue采用的MVVM设计模式Vue采用的MVVM设计模式Vue采用的MVVM设计模式'
  //         }
  //       },
  //       {
  //         avatar: 'http://www.91bee.com//image/common/headerImg/default.png',
  //         content: {
  //           author: 'author',
  //           date: '2017-02-14',
  //           text: 'Vue采用的MVVM设计模式Vue采用的MVVM设计模式Vue采用的MVVM设计模式'
  //         }
  //       }
  //     ]
  //   }
  // },
  components: {
    commentItem
  },
  methods: {
    showInput () {
      console.log('showInput')
    }
  }
}
</script>

<style scoped>

</style>
