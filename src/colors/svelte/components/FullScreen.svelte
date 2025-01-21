<script lang="ts">
  import { bgColorHSL } from '@svelte/helpers/style'
  import { fullScreen, hsl, toggleFullScreen } from '@svelte/store'
</script>

<button
  style={bgColorHSL($hsl)}
  class={$fullScreen ? 'fullscreen show' : 'fullscreen hide'}
  onclick={toggleFullScreen}
  aria-label="Toggle Fullscreen"
></button>

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
