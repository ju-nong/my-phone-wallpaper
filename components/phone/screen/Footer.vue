<template>
    <div
        class="footer-container flex items-center justify-between flex-col h-full"
    >
        <img
            :src="`/images/${props.media.cover}`"
            alt=""
            class="big-cover h-[90px] object-cover cursor-pointer"
            :class="active ? `active` : ``"
            @click="emits('setActive')"
        />
        <div
            class="audio-container flex flex-col px-3 w-[94%] text-white items-center text-center rounded-2xl py-3 mt-1"
        >
            <div class="text-xs flex w-full justify-between">
                <div
                    class="small-cover w-[40px] overflow-hidden rounded flex justify-center items-center"
                    :class="active ? `active` : ``"
                >
                    <NuxtImg
                        :src="`/images/${props.media.cover}`"
                        alt=""
                        class="w-full h-[40px] object-cover cursor-pointer"
                        @click="emits('setActive')"
                    />
                </div>
                <div
                    class="audio-info w-[50%] flex flex-col items-center justify-center"
                    :class="active ? `active` : ``"
                >
                    <div class="flex w-full flex-wrap relative">
                        <span class="relative">{{
                            props.media.info.title
                        }}</span>
                    </div>
                    <div class="singer flex w-full flex-wrap relative">
                        <span class="relative">{{
                            props.media.info.singer
                        }}</span>
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
            <div
                class="player-container flex w-full p-1 items-center gap-x-[0.6rem]"
            >
                <div>{{ startTime }}</div>
                <div class="w-[110px] progress h-[6px] overflow-hidden">
                    <div
                        class="h-full"
                        :style="`width:${progressWidth}%`"
                    ></div>
                </div>
                <div>-{{ endTime }}</div>
            </div>
            <div
                class="w-full flex relative justify-center items-center gap-x-1"
            >
                <button @click="handleAudioChange('prev')">
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
                <button @click="handleAudioChange('next')">
                    <Icon name="fluent:fast-forward-20-filled" size="1.5rem" />
                </button>

                <Icon
                    name="mingcute:airpods-fill"
                    size="1.3rem"
                    class="airpod"
                />
            </div>
        </div>
        <div class="flex items-center gap-x-1 mt-8">
            <Icon
                name="ic:baseline-circle"
                size="0.6rem"
                color="rgba(255, 255, 255, 1)"
            />
            <Icon
                name="material-symbols:android-camera"
                size="1rem"
                color="rgba(255, 255, 255, 0.5)"
            />
        </div>
        <audio class="hidden" ref="audio"></audio>
    </div>
</template>

<script setup>
import { useMediaControls } from "@vueuse/core";
import { TransitionScale } from "@morev/vue-transitions";
import dayjs from "dayjs";

const props = defineProps({
    active: Boolean,
    media: Object,
    volume: Number,
});

const emits = defineEmits(["setActive", "next", "prev"]);

const deviceVolume = computed(() => props.volume);

const audio = ref();
const { playing, currentTime, duration, volume } = useMediaControls(audio, {
    src: `/audios/${props.media.audio}`,
});

const startTime = computed(() =>
    dayjs().startOf("day").add(currentTime.value, "second").format("mm:ss"),
);

const endTime = computed(() =>
    dayjs()
        .startOf("day")
        .add(Math.round(duration.value - currentTime.value), "second")
        .format("mm:ss"),
);

const progressWidth = computed(() =>
    ((currentTime.value / duration.value) * 100).toFixed(2),
);

function mediaRest() {
    const audioConfig = useMediaControls(audio, {
        src: `/audios/${props.media.audio}`,
    });

    playing.value = false;
    currentTime.value = audioConfig.currentTime.value;
    duration.value = audioConfig.duration.value;
    volume.value = 1;
}

async function handleAudioChange(direction) {
    await emits(direction);

    await mediaRest();
}

onMounted(() => {
    volume.value = props.volume;
});

watch(deviceVolume, (to, from) => {
    if (to !== from) {
        volume.value = to;
    }
});
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
.audio-container {
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, 0.5);

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

    .player-container {
        font-size: 0.25rem;
        color: rgba(255, 255, 255, 0.6);

        .progress {
            border-radius: 1rem;
            background-color: rgba(255, 255, 255, 0.2);

            & > div {
                background-color: #999;
            }
        }
    }

    .button-container {
        &.play {
            .play-button {
                transition: all 0.2s;
                transition-delay: 0s;

                transform: translateX(-50%) scale(0);
                opacity: 0;
            }
            .pause-button {
                transition: all 0.2s;
                transition-delay: 0.2s;

                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
        }
        &.pause {
            .pause-button {
                transition: all 0.2s;
                transition-delay: 0s;

                transform: translateX(-50%) scale(0);
                opacity: 0;
            }
            .play-button {
                transition: all 0.2s;
                transition-delay: 0.2s;

                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
        }
        .audio-button {
            top: 0;
            left: 50%;
            transform: translateX(-50%) scale(0);
            opacity: 0;
        }
    }

    .airpod {
        position: absolute;
        color: rgba(255, 255, 255, 0.5);
        right: 0.5rem;
    }
}

.footer-container {
    /* border: 1px solid #fff; */
}
</style>
