<template>
    <div>
        <PageHeader :title="title"></PageHeader>

        <div class="search-input-content">
            <input 
                class="search-input" 
                type="text" 
                v-model='keyWords' 
                @keypress.enter="searchKeyword"
            >
            <i></i>
            <span>取消</span>
        </div>

        <TypeNav></TypeNav>

        <NotFound v-if="NoData"></NotFound>

        <SearcherList 
            ref="searchList"
             @getNoData="setNoData"    
        ></SearcherList>

        <OtherItem
            v-if="NoData"
        ></OtherItem>

        <Footer></Footer>
    </div>
</template>
<script>
import PageHeader from '../../components/PageHeader'
import TypeNav from '../../components/TypeNav'
import NotFound from './NotFound'
import SearcherList from './SearchList'
import OtherItem from "../../components/OtherItem"
import Footer from '../../components/Footer'


export default {
    data(){
        return {
            NoData: false,
            title: "搜索",
            keyWords: ''
        }
    },
    components:{
        PageHeader,
        TypeNav,
        NotFound,
        SearcherList,
        OtherItem,
        Footer
    },
    methods:{
        searchKeyword(){
            this.$refs.searchList.search(this.keyWords)
        },
        //子组件的方法调用改变图片显示状态
        setNoData(flag){
            this.NoData=flag
        }
    },
    updata(){
        console.log(this.keyWords)
    }
}
</script>
<style lang="stylus" scoped>
.search-input-content
    height .44rem
    padding .1rem .2rem 0 .2rem    
    display flex
    justify-content  center
    .search-input 
        flex 1
        height .34rem
        padding 0 .3rem
        caret-color #ff3a56
        background-color #f3f4f5
        border-radius .17rem
        border none 
    span 
        width .39rem
        height .34rem
        line-height .34rem
        text-align center
</style>
