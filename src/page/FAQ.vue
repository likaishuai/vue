<template>
    <div class="main">
        <PageHeader :title="'FAQ'"></PageHeader>
        <FAQItem
            v-for="(item,index) in FAQList"
            v-bind="item"
            :data-index="index"
            :key="index"
        ></FAQItem>
        <Footer></Footer>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
import FAQItem from './FAQItem'
import Footer from '../components/Footer'
import Http from '../utils/http'
export default {
    data() {
        return {
            productId: '',
            FAQList:[]
        }
    },
  
    components:{
        PageHeader,
        FAQItem,
        Footer
    },

    async mounted() {
        this.productId = this.$route.params.id
        let result = await Http.get(`api/server/question/moreFaq/${this.productId}.json`)
        this.FAQList = result.faqList
    }
}
</script>
<style lang="stylus" scoped>
.main
    background #fff
    height 100%
    overflow-y  scroll
</style>
