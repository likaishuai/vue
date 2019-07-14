<template>
    <div class="choose-item">
        <b class="img" :style="positionString"></b>
        <div class="text">{{textContent}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            positionString:'',
            textContent:""
        }
    },
    props:["position","text"],

    mounted() {
        setTimeout(() => {
            this.positionString = `background-position:   ${this.position} `
            this.textContent = this.text
        }, 200);
    }
}
</script>
<style lang="stylus" scoped>
.choose-item
    display flex
    flex-direction column
    align-items center
.img
    display block
    width .23rem
    height .24rem
    background-size  .25rem
    background-image url(../../assets/img/img-icon.png)
    background-repeat no-repeat
.text
    font-size .14rem
    color #333
</style>
