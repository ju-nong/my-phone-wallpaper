<template>
    <div class="bottom-navigator h-[3rem] flex items-center justify-center">
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
    .home-button {
        border-radius: 100%;
        border: 3px solid #e0e0e0;
    }
}
</style>
