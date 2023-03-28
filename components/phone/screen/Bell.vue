<template>
    <div
        class="maner-container absolute w-[60%] top-[0.4rem] left-[50%] flex z-[50] p-1"
    >
        <div class="icon-container absolute">
            <!-- <Icon name="ion:md-notifications-off" class="off" size="1.1rem" /> -->
            <Icon name="ion:md-notifications" class="on" size="1.1rem" />
        </div>
        <div
            class="status-container text-white text-[0.6rem] w-full items-center"
        >
            <!-- <div class="off">
                <p>무음모드</p>
                <p>켬</p>
            </div> -->
            <div class="on flex flex-col justify-center items-center">
                <p>벨소리 크기</p>
                <div
                    class="volume-container w-[70px] h-[15px] flex items-center"
                >
                    <div class="background w-full h-[4px] overflow-hidden">
                        <div
                            class="h-full"
                            :style="`width:${bellWidth}%`"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const device = useDeviceStore();

const bellWidth = computed(() => (device.getBell * 100).toFixed(2));
</script>

<style lang="scss">
.maner-container {
    background-color: rgba(51, 41, 23, 1);
    border-radius: 1.5rem;
    transform: translateX(-50%);

    .icon-container {
        transform: translate(5px, 1.5px);
        .on,
        .off {
            transition: all 0.3s;
        }

        .on {
            color: rgba(161, 157, 155, 1);
        }

        .off {
            color: rgba(235, 85, 69, 1);
        }
    }

    .status-container {
        > div {
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
