<template>
    <div class="quest"  @click="goFAQ">
      <span>{{title}}</span>  <i class="arrow"></i>
    </div>
</template>

<script>
export default {
    props:["title","productId"],
    methods: {
        goFAQ() {
            this.$router.push(`/FAQ/${this.productId}`)
        }
    },
}
</script>


<style lang="stylus" scoped>
.quest
    width 3.25rem
    display flex
    align-items center
    padding .1rem
    margin-bottom .1rem
    border-radius .08rem
    background #ffffff
span
    flex 1
    color #333333
    font-size .16rem
    font-weight  600
    padding-left .1rem
i 
    display inline-block
    background-size .5rem
    background-image url(../assets/img/product-icon.png) 
    background-repeat no-repeat  
 .arrow
        width .12rem
        height .12rem
        margin-right .3rem
        background-position 0 -.75rem
</style>
