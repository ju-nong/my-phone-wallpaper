import { defineStore } from "pinia";

// export const useDeviceStore = defineStore("device-store", () => {
//     const power = ref(false);
//     const manner = ref(false);
//     const volume = ref(0);
// })

const VOLUME_INTERVAL = 0.0625;

export const useDeviceStore = defineStore({
    id: "device-store",
    state: () => ({
        power: false,
        manner: false,
        volume: 0,
    }),
    getters: {
        getPower: (state) => state.power,
        getManner: (state) => state.manner,
        getVolume: (state) => state.volume,
    },
    actions: {
        togglePower(force = null) {
            if (typeof force === "boolean") {
                this.power = force;
            } else {
                this.power = !this.power;
            }
        },
        toggleManner() {
            this.manner = !this.manner;
        },
        volumeUp() {
            if (this.volume < 1) {
                this.volume += VOLUME_INTERVAL;
            }
        },
        volumeDown() {
            if (this.volume >= VOLUME_INTERVAL) {
                this.volume -= VOLUME_INTERVAL;
            }
        },
    },
});
