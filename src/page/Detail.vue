<template>
    <div>
        <div class="detail-main">
            <div class="backgeound">
                <div class="indistinct"></div>
            </div>
            <div class="detail-header">
                <span>返回</span>
                <span>收藏</span>
                <span>分享</span>
            </div>
            <div class="content">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="text-header">演唱会上海站</div>
                <div class="price">￥143-￥345</div>
            </div>
        </div>
         <div class="bottom-nav">
             <span>客服</span>
             <div>立即购买</div>
         </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.detail-main
    position relative
    background #999
    .backgeound
        width 100%
        height 2.5rem
        background #434423
        border-bottom-left-radius 1.8rem 0.2rem 
        border-bottom-right-radius  1.8rem 0.2rem

</style>




<script>



console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})

process.nextTick(function() {
    console.log('6');
})

new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})


setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
    
})

</script>

