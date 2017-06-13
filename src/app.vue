<template>
  <div>
    <ele-header></ele-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/ratings'}">评价</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('api2/seller')
        .then(response =>{
          const result = response.body
          if (result.code===0) {
          this.seller = result.data
          this.seller.score = 3.6
          }
        })
    },
    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display flex
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, .1))
    .tab-item
      flex-grow 1
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      /*页签颜色*/
      /*background-color: papayawhip;*/
      a
        display block
        &.v-link-active
          color rgb(240, 20, 20)
</style>
