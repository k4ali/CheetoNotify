import { Ref } from "vue";
import { IComponentHandlers } from "./IAppComponentHandlers";
import { INotification } from "./INotification";
import { IPosition } from "./IPosition";

export interface IComponentSetup
{
    notificationStorage: Ref<INotification[]>;
    handlers: IComponentHandlers;
    nuiPosition: Ref<IPosition>;
}