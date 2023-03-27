<template>
    <div class="phone relative w-full px-2">
        <PhoneNavigatorLeft
            :config="phoneConfig"
            @toggleManner="handleToggleManner"
            @volumeChange="handleVolumeChange"
        />
        <PhoneNavigatorRight
            :config="phoneConfig"
            @togglePower="handleTogglePower"
        />
        <PhoneNavigatorTop :config="phoneConfig" />
        <PhoneScreen :config="phoneConfig" />
        <PhoneNavigatorBottom :config="phoneConfig" @powerOn="handlePowerOn" />
    </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();

const phoneConfig = reactive({
    power: false,
    volume: 0,
    manner: false,
});

function handleVolumeChange(interval) {
    const newVolume = phoneConfig.volume + interval;

    if (newVolume <= -0.0625 || newVolume > 1) {
        return;
    }

    phoneConfig.volume = newVolume;
}

function handleToggleManner() {
    phoneConfig.manner = !phoneConfig.manner;
}

function handleTogglePower() {
    phoneConfig.power = !phoneConfig.power;
}

function handlePowerOn() {
    phoneConfig.power = true;
}
</script>

<style lang="scss">
.phone {
    aspect-ratio: 1/1.9;
    border-radius: 1.5rem;
    border: 0.25rem solid #e0e0e0;

    max-width: 250px;
}
</style>
