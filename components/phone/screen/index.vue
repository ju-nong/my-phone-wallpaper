<template>
    <div class="screen w-full overflow-auto relative flex flex-col">
        <TransitionFade>
            <div
                v-if="!props.config.power"
                class="off-screen w-full h-full left-0 top-0 absolute bg-black z-[100]"
            ></div>
        </TransitionFade>
        <TransitionFade>
            <div
                v-if="!active"
                class="default-screen w-full h-full left-0 top-0 absolute z-[0] bg-center bg-repeat bg-cover"
            ></div>
        </TransitionFade>
        <TransitionFade>
            <div
                v-if="active"
                class="active-screen w-full h-full left-0 top-0 absolute z-[1] bg-center"
                :style="`background-image:url('/images/${state.cover}')`"
            ></div>
        </TransitionFade>

        <PhoneScreenHeader />
        <PhoneScreenMain
            :active="active"
            :media="state"
            @next="next"
            @prev="prev"
            @setActive="setActive"
        />
    </div>
</template>

<script setup>
import { useToggle, useCycleList } from "@vueuse/core";
import { TransitionFade } from "@morev/vue-transitions";

const props = defineProps({
    config: Object,
});

const [active, setActive] = useToggle();

const { state, next, prev } = useCycleList([
    {
        cover: "cover1.jpg",
        audio: "allthat.mp3",
        info: { title: "allthat", singer: "누운 아리" },
    },
    {
        cover: "cover2.jpg",
        audio: "creativeminds.mp3",
        info: { title: "creativeminds", singer: "맛있는 파스타" },
    },
    {
        cover: "cover3.jpg",
        audio: "dreams.mp3",
        info: { title: "dreams", singer: "당돌한 아리" },
    },
    {
        cover: "cover4.jpg",
        audio: "evolution.mp3",
        info: { title: "evolution", singer: "금강" },
    },
    {
        cover: "cover5.jpg",
        audio: "hey.mp3",
        info: { title: "hey", singer: "용숙이" },
    },
    {
        cover: "cover6.jpg",
        audio: "inspire.mp3",
        info: { title: "inspire", singer: "오아리" },
    },
]);
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
