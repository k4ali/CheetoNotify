<script lang="ts">
    import { Ref, defineComponent, ref } from 'vue'
    import { IComponentHandlers } from  './typings/IAppComponentHandlers';
    import { IComponentSetup } from  './typings/IAppComponentSetup';
    import Notification from './components/Notification.vue';
    import { INotification } from './typings/INotification';

    export default defineComponent({
        name: "App",
        components: { 'Notification': Notification },
        setup(): IComponentSetup
        {
            const notificationStorage: Ref<INotification[]> = ref<INotification[]>([]);
            let nextNotificationId = 1;

            const handlers: IComponentHandlers = {
                showNotification: (props: INotification) => {
                    const id: number = nextNotificationId++;
                    notificationStorage.value.push({ ...props, id });
                    
                    setTimeout(() => {
                        handlers.deleteNotification(id);
                    }, 5000)
                },

                deleteNotification: (id: number) => {
                    const index = notificationStorage.value.findIndex((notification: INotification) => notification.id === id);
                    if (index >= 0) notificationStorage.value.splice(index, 1);
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
            <TransitionGroup name="list">
                <Notification
                    v-for="(notification, index) in (notificationStorage)" 
                    :key="index"
                    :image="notificationStorage[index].image"
                    :text="notificationStorage[index].text"
                />
            </TransitionGroup>
        </div>

        <button @click="handlers.showNotification({ text: Math.random().toString(36).substr(2, 8), image: 'saya.png' })">press just right here</button>
    </div>
</template>