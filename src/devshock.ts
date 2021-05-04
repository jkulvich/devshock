import {ShockConfig, ShockEventData, ShockEvents, ShockSide} from './types'
import {Vec3} from 'vec3'

/**
 * **DevShock - Device shocks detector**
 * It detects knocks and bumps which happens with the device
 */
export default class DevShock extends ShockEvents {
    // Default config
    private readonly config = {
        lowestLimit: 20,
        interval: 300,
    } as ShockConfig

    // Timeout timer handler
    private timeout: number

    // Previous acceleration vector
    private prev_av: Vec3 = new Vec3(0, 0, 0)

    constructor(config?: ShockConfig) {
        super()

        // Override default config
        this.config = {...this.config, ...config}

        // Call for handler if API available
        if (this.available()) {
            window.addEventListener('devicemotion', this.onDeviceMotion.bind(this))
        }

        super.addListener('shock', (ev: ShockEventData) => {
            console.log(ev)
        })
    }

    /**
     * Checks that current device supports Motion API and this module can be used
     */
    available(): boolean {
        return 'DeviceMotionEvent' in window
    }

    /**
     * Emit shock event & set timeout for next calls
     * @param data
     * @private
     */
    private emitShock(data: ShockEventData) {
        // If timeout is empty
        if (!this.timeout) {
            super.emit('shock', data)
        }

        // Set new timeout or reset prev
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            clearTimeout(this.timeout)
            this.timeout = 0
            console.log('cleared')
        }, this.config.interval) as unknown as number
    }

    /**
     * Device motion handler
     * @param {DeviceMotionEvent} e Motion event
     * @private
     */
    private onDeviceMotion(e: DeviceMotionEvent) {
        // e.interval returns 16ms (hardware restriction)

        // Acceleration Vector
        const av = new Vec3(e.acceleration.x, e.acceleration.y, e.acceleration.z)
        const av_acc = av.distanceTo(this.prev_av)

        if (av_acc > this.config.lowestLimit) {
            const max_acc = Math.max(Math.abs(av.x), Math.abs(av.y), Math.abs(av.z))

            let side: ShockSide = ShockSide.Back

            // Try to detect bump side
            if (Math.abs(av.x) == max_acc) {
                if (av.x > 0) side = ShockSide.Left
                else side = ShockSide.Right
            }
            else if (Math.abs(av.y) == max_acc) {
                if (av.y > 0) side = ShockSide.Bottom
                else side = ShockSide.Top
            }
            else if (Math.abs(av.z) == max_acc) {
                if (av.z > 0) side = ShockSide.Back
                else side = ShockSide.Front
            }

            this.emitShock({
                timeStamp: +new Date(),
                force: av_acc,
                side
            })
        }

        this.prev_av = av
    }
}
