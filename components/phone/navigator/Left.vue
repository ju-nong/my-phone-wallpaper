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
            @click="device.volumeUp()"
            @mouseup="pressStop"
            @touchend="pressStop"
        ></button>
        <button
            class="volume-down-button h-[2.5rem]"
            ref="$downButton"
            @click="device.volumeUp()"
            @mouseup="pressStop"
            @touchend="pressStop"
        ></button>
    </div>
</template>

<script setup>
import { onLongPress } from "@vueuse/core";

const device = useDeviceStore();

const intervalInstance = ref();

// up
const $upButton = ref();

const handleVolumeUp = () => {
    intervalInstance.value = setInterval(() => {
        device.volumeUp();
    }, 100);
};

// down
const $downButton = ref();

const handleVolumeDown = () => {
    intervalInstance.value = setInterval(() => {
        device.volumeDown();
    }, 100);
};

function pressStop() {
    clearInterval(intervalInstance.value);
}

onLongPress($upButton, handleVolumeUp, {
    delay: 500,
});

onLongPress($downButton, handleVolumeDown, {
    delay: 500,
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
