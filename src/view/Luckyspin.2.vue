<template>
    <div>
        <img src="../../static/images/1.png" id="shan-img" style="display:none;">
        <img src="../../static/images/2.png" id="sorry-img" style="display:none;">
        <div class="banner">
            <div class="turnplate" style="background-image:url(../../static/images/turnplate-bg.png);background-size:100% 100%;">
                <canvas class="item" id="wheelcanvas" width="422px" height="422px"></canvas>
                <img class="pointer" src="../../static/images/turnplate-pointer.png">
            </div>
        </div>
        <div>
        {{rewardList}}
        </div>
    </div>
</template>
<script>
import api from '../utils/api.js'
export default {
    data () {
        return {
            rewardList: ''
        }
    },
    mounted () {
        this.getRewards();
    },
    methods: {
        getRewards () {
            api.getRewardList({
                version : Math.random()
            }).then(res => {
                if(res){
                    if(res.data.state === 1){
                        console.log(res.data)
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
@import '../../static/css/style.css';
</style>
