/**
 * **DevShock - Device shocks detector**
 * It detects knocks and bumps which happens with the device
 */
export default class DevShock {
    constructor() {
        // Call for handler if API available
        if (this.available()) {
            window.addEventListener('devicemotion', this.onDeviceMotion)
        }
    }

    /**
     * Checks that current device supports Motion API and this module can be used
     */
    available(): boolean {
        return 'DeviceMotionEvent' in window
    }

    /**
     * Device motion handler
     * @param {DeviceMotionEvent} e Motion event
     * @private
     */
    private onDeviceMotion(e: DeviceMotionEvent) {
        //TODO: add gulp module loader or move to webpack
        //TODO: Add vectors calculation
    }
}

// Export into globalThis for browsers
if (window) {
    (window as any)['DevShock'] = DevShock
}
