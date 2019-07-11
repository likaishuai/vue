<template>
    <section>
        <h2>巡演城市</h2>
        <p>
            <span class="city" 
                :class="{active:(nowIndex==1)}"
                @click="changeIndex(1)"
            ><em>合肥</em> <em>07.13</em>
            </span>
            <span class="city"
                 :class="{active:(nowIndex==2)}"
                  @click="changeIndex(2)"
            ><em>合肥</em> <em>07.13</em></span>
        </p>
    </section>
</template>
<script>
export default {
    data() {
        return {
            nowIndex : 1
        }
    },

    methods: {
        changeIndex(_index) {
            this.nowIndex = _index
            console.log("_index"+_index+"this.index"+this.nowIndex)
        }
    }
}
</script>


<style lang="stylus" scoped>
section
    display block
    width 3.35rem
    text-align left
    margin .1rem
h2
    height .3rem
    font-size .22rem
    padding .05rem
    
p 
    display block
    height .76rem
    padding .1rem
    display flex
    flex-wrap wrap
    justify-content flex-start
    align-items center
    align-content center
    .city
        display block
        width .56rem
        height .56rem
        color #ff5886
        font-size .14rem
        font-weight 400
        margin-right .1rem
        background #fff
        display flex
        flex-direction column
        justify-content center
        align-items center
        border-radius .22rem

    .active
        color #fff
        background #ff5886
        font-size .14rem
</style>
