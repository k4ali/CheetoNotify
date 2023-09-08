import { IPosition } from "./IPosition";

export interface INotification
{
    id?: number;
    image?: string;
    text?: string;
    transitonTime?: number;
    timer?: NodeJS.Timeout;
    position?: IPosition;
}