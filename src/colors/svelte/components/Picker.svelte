<script lang="ts">
  import convert from 'color-convert'
  import { bgColorHSL } from '@svelte/helpers/style'
  import type { HEX, HSL, RGB } from 'color-convert/conversions'
  import InputHEX from '@svelte/components/inputs/colors/InputHEX.svelte'
  import { hsl, setHSL, toggleFullScreen } from '@svelte/store'
  import InputHSL from '@svelte/components/inputs/colors/InputHSL.svelte'
  import InputRGB from '@svelte/components/inputs/colors/InputRGB.svelte'

  const rgb = $derived(convert.hsl.rgb($hsl))
  const hex = $derived(convert.hsl.hex($hsl))

  const onHSL = (newHSL: HSL) => {
    setHSL(newHSL)
  }

  const onRGB = (newRGB: RGB) => {
    const newHSL: HSL = convert.rgb.hsl(newRGB)
    setHSL(newHSL)
  }

  const onHEX = (newHEX: HEX) => {
    const newHSL: HSL = convert.hex.hsl(newHEX)
    setHSL(newHSL)
  }
</script>

<div class="picker">
  <button class="preview" style={bgColorHSL($hsl)} onclick={toggleFullScreen}></button>
  <div class="controls">
    <div class="format">
      <div class="name">HSL</div>
      <InputHSL value={$hsl} onInput={onHSL} />
    </div>
    <div class="format">
      <div class="name">RGB</div>
      <InputRGB value={rgb} onInput={onRGB} />
    </div>
    <div class="format">
      <div class="name">HEX</div>
      <InputHEX value={hex} onInput={onHEX} />
    </div>
  </div>
</div>

<style scoped>
  .picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 12px;
  }
  .preview {
    width: 320px;
    height: 160px;
    border-radius: 6px;
    border: none;
  }
  .controls {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .format {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 12px;
    .name {
      width: 40px;
    }
  }
  input[type='color'] {
    cursor: pointer;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
</style>
