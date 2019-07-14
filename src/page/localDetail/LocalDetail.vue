<template>
    <div class="address-main">
        <Header :title="'场馆详情'"></Header>
        <LocalMap></LocalMap>
        <div class="introduction" >
            <h3>{{title}}</h3>
            <p>{{paragraph}}
                <span>地址：{{address}}</span>
            </p>            
        </div>
        <div class="type-nav">
            <ul>
                <li>
                    <span @click="linkTo(0)"
                        :class="{active:nowIndex==0}"
                    >
                    全部演出
                    </span>
                </li>
                <li>
                    <span @click="linkTo(1)"
                         :class="{active:nowIndex==1}"
                    >
                    即将开始
                    </span>
                </li>
                <li><span @click="linkTo(2)"
                     :class="{active:nowIndex==2}"
                     >
                     历史演出
                     </span>
                </li>
            </ul>      
        </div>
        <LocalList :dataList="listData" :isNull="notData"></LocalList>
        <Footer></Footer>
    </div>
</template>

<script>
import { Indicator, Toast } from 'mint-ui' 
import http from '../../utils/http'

import Header from '../../components/PageHeader'
import LocalMap from './LocalMap'
import LocalList from './LocalList'
import Footer from '../../components/Footer'
export default {
    data() {
        return {
            id:"",
            title:'',
            paragraph:'',
            address:'',
            nowIndex: 0,
            listData:[],
            notData: true
        }
    },
    components: {
        Header,
        LocalMap,
        LocalList,
        Footer
    },
    methods:{
        async linkTo(index){
            Indicator.open({
                text: 'Loading...',
                spinnerType: 'triple-bounce'
             })
            this.nowIndex = index
            let url = index== 0 ? `/api/server/venue/${this.id}.json` : index==1 ? `/api/server/venue/${this.id}/new.json`: `/api/server/venue/${this.id}/other.json`
            let result = await http.get(url)
            this.listData = result.products
            if(this.listData.length == 0) {this.notData = true}
            else {this.notData = false}
            Indicator.close()
        }
    },
    async created() {
        this.id = this.$route.params.id
        console.log("@@@"+this.id)
        Indicator.open({
            text: 'Loading...',
            spinnerType: 'triple-bounce'
        })
        let result = await http.get(`/api/server/venue/${this.id}.json`)
        this.title = result.venue.vname
        this.paragraph = result.venue.info
        this.address = result.venue.address
        this.listData = result.products
        if(this.listData.length == 0) {this.notData = true}
        else {this.notData = false}
        Indicator.close()
    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/border.styl"
.type-nav
    height .4rem
    background #fff
    border_1px(0 0 1px 0)
    ul 
        height 100%
        display flex
        justify-content space-around
        li 
            flex 1
            width 1.25rem
            display flex
            justify-content center
            align-items center
            span 
                
                height .2rem
                font-size .14rem
                font-weight 200
                line-height .2rem
                text-align center
            span.active
                border-bottom .05rem solid #f55688
                border-radius .02rem
.address-main
    height 100% 
    overflow-y scroll
    background #eee
    .introduction
        width 100%
        color #888
        background #ffffff
        border-radius .2rem .2rem 0 0
        h3 
            color #333
            padding .1rem 0
            text-align center
        p 
            padding 0 .2rem
            text-indent .3rem
            span 
                display block
                padding .1rem 0
</style>
