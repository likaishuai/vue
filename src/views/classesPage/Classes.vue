<template>
    <div>
        <PageHeader :title="title"></PageHeader>
        <TypeNav></TypeNav>
        <ClassList></ClassList>
        <Footer></Footer>
    </div>
</template>

<script>
import PageHeader from '../../components/PageHeader'
import TypeNav from '../../components/TypeNav'
import Footer from '../../components/Footer'
import ClassList from './ClassList'

export default {
    data() {
        return {
            title:"分类"
        }
    },

    components:{
        PageHeader,
        TypeNav,
        ClassList,
        Footer
    },


}
</script>

<style lang="stylus" scoped>

</style>
