<template>
    <div class="header">
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about/">About</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/contact/">Contact</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/">Products</nuxt-link>

                <ul>
                    <li>
                        <nuxt-link to="/products/umbrella">Umbrella</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/products/watch">Watch</nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <nuxt-link to="/users">Users</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
a {
    color: $blue !important;
}
</style>