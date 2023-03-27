<template>
    <div class="bottom-navigator flex justify-center items-center">
        <button
            class="home-button w-[2.25rem] h-[2.25rem]"
            @click="emits('powerOn')"
        ></button>
    </div>
</template>

<script setup>
const emits = defineEmits(["powerOn"]);
</script>

<style lang="scss">
.bottom-navigator {
    height: 48px;
    .home-button {
        border-radius: 100%;
        border: 3px solid #e0e0e0;
        margin: 6px 0px;
    }
}
</style>
