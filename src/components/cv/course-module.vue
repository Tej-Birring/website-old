<template>
    <li><span class="text-theme-2 highlight-theme-4">{{code}}</span> {{name}}</li>
</template>

<script>
    export default {
        name: "course-module",
        props: {
            code: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>