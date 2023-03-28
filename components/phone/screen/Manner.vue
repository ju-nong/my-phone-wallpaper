<template>
    <div class="maner-container fixed top-2 flex z-[50]">
        <Icon name="ion:md-notifications" class="on" />
        <Icon name="ion:md-notifications-off" class="off" />
    </div>
</template>

<script setup></script>

<style lang="scss">
.maner-container {
    background-color: rgba(51, 41, 23, 1);
    border-radius: 10px;

    .on {
        color: rgba(161, 157, 155, 1);
    }

    .off {
        color: rgba(235, 85, 69, 1);
    }
}
</style>
