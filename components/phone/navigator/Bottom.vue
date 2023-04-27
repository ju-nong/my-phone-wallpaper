<template>
    <div class="bottom-navigator flex justify-center items-center">
        <button
            class="home-button w-[2.25rem] h-[2.25rem]"
            @click="handleHomeButton"
        ></button>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDeviceStore } from "~/stores/DeviceStore";

const device = useDeviceStore();
const { isMain } = storeToRefs(device);

function handleHomeButton() {
    device.togglePower(true);

    if (!isMain.value) {
        device.setMain(true);
    }
}
</script>

<style lang="scss">
.bottom-navigator {
    height: 48px;
    .home-button {
        border-radius: 100%;
        border: 3px solid #e0e0e0;
        margin: 6px 0px;
    }
}
</style>
