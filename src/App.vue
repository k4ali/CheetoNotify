<script lang="ts">
    import { Ref, defineComponent, ref } from 'vue'
    import { IComponentHandlers } from  './typings/IAppComponentHandlers';
    import { IComponentSetup } from  './typings/IAppComponentSetup';
    import Notification from './components/Notification.vue';
    import { INotification } from './typings/INotification';

    const defaultNotification: INotification = {
        image: "saya.png"
    }

    export default defineComponent({
        name: "App",
        components: { 'Notification': Notification },
        setup(): IComponentSetup
        {
            const notificationStorage: Ref<INotification[]> = ref<INotification[]>([defaultNotification]);
            const handlers: IComponentHandlers = {
                showNotification: (props: INotification) => {
                    notificationStorage.value.push(props);

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
            <Notification 
                v-for="(notification, index) in (notificationStorage)" 
                :key="index"
                :image="notificationStorage[index].image"
            />
        </div>
    </div>
</template>