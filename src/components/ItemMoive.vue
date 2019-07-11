<template>
    <div class="item-style"
        @click="toDetail(Item.PRODUCTID)"
    >
       <img :src="Item.PBIGIMG|imgAddress" alt=""/>
       <i></i>
       <b>{{Item.NAME}}</b>
       <span>{{Item.BEGINDATE|dateTranslate}}</span>
       <span><b class="money">￥{{Item.MINPRICE}}</b> 起</span>
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

    methods:{
        toDetail(id) {
            console.log(0)
            this.$router.push(`/detail/`+ id)
        }
    },

    mounted() {
        this.Item = JSON.parse(this.dataItem)
        
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
@import '~@/assets/styles/border.styl'
.item-style
    width 1.15rem
    height  2.23rem
    // padding-right .10rem
    // padding-bottom .15rem
    img 
        width 1.05rem
        height 1.40rem
        border-radius .05rem
    b
        // wrap()
        // ellipsis(1rem) 
        display block
        overflow hidden
        width 1rem
        height .34rem
        line-height .17rem
        font-size .12rem
        font-weight 700
    span
        color #999
        display block
        font-size .12rem
        b.money
            display inline
            color #ff3a56
            font-weight 700
</style>
