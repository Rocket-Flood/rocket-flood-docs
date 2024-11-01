<script>
export default {
    name: "SearchLine",
    props: {
        name: {type: String, required: true},
    },
    data() {
        return {}
    }
}
</script>

<template>
    <div class="flex-row flex p-4 border-2 h-14 cursor-pointer rounded-lg">
        <img src="../../../assets/search-interface-symbol.png" class="w-5 h-5 mr-10"  alt="">
        <p class="text-gray-500 w-[250px] h-10">Search...</p>
        <p class="text-gray-500">ctrl+K</p>
    </div>
</template>

<style scoped>

</style>
