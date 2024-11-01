<script>
import GeneralLink from "@/views/components/links/GeneralLink.vue";
import TitleLink from "@/views/components/links/TitleLink.vue";
import SearchLine from "@/views/components/SearchLine.vue";

export default {
    name: "NavBar",
    components: {SearchLine, TitleLink, GeneralLink}
}
</script>

<template>
    <nav class="flex flex-row mt-5">
        <div class="w-1/4 ml-10">
            <img src="./../../../assets/zillow.svg" alt="" class="w-12 h-auto">
        </div>
        <SearchLine class="w-1/4"/>
        <div class="w-2/4 flex flex-row items-center justify-end pr-4">
            <GeneralLink endpoint="endpoint" name="Api Export"/>
            <GeneralLink endpoint="endpoint" name="Postman collection"/>
            <GeneralLink endpoint="endpoint" name="Rocket MGA"/>
        </div>

    </nav>
</template>

<style scoped>

</style>
