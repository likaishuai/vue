<template>
    <div class="page-header">
        <i @click="goBack"></i>
        <span>{{title}}</span>
        <b></b>
    </div>
</template>
<script>
export default {   
    props:['title'],

    methods:{
        goBack() {
            this.$router.go(-1)
        }
    }

}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'

.page-header
    width 100%
    height .4rem
    padding .1rem .2rem 0
    background #fff
    display flex
    justify-content space-around
    align-items center
    i
        border-left .03rem solid #ff3a56
        border-bottom .03rem solid #ff3a56
        width .1rem
        height .1rem
        transform  rotate(45deg)
        transform-origin center center
    span 
        flex 1
        font-size .17rem
        font-weight 500
        color #333333
        line-height .4rem
        text-align center

</style>
