<script lang="ts">
    import { defineComponent } from 'vue';
    import { INotification, INotificationSettings } from '../typings/INotification';
    import { INotificationComponentHandlers } from '../typings/INotificationComponentHandlers';
    import { IPosition } from 'src/typings/IPosition';
    import { IColor } from 'src/typings/IColor';

    const imagesPath: string = "/web/src/assets/images/";
    export default defineComponent({
        name: "Notification",
        props: {
            image: String as () => string,
            text: String as () => string,
            transitonTime: Number as () => number,
            position: Object as () => IPosition,
            title: String as () => string,
            color: Object as () => IColor,
            settings: Object as () => INotificationSettings
        },
        setup(props: INotification): INotificationComponentHandlers
        {
            const GetImagePath = (): string => (imagesPath + props.image!);
            const GetSeparatorColor = (): string => {
                const defaultColor: IColor = { r: 177, g: 22, b: 77 };
                const color: IColor = (props.color || defaultColor);
                return (`linear-gradient(90deg, rgba(${color.r / 1.5}, ${color.g / 2}, ${color.b / 2}, 1) 0%, rgba(${color.r}, ${color.g}, ${color.b}, 1) 50%, rgba(${color.r}, ${color.g}, ${color.b}, 0.3) 80%, rgba(${color.r}, ${color.g}, ${color.b}, 0) 100%)`);
            }

            return {
                GetImagePath,
                GetSeparatorColor
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
            <div class="notification-box-header-title-container" v-if="title"><span>{{ title! }}</span></div>
        </div>

        <div class="notification-box-separator" v-if="settings?.enableSeparator !== false" v-bind:style="{ background: GetSeparatorColor() }"></div>
        <div class="notification-box-content-container">
            <span v-if="text">{{ text }}</span>
        </div>
    </div>
</template>