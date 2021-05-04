import EventEmitter from 'eventemitter3'

export type ShockConfig = {
    lowestLimit: number
    interval: number
}

export enum ShockSide {
    Left = 'left',
    Right = 'right',
    Top = 'top',
    Bottom = 'bottom',
    Back = 'back',
    Front = 'front',
}

export type ShockEventsNames = 'shock'

export type ShockEventData = {
    timeStamp: number
    force: number
    side: ShockSide
    [key: string]: any
}

export abstract class ShockEvents extends EventEmitter<ShockEventsNames> {
}
