<template>
    <div
        class="right-navigator absolute w-[0.25rem] right-[-0.5rem] top-[5.75rem]"
    >
        <button
            class="power-button w-full h-[2.5rem]"
            @click="device.togglePower()"
        ></button>
    </div>
</template>

<script setup>
const device = useDeviceStore();
</script>

<style lang="scss">
.right-navigator {
    button {
        border-left: 1px solid #fffc;
        border-radius: 0 1rem 1rem 0;
        width: 100%;
        background-color: #e0e0e0;
    }
}
</style>
