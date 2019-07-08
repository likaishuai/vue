<template>
    <div>
        <div class="more-button" >
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {       
    props:["title"]
}
</script>

<style lang="stylus" scoped>
.more-button
    height .2rem
    // width 1rem
    line-height .1rem
    padding 0 .2rem
    margin .1rem .1rem
    color #ff7e6f
    background #fff
    box-shadow 0 .02rem .06rem 0 rgba(255, 58, 86, 0.2)
    border-radius .1rem
    text-align center
</style>
