<template>
    <div class="recommend-list">
        <Item-moive 
         v-for="item in itemList"
        :key="item.PRODUCTID"
        :data-item="JSON.stringify(item)" 
        >
        </Item-moive>
    </div>
</template>
<script>
import ItemMoive from '../../components/ItemMoive'

import http  from '../../utils/http'
import BScroll from 'better-scroll'
import _ from 'lodash'
import { Indicator, Toast } from 'mint-ui' 

export default {
    data(){
        return {
            itemList:[]
        }
    },
    
    components:{
        ItemMoive
    },

    async mounted() {
        Indicator.open({
            text: 'Loading',
            spinnerType: 'triple-bounce'
        })
        let url ="/api/server/content/index.json"
        let result = await http.get(url)
        this.itemList = result.recommendPage.list
        Indicator.close()
    }
}
</script>
<style lang="stylus" scoped>
.recommend-list
    width 100%
    align-content center
    display flex
    padding-left .2rem
    justify-content flex-start
    align-content center
    align-items  center
    flex-wrap wrap


</style>
