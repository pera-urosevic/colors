<script setup lang="ts">
const props = defineProps<{
  value: string
  title: string
  maxLength?: number
  width?: number
}>()

const maxLength = props.maxLength ?? 20
const width = props.width ?? 64

const emit = defineEmits(['input'])

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('input', value)
}
</script>

<template>
  <input
    class="input-string"
    type="string"
    :maxlength="maxLength"
    :value="props.value"
    :title="props.title"
    @input="onInput"
    :style="{ width: `${width}px` }"
  />
</template>

<style scoped>
.input-string {
  text-align: right;
  font-size: 18px;
}
</style>
