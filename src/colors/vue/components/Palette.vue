<script setup lang="ts">
import { bgColorHSL } from '@vue/helpers/style'
import { palette, setSelected, swapPaletteColors } from '@vue/store'
import { DragDropSort } from '@lib/sort'

const dds = new DragDropSort()

const onSort = () => {
  const {drag, drop} = dds.dragEnd()
  if (!drag || !drop) return
  const colorNameDrag = drag.getAttribute('title')
  const colorNameDrop = drop.getAttribute('title')
  if (!colorNameDrag || !colorNameDrop) return
  swapPaletteColors(colorNameDrag, colorNameDrop)
}
</script>

<template>
  <div class="palette">
    <div
      class="color"
      draggable="true"
      v-for="color in palette"
      :key="color.name"
      :title="color.name"
      :style="bgColorHSL(color.hsl)"
      @click="setSelected(color)"
      @dragstart="dds.dragStart"
      @dragover="dds.dragOver"
      @dragend="onSort"
    ></div>
  </div>
</template>

<style scoped>
.palette {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: start;
  gap: 16px;
}
.color {
  width: 96px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid var(--color-dark);
  cursor: pointer;
}
</style>
