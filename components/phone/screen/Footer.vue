<template>
    <div
        class="footer-container flex items-center justify-end flex-col h-full py-1"
    >
        <div
            class="music-container flex flex-col p-2 w-[94%] text-white items-center text-center rounded-2xl"
        >
            <div class="text-xs flex w-full p-1">
                <div class="w-[40px] h-[40px] overflow-hidden rounded">
                    <img
                        src="~/assets/images/test.jpeg"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                </div>
                <div
                    class="w-[60%] text-left px-3 flex flex-col justify-center"
                >
                    <p>등대</p>
                    <p class="singer">하현상</p>
                </div>
                <div class="w-[20%]">이미지</div>
            </div>
            <div>호호</div>
            <div class="flex"></div>
        </div>
        <div class="flex items-center gap-x-1">
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

<style lang="scss">
.music-container {
    transition: all 0.3s;
    background-color: rgba(0, 0, 0, 0.5);

    .singer {
        color: rgba(255, 255, 255, 0.5);
    }
}

.footer-container {
    /* border: 1px solid #fff; */
}
</style>
