<script setup lang="ts">
import { bgColorHSL } from '@vue/helpers/style'
import { fullScreen, hsl, toggleFullScreen } from '@vue/store'

</script>

<template>
  <button :style="bgColorHSL(hsl)" :class="fullScreen ? 'fullscreen show' : 'fullscreen hide'" @click="toggleFullScreen"></button>
</template>

<style scoped>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border: none;
  border-radius: 0;
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
}
</style>
