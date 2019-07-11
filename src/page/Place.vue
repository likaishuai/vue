<template>
    <div class="place-content">
        <div class="tip" :class="{'hidden': isHidden }" >【温馨提示】测试测试测试测试测试测试测，试测试测试测试测，
            试测试测试测试测试测，试测试测试，测试测试测试，测试测试测试测试测试，
            测试测试测试测试测试测试测试测试测试测试测试，测试测试测试测试测，试测试测，
            试测试测试测试测试测试测试测，试测试测试测试测试          
        </div>
        <div class="look-more"  @click="lookmore">{{hiddenText}}</div>
        <div class="place">
            <div><i></i><span>2019.07.01</span></div>
            <div><i></i><span>合肥国际会展中心主展馆</span></div>
            <i class="arrow"></i>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isHidden : true,
            hiddenText : "查看更多"
        }
    },

    methods:{
        lookmore() {
            this.isHidden = !this.isHidden
            if(this.isHidden) this.hiddenText = "查看更多"
            else this.hiddenText = "收起"
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
    border-radius .1rem
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
