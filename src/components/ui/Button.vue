<script setup lang="ts">
defineProps<{
    text: string
    class: string
    disabled: boolean
    onClick: () => void
}>()
</script>

<template>
    <button
        :class="class"
        :disabled="disabled"
        @click="onClick"
    >
        {{ text }}
    </button>
</template>