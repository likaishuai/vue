<template>
    <div>
        <PageHeader></PageHeader>
        <TypeNav></TypeNav>
        <ClassList></ClassList>
        <Footer></Footer>
    </div>
</template>

<script>
import PageHeader from '../views/classesPage/PageHeader'
import TypeNav from '../components/TypeNav'
import ClassList from '../views/classesPage/ClassList'
import Footer from '../components/Footer'

export default {
    data() {
        return {

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
