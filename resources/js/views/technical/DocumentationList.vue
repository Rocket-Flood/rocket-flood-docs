<script>
import TitleLink from "@/views/components/links/TitleLink.vue";
import GeneralLink from "@/views/components/links/GeneralLink.vue";

export default {
    name: "DocumentationList",
    components: {GeneralLink, TitleLink}
}
</script>

<template>
    <div class="grid grid-cols-1 gap-0.5 pl-4">
        <TitleLink name="Quotes"/>
        <GeneralLink name="Create Launch Lead" endpoint="/create-launch-lead" />
        <GeneralLink name="Get Lead Quotes" endpoint="/get-lead-qoutes"/>
        <GeneralLink name="Webhook" endpoint="/webhoook"/>
    </div>
</template>

<style scoped>

</style>
