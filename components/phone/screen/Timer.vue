<template>
    <div class="timer-container text-white flex flex-col text-center">
        <div class="calendar pt-4 text-sm">{{ calendar }}</div>
        <div class="timer text-6xl">
            {{ timer }}
        </div>
    </div>
</template>

<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");

const time = ref(dayjs());

const calendar = computed(() => time.value.format("M월 D일 ddd요일"));
const timer = computed(() => time.value.format("h:mm"));

setInterval(() => {
    time.value.add(1, "minute");
    console.log(time.value.get("minute"));
}, 1000);

setTimeout(() => {
    setInterval(() => {
        time.value.add(1, "minute");
    }, 1000);
}, (60 - time.value.get("second")) * 1000);
</script>

<style lang="scss">
.timer-container {
    opacity: 0.8;
}
</style>
