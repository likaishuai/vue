<template>
    <div class="place-content">
        <div class="tip" 
            v-if="hasTip"
            :class="{'hidden': isHidden }" 
            v-html="tip"
        >        
        </div>
        <div class="look-more"  
            v-if="hasTip"
            @click="lookmore"
        >
            {{ hiddenText }}
        </div>
        <div class="place" @click="linkToDetail(id)">
            <div>
                <i></i>
                <span>{{ time | dateTranslate }}</span>
            </div>
            <div>
                <i></i>
                <span>{{ address }}</span>
            </div>
            <i class="arrow"></i>
        </div>
    </div>
</template>
<script>
import dateTranslate from '../filter/dateTranslate'
export default {
    data() {
        return {
            hasTip: true,
            isHidden : true,
            hiddenText : "查看更多"
        }
    },

    props:{
        id: Number,
        tip: String,
        time: String,
        address: String
    },

    methods:{
        lookmore() {
            this.isHidden = !this.isHidden
            if(this.isHidden) this.hiddenText = "查看更多"
            else this.hiddenText = "收起"
        },
        linkToDetail( id ) {
           this.$router.push(`/localdetail/${id}`)
        }
    },

    watch: {
        tip: function() {
            if(this.tip==null){
                this.hasTip = false
            }else{
                this.hasTip = true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
@import '~@/assets/styles/border.styl'
tip-height = .66rem

i 
    display inline-block
    background-size .5rem
    background-image url(../assets/img/product-icon.png) 
    background-repeat no-repeat  
.place-content
    width 3.35rem
    color #999999
    font-size .14rem
    background #ffffff
    border-radius .15rem
    margin-top .1rem
    padding .1rem .1rem 0 .1rem 
    .tip
        // ellipsis(100%)    
        overflow hidden
    .hidden
        height tip-height      
        overflow hidden
    .look-more
        display block
        margin-bottom .05rem        
        text-align center
        color rgba(255, 58, 86, 0.8)
    .place
        position relative
        i 
            width .16rem
            height .12rem            
        span 
            width .17rem
            height 2.73rem
            padding .1rem
            font-size .15rem
    .arrow
        width .12rem
        height .12rem
        position absolute 
        bottom .2rem
        right .3rem
        background-position 0 -.75rem
</style>
