import { IColor } from "./IColor";
import { IPosition } from "./IPosition";

export interface INotificationMetadata
{
    _id: number;
    _timer?: NodeJS.Timeout;
}

export interface INotificationSettings
{
    enableSeparator?: boolean;
}

export interface INotification
{
    image?: string;
    title?: string;
    text?: string;
    transitonTime?: number;
    position?: IPosition;
    color?: IColor;
    settings?: INotificationSettings;
    _metadata?: INotificationMetadata;
}