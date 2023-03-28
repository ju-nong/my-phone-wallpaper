<template>
    <div
        class="player-container flex w-full items-center relative justify-center h-5"
    >
        <div class="absolute left-1">{{ startTime }}</div>
        <div class="w-[110px] progress h-[6px] overflow-hidden relative">
            <input
                type="range"
                class="w-full cursor-pointer absolute left-0 top-0 opacity-0"
                v-model="$progress"
            />
            <div class="h-full" :style="`width:${progressWidth}%`"></div>
        </div>
        <div class="absolute right-1">-{{ endTime }}</div>
    </div>
    <div class="w-full flex relative justify-center items-center gap-x-1">
        <button @click="audio.prev()">
            <Icon name="fluent:rewind-20-filled" size="1.5rem" />
        </button>
        <button
            @click="playing = !playing"
            class="relative button-container"
            :class="playing ? 'play' : 'pause'"
        >
            <Icon name="pajamas:play" size="2.5rem" class="invisible" />
            <Icon
                name="pajamas:pause"
                size="2.5rem"
                class="absolute audio-button pause-button"
            />
            <Icon
                name="pajamas:play"
                size="2.5rem"
                class="absolute audio-button play-button"
            />
        </button>
        <button @click="audio.next()">
            <Icon name="fluent:fast-forward-20-filled" size="1.5rem" />
        </button>

        <Icon name="mingcute:airpods-fill" size="1.3rem" class="airpod" />
    </div>
    <audio class="hidden" ref="$audio"></audio>
</template>

<script setup>
import { useMediaControls } from "@vueuse/core";
import dayjs from "dayjs";

const device = useDeviceStore();

const audio = useAudioStore();
const watchTrackNumber = computed(() => audio.getTrackNumber);

const $audio = ref();
const { playing, currentTime, duration, volume, ended } = useMediaControls(
    $audio,
    {
        src: `/audios/${audio.getAudio.audio}`,
    },
);

// 오디오 시작, 끝 시간
const startTime = computed(() =>
    dayjs().startOf("day").add(currentTime.value, "second").format("mm:ss"),
);

const endTime = computed(() =>
    dayjs()
        .startOf("day")
        .add(Math.floor(duration.value - currentTime.value), "second")
        .format("mm:ss"),
);

// progressBar
const $progress = ref(0);

const progressWidth = computed(() =>
    ((currentTime.value / duration.value) * 100).toFixed(2),
);

onMounted(() => {
    volume.value = device.getVolume;
});

watch(device, (to, from) => {
    if (to.getVolume !== from.getVolume) {
        volume.value = to.getVolume;
    }
});

watch($progress, (to, from) => {
    currentTime.value = (duration.value / 100) * to;
});

watch(watchTrackNumber, (to, from) => {
    if (to !== from) {
        const audioConfig = useMediaControls($audio, {
            src: `/audios/${audio.getAudio.audio}`,
        });

        currentTime.value = audioConfig.currentTime.value;
        duration.value = audioConfig.duration.value;
        playing.value = true;
    }
});

watch(ended, (to, from) => {
    if (to) {
        audio.next();
    }
});
</script>

<style lang="scss">
.player-container {
    color: rgba(255, 255, 255, 0.6);
    font-size: 9px;

    .progress {
        border-radius: 1rem;
        background-color: rgba(255, 255, 255, 0.2);
        & > div {
            background-color: #999;
        }
    }
}
</style>
