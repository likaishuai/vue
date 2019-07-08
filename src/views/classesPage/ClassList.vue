<template>
    <div class="list-view">
        <div class="recommend-list">        
            <play-item 
                v-for="item in itemList"
                :key="item.productid"
                :data-item="JSON.stringify(item)" 
            >
            </play-item >
            <MoreButton class="loadmore" v-if="isList" @click.native="loadMore">查看更多</MoreButton>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import http  from '../../utils/http'
import _ from 'lodash'
import { Indicator, Toast } from 'mint-ui' 

import MoreButton from '../../components/MoreButton'
import PlayItem from '../../components/PlayItem'

// Vue.use(Indicator)
export default {
    data(){
        return {
            isList: false,
            page: 2,
            itemList:[]
        }
    },
    
    components:{
        PlayItem,
        MoreButton
    },

    methods:{
        async loadMore(){
            if(this.page>8){
                Toast({
                    message: '没有更多了~',
                    position: 'bottom',
                    duration: 3000
                })
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
                            type: 1,
                            tagstr: "all",
                            datestrSelected: "all",
                            typebjx: "all",
                            orderstype: "all",
                            filter: "all",
                            total: 2267,
                            typeajx: "all",
                            cityjx: "all",
                            keyword: '',
                            pagenum: this.page
                        }               
                    }               
                })
                 if(result.pagerMemoryList){
                     this.itemList = this.itemList.concat(result.pagerMemoryList)
                 } 
                this.page++
                Indicator.close()
            }
        }
            
    },

    created(){
        this.page = 2
    },

    async mounted() {
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
    }
}
</script>
<style lang="stylus" scoped>
.recommend-list
    width 100%
    min-height 4.5rem
    align-content center
    display flex
    flex-direction column
    padding .2rem
    justify-content center
    align-content center
    align-items  center
    flex-wrap wrap
  

</style>
