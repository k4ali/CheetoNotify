<script lang="ts">
    import { defineComponent } from 'vue';
    import { INotification } from '../typings/INotification';
    import { INotificationComponentHandlers } from '../typings/INotificationComponentHandlers';

    const imagesPath: string = "/src/assets/images/";
    export default defineComponent({
        name: "Notification",
        props: {
            image: String as () => string
        },
        setup(props: INotification): INotificationComponentHandlers
        {
            const GetImagePath = (): string => (imagesPath + props.image!);
            
            return {
                GetImagePath
            }
        }
    })
</script>
<template>
    <div class="notification-box">
        <div class="notification-box-header">
            <div class="notification-box-header-image-container" v-if="image">
                <img :src="GetImagePath()" draggable="false">
            </div>
        </div>

        <div class="notification-box-separator"></div>
    </div>
</template>