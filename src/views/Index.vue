<template>
    <div class="index">
        <main>
            <router-view></router-view>
        </main>
        <nav>
            <ul>
                <router-link to="/home" active-class="liactive" tag="li">
                    <i></i>
                    <span>首页</span>
                </router-link>
                <router-link to="/classes" active-class="liactive" tag="li">
                    <i></i>
                    <span>分类</span>
                </router-link>
                <router-link to="/search" active-class="liactive" tag="li">
                    <i></i>
                    <span>搜索</span>
                </router-link>
                <router-link to="/prefile" active-class="liactive" tag="li">
                    <i></i>
                    <span>我的</span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
import Home from './home/Home'
export default {
    components:{
        Home
    }
}
</script>

<style lang="stylus" scoped>    
@import '~@/assets/styles/border.styl'
add(a, b)
    a+b

.index
    height 100%   
    width 100%
    display flex
    flex-direction column    
main
    flex 1
    background #fff    
    overflow scroll
  
.liactive
    background  -webkit-linear-gradient(top,#fff,#ffaaee)
nav 
    height .5rem
    border_1px(1px 0 0 0 )
    ul 
        display flex
        height 100%
        justify-content space-between
        li
            flex 1
            height 100%
            padding .05rem 0 0 
            display flex             
            flex-direction column
            justify-content center
            align-items center
           span 
                flex 1
            i 
                background-image url("~@/assets/img/icon.png")
                background-repeat no-repeat
                background-size .75rem
                display block 
                height .25rem
                width .25rem
            li:nth-child(1)
                i
                    background-position: 0 -4.82rem
            li:nth-child(2)
                i
                    background-position: 0 -4.13rem
            li:nth-child(3)
                i
                    background-position: 0 -5.53rem
            li:nth-child(4)
                i
                    background-position: 0 -6.21rem


</style>
