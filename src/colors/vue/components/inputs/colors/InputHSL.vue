<script setup lang="ts">
import InputNumber from '@vue/components/inputs/base/InputNumber.vue'
import type { HSL } from 'color-convert/conversions'

const props = defineProps<{
  value: HSL
}>()

const emit = defineEmits(['input'])

const onHue = (newHue: number) => {
  const newHSL: HSL = [newHue, props.value[1], props.value[2]]
  emit('input', newHSL)
}

const onSaturation = (newSaturation: number) => {
  const newHSL: HSL = [props.value[0], newSaturation, props.value[2]]
  emit('input', newHSL)
}

const onLightness = (newLightness: number) => {
  const newHSL: HSL = [props.value[0], props.value[1], newLightness]
  emit('input', newHSL)
}
</script>

<template>
  <InputNumber :value="props.value[0]" title="Hue" :max="360" @input="onHue" />
  <InputNumber :value="props.value[1]" title="Saturation" @input="onSaturation" />
  <InputNumber :value="props.value[2]" title="Lightness" @input="onLightness" />
</template>
