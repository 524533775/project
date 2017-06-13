<template>
    <div class="ratings" v-el:ratings>
      <div class="ratings-content">

        <div class="overview">
          <div class="overview-left">
            <h1 class="score">{{seller.score}}</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边卖家{{seller.rankRate}}</div>

          </div>

          <div class="overview-right">
            <div class="score-wrapper">
              <span class="title">服务态度</span>
              <star :score="seller.sellerScore" :size="36"></star>
              <span class="score">{{seller.sellerScore}}</span>
            </div>
            <div class="score-wrapper">
              <span class="title">商品评分</span>
              <star :score="seller.foodScore" :size="36"></star>
              <span class="score">{{seller.foodScore}}</span>
            </div>
            <div class="delivery-wrapper">
              <span class="title">送达时间</span>
              <span class="delivery">{{seller.deliveryTime}}</span>
            </div>
          </div>
        </div>

        <split></split>

        <ratingselect :desc="desc"
                      :only-content="onlyContent"
                      :ratings="ratings"
                      :select-type="selectType"

        ></ratingselect>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
