<template>
    <div class="contact">
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