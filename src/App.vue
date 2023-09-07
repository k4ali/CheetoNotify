<script lang="ts">
    import { Ref, defineComponent, ref } from 'vue'

    const notificationStorage: Ref<string[]> = ref<string[]>([]);
    export default defineComponent({
        name: "App",
        methods: {

        }
    })
</script>
<template>
    <div class="notify-app">

    </div>
</template>