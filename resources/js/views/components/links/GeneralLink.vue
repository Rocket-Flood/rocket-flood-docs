<script>
export default {
    name: "GeneralLink",
    props: {
        endpoint: {type: String, required: true},
        name: {type: String, required: true},
    },
    data() {
        return {}
    }
}
</script>

<template>
    <div class="w-auto h-6 flex items-center  hover:bg-gray-200 rounded-md">
        <RouterLink class="text-gray-500 ml-4 text-base" :to="endpoint" exact>
            {{ name }}
        </RouterLink>
    </div>
</template>

<style scoped>

</style>
