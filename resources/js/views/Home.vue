<template>
    <div class="">
        <NavBar/>
        <div class="grid-cols-6 grid">
            <DocumentationList class="col-span-1"/>
            <Page class="col-span-3"/>
        </div>
    </div>

</template>

<script>
import NavBar from "@/views/technical/NavBar.vue";
import DocumentationList from "@/views/technical/DocumentationList.vue";
import Page from "@/views/documentation/Page.vue";

export default {
    name: "Home",
    components: {Page, DocumentationList, NavBar}
}
</script>
