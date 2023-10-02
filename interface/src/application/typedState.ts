/**
 * To strictly type all accessors and writers, remove
 *
 * [messageID: string]: any
 *
 * And replace with your entire state shape after codecs have decoded them.
 */
declare global {
  interface ElectricUIDeveloperState {
    [messageID: string]: any

    force: number
    disp: number

    // Variables used in testing
    mv_enabled: number
    led_state: number // flicks on and off every mv_in
    mv_in: number
    mv_am: number

    // Callbacks
    up: null
    down: null
    stop: null
  }
  interface ElectricUIDeviceMetadataState {
    name: string
  }
}

// Export custom struct types for use in both codecs and the application
export type LEDSettings = {
  glow_time: number
  enable: number
}

// This exports these types into the dependency tree.
export {}
