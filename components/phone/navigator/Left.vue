<template>
    <div
        class="left-navigator absolute w-[0.25rem] left-[-0.5rem] top-[3.25rem]"
    >
        <button
            class="switch h-[1.5rem]"
            @click="device.toggleManner()"
        ></button>
        <button
            class="volume-up-button h-[2.5rem] mt-3 mb-2"
            ref="$upButton"
        ></button>
        <button
            class="volume-down-button h-[2.5rem]"
            ref="$downButton"
        ></button>
    </div>
</template>

<script setup>
import { useMousePressed } from "@vueuse/core";
import { storeToRefs } from "pinia";

const device = useDeviceStore();
const { getVolumeMode } = storeToRefs(device);

const intervalInstance = ref();

// up
const $upButton = ref();
const { pressed: upPressed } = useMousePressed({
    target: $upButton,
});

const $downButton = ref();
const { pressed: downPressed } = useMousePressed({ target: $downButton });

function handleUp() {
    if (getVolumeMode.value) {
        device.volumeUp();
    } else {
        device.bellUp();
    }
}

function handleDown() {
    if (getVolumeMode.value) {
        device.volumeDown();
    } else {
        device.bellDown();
    }
}

watch(upPressed, (to, from) => {
    if (to) {
        intervalInstance.value = setInterval(() => {
            if (!upPressed.value) {
                return;
            }
            handleUp();
        }, 50);
    } else {
        clearInterval(intervalInstance.value);
    }
});

watch(downPressed, (to, from) => {
    if (to) {
        intervalInstance.value = setInterval(() => {
            if (!downPressed.value) {
                return;
            }
            handleDown();
        }, 50);
    } else {
        clearInterval(intervalInstance.value);
    }
});
</script>

<style lang="scss">
.left-navigator {
    button {
        width: 100%;
        background-color: #e0e0e0;
        border-right: 1px solid #fffc;
        border-radius: 1rem 0 0 1rem;
    }
}
</style>
