<template>
    <div>
        <div class="container">
            <div>
                <div class="task-done">
                    <span class="material-icons">
                        chat_bubble
                    </span>
                </div>
            </div>
        </div>

        <footer>
            <ul>
                <li>
                    <a href="">
                        <span class="material-icons">
                            home
                        </span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="material-icons">
                            chat_bubble
                        </span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="material-icons">
                            account_circle
                        </span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="material-icons">
                            search
                        </span>
                    </a>
                </li>
            </ul>
        </footer>
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
    .container {
        width: 100%;
        min-width: 300px;
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #4f4ee9;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    .container>div {
        padding: 10px 10px 15px;
        width: 100%;
        min-width: 300px;
        max-width: 600px;
        height: 65px;

    }

    .task-done {
        float: right;
        width: 40px;
        height: 40px;
        background-color: #fee5e1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        color: #f18776;
        align-items: center;
        position: relative;
        margin-bottom: 4px;
    }

    .task-done:after {
        content: '';
        height: 6px;
        width: 9px;
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;
        position: absolute;
        top: 14px;
        transform: rotate(-70deg);
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        padding: 10px;
    }
    ul > li:first-of-type > a{
         color: #f18776;
        opacity: 1;
    }
    a{
        text-decoration: none;
       color: #f49b8e;
        opacity: .7;
    }

</style>
