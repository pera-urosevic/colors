<script setup lang="ts">
import Actions from '@vue/components/Actions.vue'
import FullScreen from '@vue/components/FullScreen.vue'
import Palette from '@vue/components/Palette.vue'
import Picker from '@vue/components/Picker.vue'
</script>

<template>
  <div class="layout">
    <Picker />
    <Actions />
    <Palette />
  </div>
  <FullScreen />
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 16px;
}
</style>
