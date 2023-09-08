<script lang="ts">
    import { Ref, defineComponent, onMounted, onUnmounted, ref } from 'vue'
    import { IComponentHandlers } from  './typings/IAppComponentHandlers';
    import { IComponentSetup } from  './typings/IAppComponentSetup';
    import Notification from './components/Notification.vue';
    import { INotification } from './typings/INotification';
    import { IPosition } from './typings/IPosition';

    export default defineComponent({
        name: "App",
        components: { 'Notification': Notification },
        setup(): IComponentSetup
        {
            const notificationStorage: Ref<INotification[]> = ref<INotification[]>([/*{ text: "idc idk em.. ion need no hoes tu cdqsddqsdqsd" }*/]);
            let nuiPosition: Ref<IPosition> = ref<IPosition>({ x: 40, y: 50 })

            let nextNotificationId = 1;
            const handlers: IComponentHandlers = {
                showNotification: (props: INotification) => {
                    const id: number = nextNotificationId++;
                    const notification: INotification = { ...props, _metadata: { _id: id } };
                    
                    notification._metadata!._timer = setTimeout(() => {
                        handlers.deleteNotification(id);
                        clearTimeout(notification._metadata!._timer);
                    }, props.transitonTime || 7000);

                    notificationStorage.value.push(notification);
                },

                deleteNotification: (id: number) => {
                    const index = notificationStorage.value.findIndex((notification: INotification) => (id === notification._metadata!._id));
                    if (index < 0) return;
                    notificationStorage.value.splice(index, 1)
                }
            };

            const handleListener = (ev: MessageEvent<any>) => {
                const event: { name: string; payload: INotification } = ev.data;
                if (event.name === 'showNotification')
                {
                    if (event.payload.position) nuiPosition.value = event.payload.position;
                    handlers.showNotification(event.payload)
                }
            }

            onMounted(() => {
                window.addEventListener<"message">("message", handleListener);
            })

            onUnmounted(() => {
                window.removeEventListener<"message">("message", handleListener);
            })

            return {
                notificationStorage,
                handlers,
                nuiPosition
            }
        }
    })
</script>
<template>
    <div class="notify-app">
        <div class="notifications-container" v-bind:style="{ bottom: nuiPosition.y.toString() + 'vh', left:nuiPosition.x.toString() + 'vw' }">
            <TransitionGroup name="list">
                <Notification
                    v-for="(notification, index) in (notificationStorage)"
                    :key="index"
                    :image="notificationStorage[index].image"
                    :text="notificationStorage[index].text"
                    :transiton-time="notificationStorage[index].transitonTime"
                    :position="notificationStorage[index].position"
                    :title="notificationStorage[index].title"
                    :color="notificationStorage[index].color"
                    :settings="notificationStorage[index].settings"
                />
            </TransitionGroup>
        </div>
    </div>
</template>