<template>
    <div class="index">
        <main>
         <Router-view></Router-view>
        </main>
        <nav>
            <ul>
                <router-link to="/home" active-calss="active" tag="li">
                    <i></i>
                    <span>首页</span>
                </router-link>
                <router-link to="/classes" active-calss="active" tag="li">
                    <i></i>
                    <span>分类</span>
                </router-link>
                <router-link to="/search" active-calss="active" tag="li">
                    <i></i>
                    <span>搜索</span>
                </router-link>
                <router-link to="/prefile" active-calss="active" tag="li">
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
  
nav 
    height .5rem
    background yellow
    ul 
        display flex
        height 100%
        justify-content space-between
        li
            flex 1
            height 100%
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
            // li.active
            //     span 
            //         color #ff7e6f
            //     i 
            //         background-position 0 


</style>
