<template>
    <div class="text-xs flex w-full justify-between">
        <div
            class="small-cover w-[40px] overflow-hidden rounded flex justify-center items-center"
            :class="audio.isFullScreen ? `active` : ``"
        >
            <NuxtImg
                :src="`/images/${audio.getAudio.cover}`"
                alt=""
                class="w-full h-[40px] object-cover cursor-pointer"
                @click="audio.toggleFullScreen()"
            />
        </div>
        <div
            class="audio-info w-[50%] flex flex-col items-center justify-center"
            :class="audio.isFullScreen ? `active` : ``"
        >
            <div class="flex w-full flex-wrap relative">
                <span class="relative">{{ audio.getAudio.info.title }}</span>
            </div>
            <div class="singer flex w-full flex-wrap relative">
                <span class="relative">{{ audio.getAudio.info.singer }}</span>
            </div>
        </div>
        <div
            class="w-[40px] waveform-container flex justify-center items-center"
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script setup>
const audio = useAudioStore();
</script>

<style lang="scss">
.small-cover {
    transition: all 0.5s;

    img {
        transition: all 0.5s;
    }

    &.active {
        opacity: 0;

        img {
            width: 0px;
            height: 0px;
        }
    }
}

.audio-info {
    div {
        span {
            transition: all 0.5s;
            left: 0;
            transform: translateX(0%);
        }

        &.singer {
            color: rgba(255, 255, 255, 0.6);
        }
    }

    &.active {
        div {
            span {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}

.waveform-container {
    column-gap: 1px;
    & > div {
        background-color: rgba(255, 255, 255, 0.4);
        width: 3px;
        height: 3px;
        border-radius: 3px;

        transition: all 0.3s;
    }
}
</style>
