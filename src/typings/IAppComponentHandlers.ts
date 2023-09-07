import { INotification } from "./INotification";

export interface IComponentHandlers
{
    showNotification: (props: INotification) => void; 
    deleteNotification: (id: number) => void;
}