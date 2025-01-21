<script setup lang="ts">
import type { HEX } from 'color-convert/conversions'
import InputString from '@vue/components/inputs/base/InputString.vue'
import { ref } from 'vue'

const props = defineProps<{
  value: HEX
}>()

const hex = ref<string>(props.value)

const emit = defineEmits(['input'])

const onInput = (newHex: string) => {
  hex.value = newHex
}

const onSubmit = () => {
  emit('input', hex.value)
}
</script>

<template>
  <InputString :maxLength="6" :value="props.value" @input="onInput" @keyup.enter="onSubmit" @blur="onSubmit" title="HEX" />
</template>
