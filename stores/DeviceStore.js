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
        bell: 0,
        volumeMode: false,
        isMain: true,
    }),
    getters: {
        getPower: (state) => state.power,
        getManner: (state) => state.manner,
        getVolume: (state) => state.volume,
        getBell: (state) => state.bell,
        getVolumeMode: (state) => state.volumeMode,
        getIsMain: (state) => state.isMain,
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
            if (this.volume < 1 && !this.manner) {
                this.volume += VOLUME_INTERVAL;
            }
        },
        volumeDown() {
            if (this.volume >= VOLUME_INTERVAL && !this.manner) {
                this.volume -= VOLUME_INTERVAL;
            }
        },
        bellUp() {
            if (this.bell < 1 && !this.manner) {
                this.bell += VOLUME_INTERVAL;
            }
        },
        bellDown() {
            if (this.bell >= VOLUME_INTERVAL && !this.manner) {
                this.bell -= VOLUME_INTERVAL;
            }
        },
        toggleVolumeMode() {
            this.volumeMode = !this.volumeMode;
        },
        setMain(flag) {
            this.isMain = flag;
        },
    },
});
