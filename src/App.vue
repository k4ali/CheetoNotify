<script lang="ts">
    import { Ref, defineComponent, ref } from 'vue'

    const notificationStorage: Ref<string[]> = ref<string[]>([]);
    const handlers: { showNotification: () => void; deleteNotification: (id: number) => void } = {
        showNotification: () => {
            notificationStorage.value.push("test");

            const id: number = notificationStorage.value.length;
            setTimeout(() => {
                handlers.deleteNotification(id);
            }, 5000)
        },

        deleteNotification: (id: number) => {
            notificationStorage.value = notificationStorage.value.slice(1, id);
        }
    };

    export default defineComponent({
        name: "App",
        methods: handlers
    })
</script>
<template>
    <div class="notify-app">
        
    </div>
</template>