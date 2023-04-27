<template>
    <div class="screen w-full overflow-hidden bg-black relative">
        <TransitionFade :duration="500">
            <div
                v-if="!device.power"
                class="off-screen w-full h-full left-0 top-0 absolute bg-black z-[100]"
            ></div>
        </TransitionFade>
        <TransitionSlide
            :offset="{
                enter: ['-100%', 0],
                leave: [0, 0],
            }"
        >
            <div
                v-if="isMain"
                class="w-full h-full relative flex flex-col"
                :style="`transform: translateX(-${screenLeft}px);`"
                ref="$screen"
            >
                <TransitionFade :duration="500">
                    <div
                        v-if="!audio.isFullScreen"
                        class="default-screen w-full h-full left-0 top-0 absolute z-[0] bg-center bg-repeat bg-cover"
                    ></div>
                </TransitionFade>
                <TransitionFade :duration="500">
                    <div
                        v-if="audio.isFullScreen"
                        class="w-full h-full left-0 top-0 absolute z-[2]"
                    >
                        <div
                            class="active-blur w-full h-full left-0 top-0 z-[2]"
                        ></div>
                        <div
                            class="active-background w-full h-full left-0 top-0 absolute z-[1] bg-center"
                            :style="`background-image:url('/images/${audio.getAudio.cover}')`"
                        ></div>
                    </div>
                </TransitionFade>
                <PhoneScreenHeader />
                <PhoneScreenMain />
                <PhoneScreenBell />
                <PhoneScreenVolume />
            </div>
        </TransitionSlide>
        <PhoneScreenCamera v-if="!isMain" />
    </div>
</template>

<script setup>
import { TransitionFade, TransitionSlide } from "@morev/vue-transitions";
import { usePointerSwipe, useUserMedia } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "~/stores/DeviceStore";

const device = useDeviceStore();
const audio = useAudioStore();

const $screen = ref();
const { isSwiping, direction, distanceX } = usePointerSwipe($screen);

const { isMain } = storeToRefs(device);

const screenLeft = ref();

watch(distanceX, (to, from) => {
    screenLeft.value = to;
});

watch(isSwiping, (to, from) => {
    if (!to) {
        screenLeft.value = 0;

        if (direction.value === "LEFT" && distanceX.value >= 50) {
            device.setMain(false);
            // isMain.value = !isMain.value;
        }
    }
});
</script>
<style lang="scss">
.screen {
    aspect-ratio: 1/1.7;
    border-radius: 0.25rem;

    .default-screen {
        background-image: url("~/assets/images/wallpaper-image.png");
    }

    .active-blur {
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(50vw);
    }

    .active-background {
        transition: all 0.5s;
        background-size: auto 100%;
        filter: blur(2.5rem) contrast(150%);
    }
}
</style>
