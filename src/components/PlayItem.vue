<template>
    <div class="item-style">
   
            <img :src="Item.pbigimg|imgAddress" alt=""/>
            <i></i>
            <div class="text-content">
                <b v-html="Item.name"></b>
                <span>{{Item.begindate|dateTranslate}}</span>
                <span>{{Item.vname}}</span>
                <b class="money">{{Item.minprice}} - {{Item.maxprice}} 元</b>
            </div>
       
    </div>
</template>
<script>
import imgAddress from '../filter/imgAddress'
import dateTranslate from '../filter/dateTranslate'

export default {
    data() {
        return {
            Item: ''
        }
    },
    
    props:["dataItem"],

    mounted() {
        this.Item = JSON.parse(this.dataItem)
        
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
@import '~@/assets/styles/border.styl'

.item-style
    width 100%
    height  1.29rem
    margin-bottom .15rem
    display flex
    justify-content center
    align-items center
    border_1px(0  0 1px 0)
    // padding-right .10rem
    // padding-bottom .15rem   
    img 
        width .85rem
        height 1.13rem
        border-radius .05rem
    div.text-content 
        display flex
        flex-direction column
        justify-content space-around
        padding-left .2rem
        b
            // wrap()
            // ellipsis(1rem) 
            display block
            overflow hidden
            width 2.35rem
            height .40rem
            line-height .20rem
            font-size .14rem
            font-weight 600
        b.money
            display inline
            color #ff3a56
            font-weight 700
        span
            color #999
            display block
            font-size .12rem
</style>
