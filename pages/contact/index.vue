<template>
    <div class="contact title">
        Contact
    </div>
</template>

<script>
export default {
    layout: 'contact-layout',
    head(){
        return {
            title: 'Contact page',
            meta: [
                {hid: 'description', name: 'description', content: 'My description'},
                {hid: 'ogtitle', property: 'og:title', content: 'Contact Page'}
            ]
        }
    }
}
</script>

<style lang="scss">
    .container {
        .title {
            font-size: 36px;
            color: $red;
        }

        .subtitle {
            display: block;
            font-size: 18px;
        }
    }
</style>