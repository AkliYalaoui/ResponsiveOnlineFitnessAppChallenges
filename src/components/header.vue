<template>
    <header>
        <h1>{{title}}</h1>
    </header>


</template>


<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {


            }
        }
    }

</script>

<style scoped>
    header {
        background-color: #4f4ee9;
        width: 100%;
        min-width: 300px;
    }

    h1 {
        color: #fff;
        text-align: center;
        padding: 30px 0 10px;
    }

</style>
