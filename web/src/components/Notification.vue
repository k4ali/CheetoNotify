<script lang="ts">
    import { defineComponent } from 'vue';
    import { INotification } from '../typings/INotification';
    import { INotificationComponentHandlers } from '../typings/INotificationComponentHandlers';
    import { IPosition } from 'src/typings/IPosition';

    const imagesPath: string = "/web/src/assets/images/";
    export default defineComponent({
        name: "Notification",
        props: {
            image: String as () => string,
            text: String as () => string,
            transitonTime: Number as () => number,
            position: Object as () => IPosition
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
        <div class="notification-box-content-container">
            <span v-if="text">{{ text }}</span>
        </div>
    </div>
</template>