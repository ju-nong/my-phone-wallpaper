<template>
    <div class="phone relative w-full px-2 bg-white">
        <PhoneNavigatorLeft />
        <PhoneNavigatorRight />
        <PhoneNavigatorTop />
        <PhoneScreen />
        <PhoneNavigatorBottom />
    </div>
</template>

<script setup></script>

<style lang="scss">
.phone {
    aspect-ratio: 1/1.9;
    border-radius: 1.5rem;
    border: 0.25rem solid #e0e0e0;

    width: 250px;
}
</style>
