<template>
    <TransitionSlide
        no-opacity
        :duration="300"
        :offset="{
            enter: ['-200%', 0],
            leave: ['-200%', 0],
        }"
    >
        <div
            v-if="volumeHide"
            class="volume-container absolute w-[6px] h-[100px] left-[0.3rem] top-10 bg-black/50 z-[50] rounded-md flex flex-col-reverse overflow-hidden"
        >
            <div
                class="background w-full bg-white/90"
                :style="`height:${volumeHeight}%`"
            ></div>
        </div>
    </TransitionSlide>
</template>

<script setup>
import { TransitionSlide } from "@morev/vue-transitions";
import { storeToRefs } from "pinia";

const device = useDeviceStore();
const { getVolume } = storeToRefs(device);
const volumeHeight = computed(() => (getVolume.value * 100).toFixed(2));

const volumeHide = ref(false);
const volumeTimeout = ref();

watch(getVolume, (to, from) => {
    clearTimeout(volumeTimeout.value);
    volumeHide.value = true;

    volumeTimeout.value = setTimeout(() => {
        volumeHide.value = false;
    }, 1300);
});
</script>

<style lang="scss">
.volume-container {
    .background {
        transition: all 0.3s;
    }
}
</style>
