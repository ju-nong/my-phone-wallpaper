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
        <div class="flex-1 bg-slate-400">
            <video src="" class="w-full h-full" ref="$video"></video>
        </div>
        <div class="navigation-container flex flex-col pt-1 overflow-hidden">
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
            <div class="flex items-center justify-between px-3 py-1">
                <div class="py-1 h-full cursor-pointer">
                    <img
                        src="/images/gallery.jpg"
                        alt="갤러리"
                        class="w-[40px] h-[40px] rounded-sm"
                    />
                </div>
                <div
                    class="rounded-full h-full aspect-square bg-white flex items-center justify-center"
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
import { useUserMedia } from "@vueuse/core";

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

const $video = ref();
const { stream, start } = useUserMedia();

// watchEffect(() => {
//
// });

watch(stream, (to, from) => {
    $video.value.srcObject = to;

    console.log($video.value.srcObject);
});

onMounted(() => {
    start();
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
}
</style>
