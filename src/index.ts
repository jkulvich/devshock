import DevShock from './devshock'
export { ShockSide, ShockEvents, ShockEventData, ShockEventsNames } from './types'

if (window) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window['DevShock'] = DevShock
}

export default DevShock
