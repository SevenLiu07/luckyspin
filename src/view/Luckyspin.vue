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
        </div>
    </div>
</template>
<script>
    export default {
    data () {
        return {
        }
    },
    mounted () {
        this.getRewards();
    },
    methods: {
        getRewards () {
            this.$http.get("../../static/lukyspin.json").then(response => {
                console.log(response.data)
            });
        }
    }
}
</script>

<style scoped>
@import '../../static/css/style.css';
</style>
