<template>
    <div class="prefile-main">
        <div class="top">
            <div class="bg-up">
                <div class="prefile-header">
                        <i class="back" @click="goBack"></i>
                </div>
            </div>
            <div class="bg-down">
                <img src="../../assets/img/user.png" alt="">
                <div class="username">231****4214</div>
            </div>
            <div class="prefile-wallet">
                <div><span>0张</span><span>现金券</span></div>
                <div><span>未启用</span><span>电子钱包</span></div>
                <div><span>0</span><span>积分</span></div>
            </div>
        </div>
        <div class="prefile-miaddle">
            <ul>
                <li v-for="item in orderItemList"                   
                    :key="item.text"
                >
                    <ChooseItem  v-bind="item"></ChooseItem>
                </li>
            </ul>
        </div>
        <div class="options">
           <ul>
                <li v-for="citem in optionItemList"                   
                    :key="citem.text"
                >
                    <ChooseItem  v-bind="citem"></ChooseItem>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import ChooseItem from '../prefile/ChooseItem'

export default {    
    data() {
        return {
            orderItemList:[],
            optionItemList:[]
        }
    },
    methods:{
        goBack() {
            this.$router.back()
        }
    },    
    created() {
        this.orderItemList = [
            {
                position: "0  -0.58rem",
                text: "我的订单"
            },
            {
                position: "0  -4.34rem",
                text: "现金券"
            }
        ],
        this.optionItemList = [
            {
                position:"0  -5.39rem",
                text: "收货地址"
            },
            {
                position:"2px -2.96rem",
                text: "我的收藏"
            },
            {
                position:"4px -2.62rem",
                text: "我的登记"
            },
            {
                position:"2px -3.3rem",
                text: "我的提问"
            },
            {
                position:"0 -1.96rem",
                text: "观影凭证"
            }
        ]
    },
    components: {
        ChooseItem
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
.prefile-main
    position relative
    .top 
        height 3rem
.bg-up
    width 100%
    height 2.23rem
    padding 0 .1rem
    background-size 120%
    background-image url('../../assets/img/bg-up.jpg')
    background-repeat no-repeat
    .prefile-header
        height .6rem
        padding-top .3rem
        i 
            color #fff
            margin 0 .1rem
            width: .3rem;
            height: .31rem;
            background-position: 0 -34.54rem
            display: inline-block;
            background-size: 1.5rem;
            background-image url(../../assets/img/icon.png)
            background-repeat no-repeat  
.bg-down 
    width 100%
    height 1.05rem
    z-index 99
    position absolute
    top 1.36rem
    display flex
    flex-direction column
    justify-content center
    align-items center
    background-size 100%
    background-image url(../../assets/img/bg-down.png) 
    background-repeat no-repeat
    img 
        width .64rem
        height .64rem
        border-radius 50%
    .username
        text-align center  
.prefile-wallet
    height .7rem
    padding .2rem .2rem .1rem
    display flex
    justify-content space-around
    align-items center
    border_1px( 0  0 1px 0)
    div
        display flex
        flex-direction column
        align-items center
.prefile-miaddle
    height .8rem
    padding .2rem .2rem
    border_1px( 0  0 1px 0)
    ul 
        display flex
        justify-content space-around
.options
    height 1.8rem
    padding .2rem .2rem
    ul 
        display flex
        flex-wrap wrap
        justify-content start
        li 
            width 1.11rem
            height .9rem
            padding .1rem  0 

        
</style>
