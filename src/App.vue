<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
        <mt-button @click="handleShare" slot="right">分享</mt-button>
    </mt-header>
    <router-view class="u-nav" name="article"></router-view>
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
  },
  methods: {
    handleShare () {
      console.log('share ?')
    }
  }
}

</script>

<style>
.f-cb:after,.f-cbli li:after{display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:".";}
.f-cb,.f-cbli li{zoom:1}
.f-ib{display:inline-block;*display:inline;*zoom:1}
.f-dn{display:none;}
.f-hidden{display: none;}
.f-db{display:block;}
.f-fl{float:left;}
.f-fr{float:right !important;}
.f-pr{position:relative;}
.f-prz{position:relative;zoom:1}
.f-oh{overflow:hidden;}
.f-ff0{font-family:arial,\5b8b\4f53;}
.f-ff1{font-family:"Microsoft YaHei",\5fae\8f6f\96c5\9ed1,arial,\5b8b\4f53;}
.f-fs1{font-size:12px;}
.f-fs2{font-size:14px;}
.f-fwn{font-weight:normal;}
.f-fwb{font-weight:bold;}
.f-tal{text-align:left!important;}
.f-tac{text-align:center;}
.f-tar{text-align:right;}
.f-taj{text-align:justify;text-justify:inter-ideograph;}
.f-vam,.f-vama *{vertical-align:middle;}
.f-wsn{word-wrap:normal;white-space:nowrap;}
.f-pre{overflow:hidden;text-align:left;white-space:pre-wrap;word-wrap:break-word;word-break:break-all;}
.f-wwb{white-space:normal;word-wrap:break-word;word-break:break-all;}
.f-ti{overflow:hidden;text-indent:-30000px;}
.f-ti2{text-indent:2em;}
.f-lhn{line-height:normal;}
.f-tdu,.f-tdu:hover{text-decoration:underline;}
.f-tdn,.f-tdn:hover{text-decoration:none;}
.f-toe{overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis;}
.f-csp{cursor:pointer;}
.f-csd{cursor:default;}
.f-csh{cursor:help;}
.f-csm{cursor:move;}
.f-usn{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;}
.f-pa{position: absolute;}
.mint-header{font-size: 1em !important;background: #fafafa !important;color: #000 !important;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #272727;
  /* margin-top: 60px; */
  background-color: #f5f6fa;
}
.u-container{padding: 0 15px;background-color: #fff;}
</style>
