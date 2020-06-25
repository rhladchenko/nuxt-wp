<template>
    <div class="container">
        <Header />
        <Nuxt />
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
    components: {
        Header
    }
};
</script>
<style>
.container {
    margin: 0 auto;
    width: 960px;
}
</style>
