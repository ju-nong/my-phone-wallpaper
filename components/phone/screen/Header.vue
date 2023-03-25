<template>
    <div
        class="header flex h-[1rem] justify-between items-center text-white text-xs px-1"
    >
        <div class="flex items-center gap-x-1">
            <Icon name="uil:signal" size="0.8rem" />LG U+
            <Icon name="mdi:wifi" size="0.8rem" />
        </div>
        <div class="flex items-center gap-x-1">
            <Icon name="ion:headset" size="0.8rem" />
            {{ Math.round(level * 100) }}%

            <Icon
                v-if="charging"
                name="bi:battery-charging"
                size="1rem"
                class="text-green"
            />
            <Icon v-else-if="level <= 0.5" name="bi:battery-half" size="1rem" />
            <Icon v-else name="bi:battery-full" size="1rem" />
        </div>
    </div>
</template>

<script setup>
import { useBattery } from "@vueuse/core";

const { isSupported, charging, level } = useBattery();
</script>

<style lang="scss">
.header {
    /* border: 1px solid #fff; */
}
</style>
