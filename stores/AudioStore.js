import { defineStore } from "pinia";

export const useAudioStore = defineStore({
    id: "audio-store",
    state: () => ({
        track: [
            {
                cover: "cover1.jpg",
                audio: "allthat.mp3",
                info: { title: "allthat", singer: "누운 아리" },
            },
            {
                cover: "cover2.jpg",
                audio: "creativeminds.mp3",
                info: { title: "creativeminds", singer: "맛있는 파스타" },
            },
            {
                cover: "cover3.jpg",
                audio: "dreams.mp3",
                info: { title: "dreams", singer: "당돌한 아리" },
            },
            {
                cover: "cover4.jpg",
                audio: "evolution.mp3",
                info: { title: "evolution", singer: "금강" },
            },
            {
                cover: "cover5.jpg",
                audio: "hey.mp3",
                info: { title: "hey", singer: "용숙이" },
            },
            {
                cover: "cover6.jpg",
                audio: "inspire.mp3",
                info: { title: "inspire", singer: "오아리" },
            },
        ],
        fullScreen: false,
        nowTrack: 0,
    }),
    getters: {
        getAudio: (state) => state.track[state.nowTrack],
        isFullScreen: (state) => state.fullScreen,
        getTrackNumber: (state) => state.nowTrack,
    },
    actions: {
        next() {
            if (this.nowTrack === this.track.length - 1) {
                this.nowTrack = 0;
            } else {
                ++this.nowTrack;
            }
        },
        prev() {
            if (this.nowTrack === 0) {
                this.nowTrack = this.track.length;
            } else {
                --this.nowTrack;
            }
        },
        toggleFullScreen() {
            this.fullScreen = !this.fullScreen;
        },
    },
});
