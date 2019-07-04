<template>
    <div>
        <PageHeader :title="title"></PageHeader>
        <SearchInput></SearchInput>
        <TypeNav></TypeNav>
        <NotFound v-if="NoData"></NotFound>
        <SearcherList></SearcherList>
        <Footer></Footer>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
import SearchInput from './search/searchInput'
import TypeNav from '../components/TypeNav'
import NotFound from './search/NotFound'
import SearcherList from './search/searchList'
import Footer from '../components/Footer'


export default {
    data(){
        return {
            NoData: true,
            title: "搜索"
        }
    },
    components:{
        PageHeader,
        SearchInput,
        TypeNav,
        NotFound,
        SearcherList,
        Footer
    }
}
</script>
