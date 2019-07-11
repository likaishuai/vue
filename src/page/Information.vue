<template>
    <div class="detail-main">      
        <div class="background">
            <div class="indistinct"></div>
        </div>
        <div class="detail-header">
            <i class="back"></i>
            <div class="right">                
                <i class="colltion"></i>
                <i class="share"></i>
            </div>
        </div>
        <div class="content">
            <div class="img">
                <img :src="information.image | imgAddress" alt />
            </div>
            <div class="text-content">
                <div class="text-header">{{information.name}}

                </div>
                <div class="idcard"><i></i>实名认证 </div>
                <div class="price">
                    ￥{{ information.price[0] }} - ￥{{ information.price[1] }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import imgAddress from '../filter/imgAddress'
export default {
    data() {
        return {
           information:[]
        }
    },
    props:["dataDetail"],

    mounted() {
        this.information = JSON.parse( this.dataDetail )
        console.log(this.information.name)
    }
}
</script>


<style lang="stylus" scoped>
i 
    background-image url(../assets/img/product-icon.png)
    background-repeat no-repeat  
.detail-main     
    height 2.5rem
    position: relative;
    background: #EEE;

    .background 
        width: 100%;
        height: 1.9rem;
        background: url('../../public/test.jpg');
        border-bottom-left-radius: 1.8rem 0.2rem;
        border-bottom-right-radius: 1.8rem 0.2rem; 

    .indistinct 
        width: 100%;
        height:1.9rem;
        border-bottom-left-radius: 1.8rem 0.2rem;
        border-bottom-right-radius: 1.8rem 0.2rem;
        background: rgba(33, 33, 33, 0.8);

    .detail-header
        width 3.45rem
        height .31rem
        position absolute
        top .29rem
        left .15rem
        display flex
    i 
        color #fff
        margin 0 .1rem
        width: .3rem;
        height: .31rem;
        display: inline-block;
        background-size: 1.5rem;
    .back
        background-position: 0 -34.54rem
    .share
        background-position: 0 -35.34rem
    .colltion        
        background-position: 0 -36.955rem

    .right
        flex 1
        text-align right

.content
    width 3.35rem
    height 1.6rem
    position absolute 
    top .8rem
    left .2rem
    display flex
    justify-content center

    .img 
        background #777777
        width 1.2rem
        height 1.6rem
        border-radius .1rem
        img 
            width 1.2rem
            display block
            height 1.6rem
            border-radius .1rem
    .text-content
        color #fff
        padding-left .2rem
        display flex
        flex-direction column
        justify-content space-around
        .text-header
            width 2rem
            font-size .2rem
            height .63rem
        .idcard
            height .17rem
            font-size .12rem
            line-height .17rem
            font-weight 100
            i
                width .15rem
                height .17rem
                display inline-block
                background-size 1.5rem 
                background-position: 0 -40.55rem
        .price
            color #333333
            font-size .14rem
            font-weight 700
</style>
