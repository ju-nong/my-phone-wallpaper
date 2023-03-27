<template>
    <div
        class="header flex justify-between items-center text-white text-xs px-1"
    >
        <div class="flex gap-x-1 flex-start thin">
            <Icon name="uil:signal" size="0.8rem" class="signal" />LG U+
            <Icon name="mdi:wifi" size="0.8rem" />
        </div>
        <div class="right-header flex gap-x-1 items-center justify-end">
            <Icon name="ion:headset" size="0.8rem" />
            <div class="battery thin">{{ Math.round(level * 100) }}%</div>

            <span>
                <Icon
                    v-if="charging"
                    name="bi:battery-charging"
                    size="1rem"
                    class="text-green"
                />
                <Icon
                    v-else-if="level <= 0.5"
                    name="bi:battery-half"
                    size="1rem"
                />
                <Icon v-else name="bi:battery-full" size="1rem" />
            </span>
        </div>
    </div>
</template>

<script setup>
import { useBattery } from "@vueuse/core";

const { isSupported, charging, level } = useBattery();
</script>

<style lang="scss">
.header {
    padding-top: 0.1rem;

    .signal {
        transform: scaleX(1.6);
    }

    .right-header {
        transform: translateY(-1.5px);

        .battery {
            /* transform: translateY(1px); */
        }
    }
}
</style>
