<script setup lang="ts">
defineProps<{
    text: string
    class: string
    onClick: () => void | null
}>()
</script>

<template>
    <button
        :class="class"
        @click="onClick"
    >
        {{ text }}
    </button>
</template>