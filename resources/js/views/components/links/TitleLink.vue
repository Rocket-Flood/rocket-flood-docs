<script>
export default {
    name: "TitleLink",
    props: {
        name: {type: String, required: true},
    },
    data() {
        return {}
    }
}
</script>

<template>
    <div class="w-auto h-10 flex items-center">
        <p class="text-black ml-4 text-lg">
            {{ name }}
        </p>
    </div>
</template>

<style scoped>

</style>
