<template>
    <div class="users">
        <ul v-for="user in users" :key="user.id">
            <li>{{ user.name }}</li>
        </ul>
    </div>
</template>


<script>
import axios from "axios";

export default {
    fetch({ store }) {
        return axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                store.commit("frontPageUsers", res.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    computed: {
        users() {
            return this.$store.state.users;
        }
    }
};
</script>