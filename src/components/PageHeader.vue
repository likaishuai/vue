<template>
    <div class="page-header">
        <i></i>
        <span>{{title}}</span>
        <i></i>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title1:''
        }
    },
    props:['title']
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'

.page-header
    border_1px(1px )
    width 100%
    height .4rem
    display flex
    justify-content space-around
    i
        width .4rem
        height 100%
    span 
        flex 1
        font-size .16rem
        color #333333
        line-height .4rem
        text-align center

</style>
