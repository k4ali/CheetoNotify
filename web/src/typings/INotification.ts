import { IPosition } from "./IPosition";

declare interface INotificationMetadata
{
    id: number;
    timer?: NodeJS.Timeout;
}

export interface INotification
{
    image?: string;
    title?: string;
    text?: string;
    transitonTime?: number;
    position?: IPosition;
    metadata?: INotificationMetadata;
}