<template>
    <div class="top-navigator h-[3rem] flex items-center justify-center">
        <div class="speaker w-[2.5rem] h-[0.25rem] relative"></div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.top-navigator {
    .speaker {
        background-color: #000;
        border-radius: 3rem;

        &::before {
            content: "";
            width: 0.5rem;
            border-radius: 100%;
            aspect-ratio: 1/1;
            position: absolute;
            left: -1rem;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #000;
        }

        &::after {
            content: "";
            width: 0.25rem;
            border-radius: 100%;
            aspect-ratio: 1/1;
            position: absolute;
            left: 50%;
            top: -0.75rem;
            transform: translate(-50%, -50%);
            background-color: #000;
        }
    }
}
</style>
