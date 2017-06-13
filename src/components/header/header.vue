<template>
    <!--网页头部-->
    <div class="header">
      <!--主体内容包裹区-->
      <div class="content-wrapper">
        <!--产品logo-->
        <div class="avatar">
          <img src="avatar.jpg">
        </div>
        <!--头部内容-->
        <div class="content">
          <!--标题-->
          <div class="title">
            <span class="brand"></span>
            <span class="name">粥品香坊（回龙观）</span>
          </div>
          <!--描述-->
          <div class="description">蜂鸟转送/38分钟到达</div>
          <!--支持活动-->
          <div class="support">
            <span class="icon decrease_1"></span>
            <span class="text">在线支付满28减5</span>
          </div>
        </div>
        <!--支持计数-->
        <div class="supports_count">
          <span class="count">5个</span>
          <!--向右箭头-->
          <span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>
      <!--公告-->
      <div class="bulletin-wrapper">
        <span class="bulletin-title"></span>
        <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <!--背景模糊图片-->
      <div class="background">
        <img src="avatar.jpg">
      </div>
      <!--详情页 浮层-->
      <div class="detail">
        <!--浮层包裹器wrap-->
        <div class="detail-wrapper">
          <!--内容区-->
          <div class="detail-main">
            <div class="name">粥品香坊（回龙观）</div>
            <!--评价小星星-->
            <div class="star-wrapper">
              <span class="star_48 star_48on"></span>
              <span class="star_48 star_48on"></span>
              <span class="star_48 star_48on"></span>
              <span class="star_48 star_48half"></span>
              <span class="star_48 star_48off"></span>
            </div>
            <!--优惠信息-->
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports">
              <li class="support">
                <span class="icon decrease_2"></span>
                <span class="text">在线支付满28减5</span>
              </li>
              <li class="support">
                <span class="icon discount_2"></span>
                <span class="text">VC无限橙果汁全场8折</span>
              </li>
              <li class="support">
                <span class="icon guarantee_2"></span>
                <span class="text">单人精彩套餐</span>
              </li>
              <li class="support">
                <span class="icon invoice_2"></span>
                <span class="text">该商家支持发票,请下单写好发票抬头</span>
              </li>
              <li class="support">
                <span class="icon special_2"></span>
                <span class="text">已加入“外卖保”计划,食品安全保障</span>
              </li>
            </ul>
            <!--商家公告-->
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="content">
              <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
            </div>
          </div>
        </div>
        <!--关闭图标-->
        <div class="detail-close">
          <span class="icon-close"></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position relative
    background rgba(7, 17, 27, .5)
    color: #ffffff
    overflow hidden
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      .avatar
        display inline-block
        width: 64px
        height: 64px
        /*img样式设置*/
        &>img
          width 100%
      .content
        /*background-color: plum;*/
        display inline-block
        margin-left 16px
        .title
          margin-top 2px
          .brand
            display: inline-block
            width: 30px
            height: 18px
            background-repeat:no-repeat
            background-size 30px 18px
            vertical-align top
            bg-image(brand)
          .name
            margin-left: 6px
            font-size 16px
            color rgb(255, 255, 255)
            font-weight bold
            line-height 18px
        .description
            margin-top: 8px
            margin-bottom: 10px
            font-size: 12px
            color: #ffffff
            font-weight:200
            line-height: 12px
        .support
            margin-bottom: 2px
            .icon
              display: inline-block
              width: 12px
              height: 12px
              background-size 12px 12px
              background-repeat no-repeat
              vertical-align middle
            .discount_1
              bg-image(discount_1)
            .decrease_1
              bg-image(decrease_1)
            .guarantee_1
              bg-image(guarantee_1)
            .invoice_1
              bg-image(invoice_1)
            .special_1
              bg-image(special_1)
            .text
              margin-left: 4px
              font-size 10px
              color: #ffffff
              font-weight:200
              line-height 12px


      .supports_count
        position absolute
        height 24px
        background-color: rgba(0, 0, 0, .2)
        padding:7px 8px
        border-radius 12px
        right 10px
        bottom: 10px
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        .count
          font-size: 10px
          color: rgb(255, 255, 255)
          font-weight:200
          line-height: 12px
          margin-right: -14px
          vertical-align top
        .icon-keyboard_arrow_right
          position: relative
          right: -4px
          top: -2px
          padding-left: 2px;
    .bulletin-wrapper
      position: relative
      background rgba(7, 17, 27, .2)

      padding 0 12px
      padding 0 20px 0 12px
      height: 28px
      line-height 28px
      text-overflow: ellipsis
      overflow hidden
      white-space nowrap
      .bulletin-title
        display: inline-block
        width: 22px
        height: 12px
        background-repeat:no-repeat
        background-size 22px 12px
        /*vertical-align middle*/
        bg-image(bulletin)
      .bulletin-text
        font-size: 10px
        color: #ffffff
        font-weight 200
        line-height: 28px
        margin:0 4px
        vertical-align top
      .icon-keyboard_arrow_right
        position: absolute
        right:0
        top: 6px
    .background
      position: absolute
      top:0
      left:0
      width:100%
      height:100%
      z-index -1
      &>img
        width:100%
        height:100%
        filter blur(10px)
    .detail
      position: fixed
      top:0
      left:0
      right:0
      bottom:0
      background-color: rgba(7, 17, 27, .8)
      z-index 100
      /*去掉浮层*/
      display none
      .detail-wrapper
        min-height:100%
        .detail-main
          padding 64px 0
          /*height 32px*/
          .name
            text-align center
            font-size: 16px
            font-weight:700
            color: #ffffff
            line-height 16px
            margin-bottom: 16px
          .star-wrapper
            height: 24px
            line-height 24px
            text-align center
            .star_36
              display inline-block
              width 15px
              height: 15px
              background-repeat no-repeat
              background-size 15px 15px
              margin 0 10px
            .star_36on
              bg-star(star36_on)
            .star_36half
              bg-star(star36_half)
            .star_36off
              bg-star(star36_off)
            .star_24
              display: inline-block
              width: 10px
              height: 10px
              background-repeat no-repeat
              background-size 10px 10px
              margin 0 10px
            .star_24on
              bg-star(star24_on)
            .star_24half
              bg-star(star24_half)
            .star_24off
              bg-star(star24_off)
            .star_48
              display inline-block
              width 20px
              height: 19px
              background-repeat no-repeat
              background-size 20px 19px
              margin 0 10px
            .star_48on
              bg-star(star48_on)
            .star_48half
              bg-star(star48_half)
            .star_48off
              bg-star(star48_off)


          .title
            padding 28px 36px 24px 36px
            text-align center
            display flex
            .line
              flex:1
              width: 112px
              height: 2px
              background: rgba(255, 255, 255, .2)
              margin-top: 8px
            .text
              margin 0 12px
              font-weight: 700
          .supports
            padding 0 48px
            .support
              height: 16px
              margin-bottom: 12px
              .icon
                display: inline-block
                height: 16px
                width: 16px
                background-repeat:no-repeat
                background-size 16px 16px
                vertical-align middle
              .discount_2
                bg-image(discount_2)
              .decrease_2
                bg-image(decrease_2)
              .guarantee_2
                bg-image(guarantee_2)
              .invoice_2
                bg-image(invoice_2)
              .special_2
                bg-image(special_2)
              .text
                margin-left 6px
                font-size: 12px
                font-weight:200
                color: #fff
                line-height: 12px
          .content
            padding 0 48px
            font-size 12px
            font-weight:200
            color: #fff
            line-height: 24px

      .detail-close
        margin-top -64px
        height: 32px
        width:100%
        text-align center
        .icon-close
          font-size 32px
          color rgba(255, 255, 255, .5)
</style>
