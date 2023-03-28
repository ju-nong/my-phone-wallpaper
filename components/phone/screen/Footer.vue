<template>
    <div
        class="footer-container flex items-center justify-between flex-col h-full"
    >
        <PhonePlayerCover />
        <PhonePlayer />
        <div class="flex items-center gap-x-1 mt-8">
            <Icon
                name="ic:baseline-circle"
                size="0.6rem"
                color="rgba(255, 255, 255, 1)"
            />
            <Icon
                name="material-symbols:android-camera"
                size="1rem"
                color="rgba(255, 255, 255, 0.5)"
            />
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss"></style>
