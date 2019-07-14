<template>
    <div class="item-style"
        @click="toDetail(Item.PRODUCTID)"
    >   
        <img :src="Item.PSMILLIMG|imgAddress" alt=""/>
        <i v-if="Item.DISPLAY">售票中</i>
        <div class="text-content">
            <b v-html="Item.NAME"></b>
            <span>{{Item.BEGINDATE|dateTranslate}}-{{Item.ENDDATE|dateTranslate}}</span>
            <span>{{Item.VNAME}}</span>
            <b class="money">{{Item.MINPRICE}} - {{Item.MAXPRICE}} 元</b>
        </div> 
    </div>
</template>
<script>
import imgAddress from '../../filter/imgAddress'
import dateTranslate from '../../filter/dateTranslate'

export default {
    data() {
        return {
            Item: ''
        }
    },    
    props:["dataItem"],
    methods:{
        toDetail(id) {
            this.$router.push(`/detail/`+ id)
        }
    },    
    mounted() {
        this.Item = this.dataItem
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
@import '~@/assets/styles/border.styl'
i 
    height .2rem
    line-height .2rem
    font-size .12rem
    font-weight 200
    padding 0 0.05rem
    color #fff
    display inline-block
    position absolute
    top .1rem
    left 0
    border-radius .1rem 0 .1rem 0
    background linear-gradient(to right, #ff7e6f, #ff2959)

.item-style
    width 100%
    height  1.29rem
    margin-bottom .15rem
    position relative
    display flex
    justify-content center
    align-items center
    border_1px(0  0 1px 0)
    // padding-right .10rem
    // padding-bottom .15rem   
    img 
        width .85rem
        height 1.13rem
        border-radius .1rem
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
