<template>
    <TransitionSlide
        no-opacity
        duration="500"
        :offset="{
            enter: [0, '-120%'],
            leave: [0, '-120%'],
        }"
    >
        <div
            v-if="bellChanging"
            class="maner-container absolute w-[60%] top-[0.4rem] left-[50%] flex z-[50] p-1 overflow-hidden"
        >
            <div class="icon-container absolute">
                <Icon
                    v-if="device.getManner"
                    name="ion:md-notifications-off"
                    class="off bell-icon"
                    size="1.1rem"
                />
                <Icon
                    v-else
                    name="ion:md-notifications"
                    class="on bell-icon"
                    :class="mannerInit ? `shake` : ``"
                    size="1.1rem"
                />
            </div>
            <div
                class="status-container text-white text-[0.6rem] w-full items-center"
            >
                <TransitionSlide group :offset="mannerOffset">
                    <div
                        v-if="device.getManner"
                        class="off flex flex-col justify-center items-center"
                    >
                        <p>무음모드</p>
                        <p>켬</p>
                    </div>
                    <div
                        v-else
                        class="on flex flex-col justify-center items-center"
                    >
                        <p>벨소리 크기</p>
                        <div
                            class="volume-container w-[70px] h-[15px] flex items-center"
                        >
                            <div
                                class="background w-full h-[4px] overflow-hidden"
                            >
                                <div
                                    class="h-full"
                                    :style="`width:${bellWidth}%`"
                                ></div>
                            </div>
                        </div>
                    </div>
                </TransitionSlide>
            </div>
        </div>
    </TransitionSlide>
</template>

<script setup>
import { TransitionSlide } from "@morev/vue-transitions";
import { storeToRefs } from "pinia";

const device = useDeviceStore();
const { bell, volume, manner } = storeToRefs(device);

const bellWidth = computed(() => (device.getBell * 100).toFixed(2));

const bellChanging = ref(false);
const hideTimeout = ref();
const mannerOffset = ref({
    enter: [0, "-100%"],
    leave: [0, "100%"],
});
const mannerInit = ref(false);
const mannerTimeout = ref();

function difference(to, from) {
    if (to !== from) {
        clearTimeout(hideTimeout.value);
        bellChanging.value = true;

        hideTimeout.value = setTimeout(() => {
            bellChanging.value = false;
        }, 1300);
    }
}

watch(bell, (to, from) => {
    difference(bell.value);
});

watch(volume, (to, from) => {
    difference(volume.value);
});

watch(manner, (to, from) => {
    mannerOffset.value = manner.value
        ? {
              enter: [0, "-100%"],
              leave: [0, "100%"],
          }
        : {
              enter: [0, "100%"],
              leave: [0, "-100%"],
          };

    if (!manner.value) {
        mannerInit.value = true;

        clearInterval(mannerTimeout.value);

        mannerTimeout.value = setTimeout(() => {
            mannerInit.value = false;
        }, 300);
    }

    difference(manner.value);
});
</script>

<style lang="scss">
.maner-container {
    background-color: rgba(51, 41, 23, 1);
    border-radius: 1.5rem;
    transform: translateX(-50%);

    .icon-container {
        transform: translate(5px, 1.5px);

        .on {
            color: rgba(161, 157, 155, 1);

            &.shake {
                animation-name: shake;
                animation-duration: 0.3s;
                animation-timing-function: ease-in-out;
            }
        }

        .off {
            color: rgba(235, 85, 69, 1);
        }
    }

    .status-container {
        div {
            text-align: center;
            transition: all 0.3s;
            > p:nth-child(1) {
                color: rgba(160, 157, 157, 1);
            }
        }

        .off {
            p:nth-child(2) {
                color: rgba(101, 97, 93, 1);
            }
        }

        .on {
            .volume-container {
                overflow: hidden;
                .background {
                    background-color: rgba(77, 69, 60, 1);
                    border-radius: 4px;

                    div {
                        transition: all 0.3s;
                        background-color: rgba(173, 169, 170, 1);
                    }
                }
            }
        }
    }
}
</style>
