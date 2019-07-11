<template>
    <section>
         <h2>巡演城市</h2>
         <p>
            <span class="tip" :class="{'hidden': isHidden }" >【温馨提示】测试测试测试测试测试测试测，试测试测试测试测，
            试测试测试测试测试测，试测试测试，测试测试测试，测试测试测试测试测试，
            测试测试测试测试测试测试测试测试测试测试测试，测试测试测试测试测，试测试测，
            试测试测试测试测试测试测试测，试测试测试测试测试          
            </span>
        <em class="look-more"  @click="lookmore">{{hiddenText}}</em>
       
         </p>
    </section>
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
tip-height = .66rem

section
    display block
    width 3.35rem
    text-align left
    padding .1rem .1rem 0
h2
    height .3rem
    font-size .22rem
    line-height .2rem
    padding .05rem   0 
p 
    display block
    padding-top .1rem 
    color #999
    font-size .14rem
.tip  
    overflow hidden
.hidden
    display block
    height .65rem     
    overflow hidden
.look-more
    display block
    margin-bottom .05rem        
    text-align center
    color rgba(255, 58, 86, 0.8)
   
</style>

