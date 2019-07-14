<template>
    <div class="item-style" v-on:click="handleClick">
       <img :src="Item.IMG|imgAddress" alt=""/>
       <i></i>
       <b>{{Item.VNAME}}</b>
       <span>{{Item.ADDRESS}}</span>
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
    
    props:["dataSta"],
    methods:{

        handleClick(){
            this.$router.push(`/localdetail/${this.Item.VENUESID}`)
        },
    },

    mounted() {
        this.Item = JSON.parse(this.dataSta)
        
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
@import '~@/assets/styles/border.styl'
.item-style
    width 1.6rem
    height  1.8rem
    // padding-right .10rem
    // padding-bottom .15rem
    img 
        width 1.6rem
        height 1.40rem
        border-radius .1rem
    b
        // wrap()
        color #333
        display block
        overflow hidden
        width 1rem
        height .17rem
        line-height .17rem
        font-size .14rem
        font-weight 700
    span
        ellipsis(1.6rem) 
        color #999
        display block
        font-size .14rem
        width 1.6rem
      
</style>
