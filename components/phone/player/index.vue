<template>
    <div
        class="audio-container flex flex-col px-3 w-[94%] text-white items-center text-center rounded-2xl py-3 mt-1"
    >
        <PhonePlayerInfo />
        <PhonePlayerController />
    </div>
</template>

<script setup></script>

<style lang="scss">
.audio-container {
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, 0.5);

    .button-container {
        &.play {
            .play-button {
                transition: all 0.2s;
                transition-delay: 0s;

                transform: translateX(-50%) scale(0);
                opacity: 0;
            }
            .pause-button {
                transition: all 0.2s;
                transition-delay: 0.2s;

                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
        }
        &.pause {
            .pause-button {
                transition: all 0.2s;
                transition-delay: 0s;

                transform: translateX(-50%) scale(0);
                opacity: 0;
            }
            .play-button {
                transition: all 0.2s;
                transition-delay: 0.2s;

                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
        }
        .audio-button {
            top: 0;
            left: 50%;
            transform: translateX(-50%) scale(0);
            opacity: 0;
        }
    }

    .airpod {
        position: absolute;
        color: rgba(255, 255, 255, 0.5);
        right: 0.5rem;
    }
}
</style>
