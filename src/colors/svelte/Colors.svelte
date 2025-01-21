<script lang="ts">
  import Actions from '@svelte/components/Actions.svelte'
  import FullScreen from '@svelte/components/FullScreen.svelte'
  import Palette from '@svelte/components/Palette.svelte'
  import Picker from '@svelte/components/Picker.svelte'
</script>

<div>
  <div class="layout">
    <Picker />
    <Actions />
    <Palette />
  </div>
  <FullScreen />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 16px;
  }
</style>
