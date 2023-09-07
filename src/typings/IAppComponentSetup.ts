import { Ref } from "vue";
import { IComponentHandlers } from "./IAppComponentHandlers";
import { INotification } from "./INotification";

export interface IComponentSetup
{
    notificationStorage: Ref<INotification[]>;
    handlers: IComponentHandlers;
}