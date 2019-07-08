<template>
    <div class="content-main">
        <div class="img"></div>
        <div class="text-content">
            <p>未找到相关信息！为您推荐以下关联商品</p>
            <p>您也可以换个关键词试试</p>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.content-main
    width 100% 
    height 2.57rem
    padding .2rem 0
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    div.img
        width 1.28rem
        height 1.07rem
        padding .1rem 0 
        background-image url("~@/assets/img/emptyIcon.png")
        background-size 1.5rem
        background-repeat no-repeat
        background-position 0 -4.9rem
    div.text-content 
        p 
            color #999
            text-align center
        p:nth-child(1)
            font-size .16rem
            font-weight 600
        p:nth-child(2)
            font-weight 400

</style>
