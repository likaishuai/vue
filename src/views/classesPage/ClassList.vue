<template>
    <div class="recommend-list">
        <play-item 
         v-for="item in itemList"
        :key="item.productid"
        :data-item="JSON.stringify(item)" 
        >
        </play-item >
    </div>
</template>
<script>
import ItemMoive from '../../components/ItemMoive'
import PlayItem from '../../components/PlayItem'

import http  from '../../utils/http'

export default {
    data(){
        return {
            itemList:[]
        }
    },
    
    components:{
        PlayItem
    },

    async mounted() {
        let url ="/api/server/category/default.json"
        let result = await http.get(url)
        this.itemList = result.pagerMemory.fistPage
        console.log(result)
    }
}
</script>
<style lang="stylus" scoped>
.recommend-list
    width 100%
    align-content center
    display flex
    flex-direction column
    padding .2rem
    justify-content center
    align-content center
    align-items  center
    flex-wrap wrap


</style>
