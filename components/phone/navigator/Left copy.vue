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
            @click="handleUp"
            @mouseup="pressStop"
            @touchend="pressStop"
        ></button>
        <button
            class="volume-down-button h-[2.5rem]"
            ref="$downButton"
            @click="handleDown"
            @mouseup="pressStop"
            @touchend="pressStop"
        ></button>
    </div>
</template>

<script setup>
import { onLongPress } from "@vueuse/core";

const device = useDeviceStore();
const volumeMode = computed(() => device.getVolumeMode);

const intervalInstance = ref();

// up
const $upButton = ref();

function handleUp() {
    if (volumeMode.value) {
        device.volumeUp();
    } else {
        device.bellUp();
    }
}

function handleDown() {
    if (volumeMode.value) {
        device.volumeDown();
    } else {
        device.bellDown();
    }
}

const handleVolumeUp = () => {
    pressStop();
    intervalInstance.value = setInterval(() => {
        handleUp();
    }, 50);
};

// down
const $downButton = ref();

const handleVolumeDown = () => {
    pressStop();
    intervalInstance.value = setInterval(() => {
        handleDown();
    }, 50);
};

function pressStop() {
    clearInterval(intervalInstance.value);
}

onLongPress($upButton, handleVolumeUp, {
    delay: 300,
    modifiers: {
        prevent: true,
    },
});

onLongPress($downButton, handleVolumeDown, {
    delay: 300,
    modifiers: {
        prevent: true,
    },
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
