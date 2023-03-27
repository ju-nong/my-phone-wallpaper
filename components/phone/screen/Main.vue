<template>
    <div class="h-full flex flex-col justify-between z-[2]">
        <PhoneScreenTimer />
        <PhoneScreenFooter
            :active="props.active"
            :media="props.media"
            :volume="props.volume"
            @next="emits('next')"
            @prev="emits('prev')"
            @setActive="emits('setActive')"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    active: Boolean,
    media: Object,
    volume: Number,
});

const emits = defineEmits(["setActive", "next", "prev", "setPlay"]);
</script>

<style></style>
