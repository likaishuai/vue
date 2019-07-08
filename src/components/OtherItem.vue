<template>
    <div>
        <h2>其他人还关注</h2>
        <div class="otherItem">
            <MoreButton
                v-for="hotword in Hotwords"
                :key= "hotword.hotUrl"
            >
            {{hotword.hotWord}}
            </MoreButton>         
        </div>
    </div>
</template>

<script>
import MoreButton from "../components/MoreButton"
export default {
    data() {
      return {

      }  
    },

    components:{
        MoreButton
    },

    computed:{
        Hotwords() {
            return this.$store.getters.getHotWords
        }
    },



}
</script>

<style lang="stylus" scoped>
h2 
    font-size .22rem
    padding-left .2rem
    color black
.otherItem
    display flex
    justify-content flex-start
    align-content center
    flex-wrap wrap 

</style>

