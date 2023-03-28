<template>
    <NuxtImg
        :src="`/images/${audio.getAudio.cover}`"
        alt=""
        class="big-cover h-[90px] object-cover cursor-pointer"
        :class="audio.isFullScreen ? `active` : ``"
        @click="audio.toggleFullScreen()"
    />
</template>

<script setup>
const audio = useAudioStore();
</script>

<style lang="scss">
.big-cover {
    transition: all 0.5s;
    transform: scale(0);
    opacity: 0;
    border-radius: 5px;
    aspect-ratio: 1/1;

    &.active {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
