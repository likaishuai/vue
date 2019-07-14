<template>
    <div class="list-view">
        <div class="recommend-list">  
             <local-item 
                v-for="item in dataList"
                :key="item.PRODUCTID"
                :data-item="item" 
            >
            </local-item>
           <div v-if="isNull" class="no-play">暂无演出！</div>
        </div>
    </div>
</template>
<script>
import  LocalItem from "./LocalItem"

export default {

    props:{
        dataList: Array,
        isNull: Boolean
    },
    data() {
        return {
           
        }
    },
    components:{
        LocalItem      
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
    justify-content flex-start
    align-content center
    align-items  center
    flex-wrap wrap
.no-play
    font-size .2rem
    color #888
</style>