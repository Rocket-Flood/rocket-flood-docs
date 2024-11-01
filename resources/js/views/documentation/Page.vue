<script>
import SearchLine from "@/views/components/SearchLine.vue";
import ChapterTitle from "@/views/components/document/ChapterTitle.vue";

export default {
    name: "Page",
    components: {ChapterTitle, SearchLine}
}
</script>

<template>
    <div class="p-6">
        <ChapterTitle text="Customizing"/>
        <p>To control the grid-auto-flow property at a specific breakpoint, add a {screen}: prefix to any existing grid-auto-flow utility. For example, use md:grid-flow-col to apply the grid-flow-col utility at only medium screen sizes and above.</p>
    </div>

</template>

<style scoped>

</style>
