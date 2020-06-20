<template>
    <div id="task-app">
        <div class="container">
            <div>
                <h4><span></span>Distance <span>1h a day</span></h4>
                <p>Daily running training .Distance 10kmm</p>
            </div>
            <div>
                <h4><span></span>Water balance <span>1.8l a day</span></h4>
                <p>Maintain your optimal water balance as recommended by the trainer</p>
            </div>
        </div>  
    </div>
</template>


<script>
    export default {
        data() {
            return {

            }
        }
    }

</script>


<style scoped>
    #task-app {
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

    .container>div:first-of-type,
    .container>div:nth-child(2) {
        margin-top: 10px;
        color: #fff;
        background-color: #3938cd;
        padding: 10px;
        border-radius: 10px;
    }

    h4 {
        width: 90%;
        display: flex;
        position: relative;
        margin: 0px 5% 10px;
    }

    h4 span:first-of-type {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid #fff;
        border-radius: 50%;
        margin-right: 20px;
    }

    h4 span:last-of-type {
        position: absolute;
        opacity: .7;
        right: 6%;
    }
</style>
