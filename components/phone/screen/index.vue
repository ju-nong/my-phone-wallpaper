<template>
    <div
        class="screen w-full overflow-hidden relative flex flex-col"
        ref="$screen"
    >
        <TransitionFade :duration="500">
            <div
                v-if="!device.power"
                class="off-screen w-full h-full left-0 top-0 absolute bg-black z-[100]"
            ></div>
        </TransitionFade>
        <TransitionFade :duration="500">
            <div
                v-if="!audio.isFullScreen"
                class="default-screen w-full h-full left-0 top-0 absolute z-[0] bg-center bg-repeat bg-cover"
            ></div>
        </TransitionFade>
        <TransitionFade :duration="500">
            <div
                v-if="audio.isFullScreen"
                class="active-screen w-full h-full left-0 top-0 absolute z-[1] bg-center"
                :style="`background-image:url('/images/${audio.getAudio.cover}')`"
            ></div>
        </TransitionFade>
        <PhoneScreenHeader />
        <PhoneScreenMain />
        <PhoneScreenBell />
        <PhoneScreenVolume />
    </div>
</template>

<script setup>
import { TransitionFade } from "@morev/vue-transitions";
import { usePointerSwipe } from "@vueuse/core";

const device = useDeviceStore();
const audio = useAudioStore();

const $screen = ref();
const { isSwiping, direction, distanceX } = usePointerSwipe($screen);

watch(isSwiping, (to, from) => {
    console.log(to);
});

watch(direction, (to, from) => {
    console.log(to);
});

watch(distanceX, (to, from) => {
    console.log(to);
});
</script>
<style lang="scss">
.screen {
    aspect-ratio: 1/1.7;
    border-radius: 0.25rem;

    .default-screen {
        background-image: url("~/assets/images/wallpaper-image.png");
    }

    .active-screen {
        transition: all 0.5s;
        background-size: auto 100%;
        filter: blur(1rem);
    }
}
</style>
