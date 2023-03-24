<template>
    <div class="screen w-full overflow-auto relative">
        <TransitionFade>
            <div
                v-if="!props.config.power"
                class="off-screen w-full h-full left-0 top-0 absoulte bg-black z-[100]"
            ></div>
        </TransitionFade>
    </div>
</template>

<script setup>
import { TransitionFade } from "@morev/vue-transitions";

const props = defineProps({
    config: Object,
});
</script>
<style lang="scss">
.screen {
    aspect-ratio: 1/1.7;
    border: 1px solid #000;
    border-radius: 0.25rem;

    background-image: url("~/assets/images/wallpaper-image.png");
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
