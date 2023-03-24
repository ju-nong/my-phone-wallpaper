<template>
    <div
        class="left-navigator absolute w-[0.25rem] left-[-0.5rem] top-[3.25rem]"
    >
        <button
            class="switch h-[1.5rem]"
            @click="emits('toggleManner')"
        ></button>
        <button
            class="volume-up-button h-[2.5rem] mt-3 mb-2"
            @click="emits('volumeChange', 1)"
        ></button>
        <button
            class="volume-down-button h-[2.5rem]"
            @click="emits('volumeChange', -1)"
        ></button>
    </div>
</template>

<script setup>
const emits = defineEmits(["toggleManner", "volumeChange"]);
</script>

<style lang="scss">
.left-navigator {
    button {
        width: 100%;
        background-color: #e0e0e0;
        border-right: 1px solid #fffc;
        border-radius: 1rem 0 0 1rem;
    }
}
</style>
