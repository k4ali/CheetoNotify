<script lang="ts">
    import { Ref, defineComponent, ref } from 'vue'
    import Notification from './components/Notification.vue';

    declare interface IComponentHandlers
    {
        showNotification: () => void; 
        deleteNotification: (id: number) => void;
    }

    declare interface IComponentSetup
    {
        notificationStorage: Ref<string[]>;
        handlers: IComponentHandlers;
    }

    export default defineComponent({
        name: "App",
        components: { 'Notification': Notification },
        setup(): IComponentSetup
        {
            const notificationStorage: Ref<string[]> = ref<string[]>(["test"]);
            const handlers: IComponentHandlers = {
                showNotification: () => {
                    notificationStorage.value.push("test");

                    const id: number = notificationStorage.value.length;
                    setTimeout(() => {
                        handlers.deleteNotification(id);
                    }, 5000)
                },

                deleteNotification: (id: number) => {
                    notificationStorage.value = notificationStorage.value.slice(0, id);
                }
            };

            return {
                notificationStorage,
                handlers
            }
        }
    })
</script>
<template>
    <div class="notify-app">
        <div class="notifications-container">
            <Notification v-for="(notification, index) in (notificationStorage)" :key="index"/>
        </div>
    </div>
</template>