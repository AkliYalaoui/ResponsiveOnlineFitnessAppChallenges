<template>
    <div>
        <app-header v-bind:title="title"></app-header>
        <app-video ></app-video>
        <app-task></app-task>
        <app-footer></app-footer>
    </div>

</template>

<script>
    import Header from './components/header.vue'
    import Video from './components/video.vue'
     import Task from './components/task.vue'
     import Footer from './components/footer.vue'
    export default {
        components: {
            'app-header': Header,
            'app-video': Video,
            'app-task' : Task,
            'app-footer' : Footer
        },
        data() {
            return {
                title: "TODAY'S TASK "
            }
        }
    }

</script>

<style>
    *,
    *::after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #fee5e1;
    }

</style>
