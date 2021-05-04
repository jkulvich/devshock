import DevShock from './devshock'

if (window) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window['DevShock'] = DevShock
}

export default DevShock
