<template>
    <div id="video-app">
        <div class="container-h3">
            <h3>Marathon Unning Prep</h3>
            <div class="Stat">
                <span class="material-icons">
                    show_chart
                </span>
            </div>
        </div>
        <div class="container">
            <video src="" ref="videoSrc"></video>
            <div v-if="!IsvideoPlaying" class="overlay">
                <div>
                    <span v-on:click="playVideo" class="material-icons" title="Play video">
                        play_arrow
                    </span>
                </div>
                <div>
                    <h4><span></span>Training <span>1h a day</span></h4>
                    <p>Daily workouts to help your body become more resilient during a marathon</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                IsvideoPlaying: false
            }
        },
        mounted: function() {
            this.$refs.videoSrc.src = 'http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4';
        },
        methods: {
            playVideo: function() {
                this.$refs.videoSrc.play();
                this.IsvideoPlaying = true;
                this.$refs.videoSrc.controls = true;
            }
        }
    }

</script>




<style scoped>
    #video-app {
        width: 100%;
        background-color: #4f4ee9;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
    }

    .container {
        min-width: 300px;
        max-width: 600px;
        position: relative;
    }

    .container-h3 {
        min-width: 300px;
        max-width: 600px;
        margin-bottom: 30px;
        position: relative;
        display: flex;
        justify-content: space-around;
    }

    .container-h3 h3 {
        color: white;
        text-align: left;
    }

    .Stat {
        width: 30px;
        height: 30px;
        background-color: #fee5e1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        color: #f18776;
    }

    video {
        width: 100%;
        max-width: 600px;
        height: 200px;
    }

    .overlay {
        position: absolute;
        border-radius: 10px;
        top: 0;
        left: 0px;
        color: #fff;
        width: 100%;
        max-width: 600px;
        height: 200px;
        background-color: rgba(255, 255, 255, .2);
        border-radius: 10px;
        box-shadow: 3px 3px 5px rgba(255, 255, 255, .2), -3px -3px 5px rgba(255, 255, 255, .2);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .overlay>div:first-of-type {
        position: absolute;
        top: 50px;
        left: 13%;
        background-color: #252767;
        max-width: 30px;
        max-height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 20%;
    }

    .overlay>div:last-of-type {
        margin-top: 100px;
        margin-left: 20px;
    }

    .overlay h4 {
        width: 90%;
        display: flex;
        position: relative;
        margin: 0px 5% 10px;
    }

    .overlay h4 span:first-of-type {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid #fff;
        border-radius: 50%;
        margin-right: 20px;
    }

    .overlay h4 span:last-of-type {
        position: absolute;
        opacity: .7;
        right: 6%;
    }

</style>
