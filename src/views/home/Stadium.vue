<template>
    <div class="stadium-list">
        <sta-item 
            v-for="sta in staList"
            :key="sta.LINKID"
            :data-sta="JSON.stringify(sta)" 
        >
        </sta-item>
    </div>
</template>
<script>
import http from '../../utils/http'

import StaItem from '../../components/StaItem'

export default {
    data() {
        return {
            staList:[]
        }
    },

   async mounted(){
        let url = "api/server/content/moreProductPlay.json?fcity=-1&pageNum=1&type=1"
        let result = await http.get(url)
        this.staList = result.venuePage.list

    },

    components: {
        StaItem
    }

}
</script>
<style lang="stylus" scoped>
.stadium-list
    width 100%
    align-content center
    display flex
    justify-content space-around
    align-content center
    align-items  center
    flex-wrap wrap


</style>
