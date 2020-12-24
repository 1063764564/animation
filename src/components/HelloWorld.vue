<template>
    <div class="main">
        <div class="tusiji"></div>
        <div class="xingxing"></div>
        <div class="dishu"></div>
        <div class="girl"></div>
        <!-- <div @click="get">按钮</div>
        <span>{{$store.state.name}}</span>
        <div>
            <br> <br> <br> <br> <br> <br> <br> <br> <br>
            <i class="iconfont icon-biaoqing"></i>
            <i class="iconfont icon-feiji"></i>
            <svg
                class="iconfont"
                aria-hidden="true"
            >
                <use xlink:href="#icon-biaoqing"></use>
            </svg>
            <svg
                class="iconfont"
                aria-hidden="true"
            >
                <use xlink:href="#icon-feiji"></use>
            </svg>
            <svg
                class="iconfont"
                aria-hidden="true"
            >
                <use xlink:href="#icon-youxiji"></use>
            </svg>
        </div> -->
    </div>
</template>
<script>
import '@/assets/icon/iconfont.js'
import { mapMutations } from '../store/index.js'

export default {
    name: 'HelloWorld',
    data() {
        return {
        }
    },
    // computed: {
    //     name() {
    //         return this.$store.state.name
    //     },
    // },
    created() {
    },
    methods: {
        // ...mapMutations(['getname'])
        // get() {
        //     console.log('仓库1:', this.$store.state.name);
        //     this.$store.commit('getname', '汉秋')
        //     console.log('仓库2:', this.$store.state.name);
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes run {
    from {
        background-position: 0, 0;
    }
    to {
        background-position: -10320px, 0;
    }
}

@keyframes move {
    from {
        background-position: 0, 0;
    }
    to {
        background-position: -576px, 0;
    }
}
@keyframes ma {
    from {
        background-position: 0, 0;
    }
    to {
        background-position: -1022px, 0;
    }
}
@keyframes xingxing {
    from {
        background-position: 0, 0;
    }
    to {
        background-position: -800px, 0;
    }
}
@keyframes girl {
    from {
        background-position: 0, 0;
    }
    to {
        background-position: -2240px, 0;
    }
}

/* span {
    position: absolute;
    left: 0;
    top: 0;
}
i {
    font-size: 100px;
    font-weight: bold;
    margin-left: 200px;
} */

.main {
    height: 100%;
}
.dishu {
    width: 400px;
    height: 430px;
    position: relative;
    background: url("../../static/地鼠.png");
    background-position: 0 0;
    background-size: auto 100%;
    animation: run 1s steps(24, end) infinite normal;
}

.tusiji {
    position: relative;
    left: 50%;
    top: 50%;
    width: 48px;
    height: 48px;
    background-image: url("../../static/兔斯基.png");
    animation: move 1s steps(12, end) infinite;
}

.xingxing {
    position: relative;
    width: 30px;
    height: 27px;
    background-image: url("../../static/星星图.png");
    background-size: auto 100%;
    animation: xingxing 1.2s steps(30,end) infinite;
}
.girl {
    position: relative;
    width: 320px;
    height: 428px;
    background-image: url("../../static/女士.png");
    background-size: auto 100%;
    animation: girl 1s steps(7,end) infinite;
}
</style>
