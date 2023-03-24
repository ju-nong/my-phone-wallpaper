<template>
    <div
        class="phone-container w-[100vw] h-[100vh] overflow-hidden flex items-center justify-center"
    >
        <div class="phone relative w-full max-w-[250px] px-2">
            <div
                class="left-navigator absolute w-[0.25rem] left-[-0.5rem] top-[3.25rem]"
            >
                <button class="switch h-[1.5rem]"></button>
                <button class="volume-up-button h-[2.5rem] mt-3 mb-2"></button>
                <button class="volume-down-button h-[2.5rem]"></button>
            </div>
            <div
                class="top-navigator h-[3rem] flex items-center justify-center"
            >
                <div class="speaker w-[2.5rem] h-[0.25rem] relative"></div>
            </div>
            <div
                class="right-navigator absolute w-[0.25rem] right-[-0.5rem] top-[5.75rem]"
            >
                <button class="power-button w-full h-[2.5rem]"></button>
            </div>
            <div class="screen w-full overflow-auto relative">
                <div
                    class="off-screen w-full h-full left-0 top-0 absoulte bg-black z-[100]"
                ></div>
            </div>
            <div
                class="bottom-navigator h-[3rem] flex items-center justify-center"
            >
                <button class="home-button w-[2.25rem] h-[2.25rem]"></button>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.phone-container {
    .phone {
        border: 1px solid #000;
        aspect-ratio: 1/1.9;
        border-radius: 1.5rem;
        border: 0.25rem solid #e0e0e0;
        .left-navigator,
        .right-navigator {
            button {
                width: 100%;
                background-color: #e0e0e0;
            }

            &.left-navigator button {
                border-right: 1px solid #fffc;
                border-radius: 1rem 0 0 1rem;
            }

            &.right-navigator button {
                border-left: 1px solid #fffc;
                border-radius: 0 1rem 1rem 0;
            }
        }

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

        .screen {
            aspect-ratio: 1/1.7;
            border: 1px solid #000;
            border-radius: 0.25rem;
        }

        .bottom-navigator {
            .home-button {
                border-radius: 100%;
                border: 3px solid #e0e0e0;
            }
        }
    }
}
</style>
