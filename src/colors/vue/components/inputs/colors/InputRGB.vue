<script setup lang="ts">
import InputNumber from '@vue/components/inputs/base/InputNumber.vue'
import type { RGB } from 'color-convert/conversions'

const props = defineProps<{
  value: RGB
}>()

const emit = defineEmits(['input'])

const onRed = (newRed: number) => {
  const newRGB: RGB = [newRed, props.value[1], props.value[2]]
  emit('input', newRGB)
}

const onGreen = (newGreen: number) => {
  const newRGB: RGB = [props.value[0], newGreen, props.value[2]]
  emit('input', newRGB)
}

const onBlue = (newBlue: number) => {
  const newRGB: RGB = [props.value[0], props.value[1], newBlue]
  emit('input', newRGB)
}
</script>

<template>
  <InputNumber :value="props.value[0]" title="Red" :max="255" @input="onRed" />
  <InputNumber :value="props.value[1]" title="Green" :max="255" @input="onGreen" />
  <InputNumber :value="props.value[2]" title="Blue" :max="255" @input="onBlue" />
</template>
