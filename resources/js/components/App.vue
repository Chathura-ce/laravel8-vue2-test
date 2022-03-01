<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Laravel vue</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link exact class="nav-link" active-class="active-menu" :to="{name:'posts.index'}">Post list</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact class="nav-link" active-class="active-menu" :to="{name:'posts.create'}">Create Post</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
