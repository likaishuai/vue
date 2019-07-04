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
    border_1px(1px)
    ul 
        height 100%
        display flex
        justify-content space-around
        li 
            flex 1
            width 1.25rem
            display flex
            justify-content flex-start
            align-items center
            span 
                flex 1
                font-size .16rem
                height .45rem
                line-height .45rem
                text-align center
            b 
                height .15rem
                width .15rem
                background #ff3a56
    
</style>
