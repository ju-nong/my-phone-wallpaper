<template>
    <div class="text-xs flex w-full justify-between">
        <div
            class="small-cover w-[40px] overflow-hidden rounded flex justify-center items-center"
            :class="audio.isFullScreen ? `active` : ``"
        >
            <!-- <NuxtImg
                :src="`/images/${audio.getAudio.cover}`"
                alt=""
                class="w-full h-[40px] object-cover cursor-pointer"
                @click="audio.toggleFullScreen()"
            /> -->
            <img
                :src="`/images/${audio.getAudio.cover}`"
                alt=""
                class="w-full h-[40px] object-cover cursor-pointer"
                @click="audio.toggleFullScreen()"
            />
        </div>
        <div
            class="audio-info w-[50%] flex flex-col items-center justify-center"
            :class="audio.isFullScreen ? `active` : ``"
        >
            <div class="flex w-full flex-wrap relative">
                <span class="relative">{{ audio.getAudio.info.title }}</span>
            </div>
            <div class="singer flex w-full flex-wrap relative">
                <span class="relative">{{ audio.getAudio.info.singer }}</span>
            </div>
        </div>
        <div
            id="waveform"
            class="w-[40px] waveform-container flex justify-center items-center"
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script setup>
const audio = useAudioStore();

// onMounted(() => {
//     const audio = new Audio("/audios/allthat.mp3");
//     audio.crossOrigin = "anonymous";
//     audio.loop = true;

//     const audioContext = new (window.AudioContext ||
//         window.webkitAudioContext)();
//     const analyser = audioContext.createAnalyser();
//     const source = audioContext.createMediaElementSource(audio);
//     source.connect(analyser);
//     analyser.connect(audioContext.destination);
//     analyser.fftSize = 64;

//     const bufferLength = analyser.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const container = document.getElementById("waveform");
//     const numberOfBars = 6;

//     // Create div elements for bars
//     for (let i = 0; i < numberOfBars; i++) {
//         const bar = document.createElement("div");
//         bar.className = "bar";
//         container.appendChild(bar);
//     }

//     function draw() {
//         requestAnimationFrame(draw);

//         analyser.getByteFrequencyData(dataArray);

//         for (let i = 0; i < numberOfBars; i++) {
//             const start = Math.floor((i * bufferLength) / numberOfBars);
//             const end = Math.floor(((i + 1) * bufferLength) / numberOfBars);
//             let max = 0;

//             for (let j = start; j < end; j++) {
//                 if (dataArray[j] > max) {
//                     max = dataArray[j];
//                 }
//             }

//             console.log(dataArray);

//             const barHeight = max * 2;
//             const minHeight = 5;
//             const bar = container.children[i];
//             const borderRadius = barHeight < minHeight ? "50%" : "50% 50% 0 0";

//             bar.style.height =
//                 barHeight < minHeight ? `${minHeight}px` : `${barHeight}px`;
//             bar.style.backgroundColor = `hsl(${
//                 (i / numberOfBars) * 400
//             }, 100%, 50%)`;
//             bar.style.borderRadius = borderRadius;
//         }
//     }

//     draw();
// });
</script>

<style lang="scss">
.small-cover {
    transition: all 0.5s;

    img {
        transition: all 0.5s;
    }

    &.active {
        opacity: 0;

        img {
            width: 0px;
            height: 0px;
        }
    }
}

.audio-info {
    div {
        span {
            transition: all 0.5s;
            left: 0;
            transform: translateX(0%);
        }

        &.singer {
            color: rgba(255, 255, 255, 0.6);
        }
    }

    &.active {
        div {
            span {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}

.waveform-container {
    column-gap: 1px;
    & > div {
        background-color: rgba(255, 255, 255, 0.4);
        width: 3px;
        height: 3px;
        border-radius: 3px;

        transition: all 0.3s;
    }
}
</style>
