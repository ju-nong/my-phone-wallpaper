<template>
    <div
        class="camera-container w-fll h-full relative flex flex-col text-white"
    >
        <ul
            class="util-container flex items-center justify-between px-2 text-[1.25rem]"
        >
            <li>
                <Icon v-if="util.flash === 'on'" name="ion:ios-flash" />
                <Icon
                    v-else-if="util.flash === 'auto'"
                    name="ion:ios-flash"
                    class="active"
                />
                <Icon v-else name="ion:ios-flash-off" />
            </li>

            <li @click="util.live = !util.live">
                <Icon
                    v-if="util.live"
                    name="tabler:live-photo"
                    class="active"
                />
                <Icon v-else name="tabler:live-photo-off" />
            </li>

            <li>
                <Icon
                    name="ion:ios-timer"
                    :class="util.timer ? 'active' : ''"
                />
            </li>

            <li>
                <Icon
                    name="ion:color-filter"
                    :class="util.filter ? 'active' : ''"
                />
            </li>
        </ul>
        <div class="flex-1 relative h-[279px]">
            <div class="grid-container grid absolute w-full h-full">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <video
                src=""
                ref="$video"
                muted
                autoplay
                playsinline
                class="w-full h-full object-cover"
            ></video>
        </div>
        <div class="navigation-container flex flex-col py-1 overflow-hidden">
            <ul
                class="cursor-pointer flex w-[270px] text-[10px] transition-all"
                :style="`--index: ${navigation.active}; transform:translateX(${
                    90 - navigation.active * 45
                }px);`"
            >
                <li
                    v-for="(navigationItem, index) in navigation.list"
                    :key="index"
                    class="w-[45px] text-center whitespace-nowrap"
                    :class="navigation.active === index ? 'active' : ''"
                    @click="navigation.active = index"
                >
                    {{ navigationItem }}
                </li>
            </ul>
            <div class="flex items-center justify-between px-3 pt-1">
                <div class="py-1 h-full cursor-pointer">
                    <img
                        src="/images/gallery.jpg"
                        alt="갤러리"
                        class="w-[40px] h-[40px] rounded-sm"
                    />
                </div>
                <div
                    class="rounded-full h-full aspect-square bg-white flex items-center justify-center"
                    @click="handleCapture"
                >
                    <div class="in-circle rounded-full w-[80%] h-[80%]"></div>
                </div>
                <div class="w-[40px] text-center">
                    <Icon
                        name="ion:ios-reverse-camera-outline"
                        size="2rem"
                        color="#bbb"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserMedia, useDevicesList } from "@vueuse/core";

const util = reactive({
    flash: "off",
    live: false,
    timer: false,
    filter: false,
});

const navigation = reactive({
    list: ["타임랩스", "슬로 모션", "비디오", "사진", "정방향", "파노라마"],
    active: 3,
});

const currentCamera = ref();
const { videoInputs: cameras } = useDevicesList({
    requestPermissions: true,
    onUpdated() {
        if (!cameras.value.find((i) => i.deviceId === currentCamera.value)) {
            currentCamera.value = cameras.value[0]?.deviceId;
        }
    },
});

const $video = ref();

const { stream, enabled } = useUserMedia({
    constraints: { video: { deviceId: currentCamera } },
});

function handleCapture() {
    // const canvas = document.createElement("canvas");
    // const context = canvas.getContext("2d");
    // canvas.width = video
}

watchEffect(() => {
    if ($video.value) {
        $video.value.srcObject = stream.value;
    }
});

onMounted(() => {
    enabled.value = true;
});
</script>

<style lang="scss">
.camera-container {
    .active {
        color: rgba(245, 213, 73, 1);
    }

    .util-container {
        > * {
            cursor: pointer;
        }
    }

    .navigation-container {
        ul {
            li {
                transform: scale(0.8);
            }
        }

        .in-circle {
            border: 2px solid #000;
        }
    }

    .grid-container {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 0;

        > div {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &:not(:first-child):not(:nth-child(3n + 1)) {
                border-left: 1px solid rgba(255, 255, 255, 0.6);
            }
            &:nth-child(n + 4) {
                border-top: 1px solid rgba(255, 255, 255, 0.6);
            }
        }
    }
}
</style>
