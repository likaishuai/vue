<template>
    <div class="list-view">
        <div class="recommend-list">        
            <play-item 
                v-for="item in itemList"
                :key="item.productid"
                :data-item="JSON.stringify(item)" 
            >
            </play-item >
            <button class="loadmore" 
                :disabled="disable"
                @click="loadMore" 
                v-if="isList"
            >
            {{title}}
            </button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import http  from '../../utils/http'
import BScroll from 'better-scroll'
import _ from 'lodash'
import { Indicator, Toast } from 'mint-ui' 

import ItemMoive from '../../components/ItemMoive'
import PlayItem from '../../components/PlayItem'

// Vue.use(Indicator)
export default {
    data(){
        return {
            title:"加载更多",
            disable:false,
            isList: false,
            page: 2,
            itemList:[],
            keyWords:''
        }
    },
    
    components:{
        PlayItem
    },

    methods:{
        //检索的数据
        async search(keywords ){  
            this.keyWords = keywords      
            Indicator.open({
                text:"loading",
                spinnerType: "triple-bounce"
            })
            let url = `/api/server/search/s/${keywords}.json`
            let result = await http.get(url)

            if(result.pagerMemory.fistPage.length){
                this.itemList = result.pagerMemory.fistPage
                this.isList = true
                this.$emit("getNoData",false) //调用父类方法改变图片显示
            }else {
                //将推荐的热词存入Vuex
                this.setHotword(result.hotCustoms)
                //调用默认数据填充
                this.defalutData()
                this.$emit("getNoData",true)
            }
            Indicator.close()            
        },
        //检索无结果的默认数据
        async defalutData() {
            //mimt.ui loading提示框
            Indicator.open({
                text: 'Loading',   
                spinnerType: 'triple-bounce'
            })

            let url ="/api/server/category/default.json"
            let result = await http.get(url)
            this.itemList = result.pagerMemory.fistPage
            this.isList = true
            Indicator.close()//提示框消失
        },
        //加载更多
        async loadMore(){
            if(false){                
               this.title = "没有更多了"
               this.disable = "true"
            } else{
                Indicator.open({
                    text:"loading",
                    spinnerType: "triple-bounce"
                })
    
                let result = await http.post({
                    url: "/api/server/search/moreSearch.json", 
                    //使用data包裹FormData
                    data:{
                        params:{
                            datestrEscape: "all",
                            datestr: "all",
                            type: 4,
                            tagstr: "all",
                            datestrSelected: "all",
                            typebjx: "all",
                            orderstype: "all",
                            filter: "all",
                            total: 2267,
                            typeajx: "all",
                            cityjx: "all",
                            keyword: this.keyWords,
                            pagenum: this.page
                        }  
                    }               
                }) 
                 if(result.pagerMemoryList.length > 0){
                    this.itemList = [...this.itemList,...result.pagerMemoryList]
               } else if(result.pagerMemoryOrList.length > 0){
                    this.itemList = [...this.itemList,...result.pagerMemoryOrList]
               } else {
                    this.title = "没有更多了"
                    this.disable= true
                 }
                this.page++
                Indicator.close(result)
            }
        },
        // vuex的store存储hotword
        setHotword(Hotwords){
            this.$store.dispatch("getSearchHot",Hotwords)
        }
    },

    created(){
        this.page = 2
    }

    
}
</script>
<style lang="stylus" scoped>
.recommend-list
    width 100%
    min-height 4.2rem
    align-content center
    display flex
    flex-direction column
    padding .2rem
    justify-content center
    align-content center
    align-items  center
    flex-wrap wrap
    .loadmore
        height .25rem
        width 1rem
        line-height .25rem
        color #ff7e6f
        text-align center
        border-radius .1rem
        border-width 0
        background #fff
        box-shadow 0 .02rem .06rem 0 rgba(255, 58, 86, 0.2)

</style>
