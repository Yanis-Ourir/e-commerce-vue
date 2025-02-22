<script setup lang="ts">
    defineProps<{
        text: string
        name: string
        city: string
        rating: string
    }>()
</script>

<template>
    <div class="bg-gray-200 rounded-2xl p-4 w-[400px]">
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="size-6 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M5 11l2.285 1.428-2.285 1.428M12 9l2.285 1.428-2.285 1.428M19 7l2.285 1.428-2.285 1.428M5 16l2.285 1.428-2.285 1.428M12 14l2.285 1.428-2.285 1.428M19 12l2.285 1.428-2.285 1.428M5 21l2.285 1.428-2.285 1.428M12 19l2.285 1.428-2.285 1.428M19 17l2.285 1.428-2.285 1.428" />
            </svg>
            <p class="review__rating-number">{{ rating }}</p>
        </div>

        <div>
            <p>{{ text }}</p>
        </div>

        <div>
            <p class="font-bold">{{ name + ', ' + city }}</p>
        </div>
    </div>
</template>