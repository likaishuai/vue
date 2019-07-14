<template>
    <div class="item">
        <span class="order">{{index}}</span>
        <div class="text-content">
            <div class="FAQ-item question">
                <span>Q</span>
                {{SQUESTION}}
            </div>
            <div class="FAQ-item answer">
                <span>A</span>
                {{SANSWER}}
             </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           index: 0 
        }
    },

    props:["SQUESTION","SANSWER","dataIndex"],

    mounted() { 
        this.index = this.dataIndex
        this.index++
        if(this.dataIndex < 9){
            this.index = "0" +  this.index
        }
    }
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'

.item 
    position relative
    
.order
    width .29rem
    height .29rem
    font-size .25rem
    color #ccc
    position absolute 
    left  .05rem
    top .1rem
.text-content
    padding .25rem 0 .1rem .4rem
    margin 0 .15rem 0 .15rem
    border_1px(0 0 1px 0)
.FAQ-item
    width 3.05rem
    position relative
    padding .1rem
    margin .1rem 0 .2rem
    font-size .14rem
    line-height .16rem
    border-radius .1rem
    background linear-gradient(135deg,rgba(255,126,111,.1),rgba(255,41,89,.1))
    span 
        width .24rem
        height .24rem
        display block
        font-size .20rem
        line-height .24rem
        text-align center
        border-radius .12rem
        position absolute
        top -0.12rem
        left -0.12rem 
.question
    color #ff5169
    background linear-gradient(135deg,rgba(255,126,111,.1),rgba(255,41,89,.1))
    span 
        background linear-gradient(135deg,rgba(255,126,111,.1),rgba(255,41,89,.1))
.answer
    color #7b8187
    background linear-gradient(52deg,rgba(141,160,169,.1),rgba(213,221,255,.1))
    span 
        background linear-gradient(52deg,rgba(141,160,169,.1),rgba(213,221,255,.1))

</style>
