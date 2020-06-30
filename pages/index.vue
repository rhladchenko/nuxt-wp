<template>
    <section>
        <h2>Home Page</h2>
        <div class="posts" v-for="post in posts" :key="post.id">
            <h4>{{post.post_title}}</h4>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    fetch({ store }) {
        return axios
            .get("http://localhost/wp_vue/wp-json/markers/v1/post")
            .then(res => {
                store.commit("frontPagePost", res.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        }
    }
};
</script>

<style>
</style>
