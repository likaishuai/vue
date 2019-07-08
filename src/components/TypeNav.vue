<template>
    <div class="type-nav">
        <ul>
            <li><span>全国</span><b></b></li>
            <li> <span>全部分类</span><b></b></li>
            <li><span>全部时间</span><b></b></li>
        </ul>      
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/border.styl"
.type-nav
    height .4rem
    border_1px(0 0 1px 0)
    ul 
        height 100%
        display flex
        justify-content space-around
        li 
            flex 1
            width 1.25rem
            display flex
            justify-content center
            align-items center
            span 
                // flex 1
                height .45rem
                font-size .14rem
                font-weight 200
                line-height .45rem
                padding-right .1rem
                text-align center
            b 
                height 0
                width 0
                border-top .05rem #ff3a56 solid 
                border-left .05rem rgba(0,0,0,0) solid 
                border-right .05rem rgba(0,0,0,0) solid 
                border-bottom .05rem rgba(0,0,0,0) solid 
</style>
