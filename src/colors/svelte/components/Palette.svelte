<script lang="ts">
  import { DragDropSort } from '@lib/sort'
  import Loading from '@svelte/components/Loading.svelte'
  import { bgColorHSL } from '@svelte/helpers/style'
  import { palette, setSelected, swapPaletteColors } from '@svelte/store'
  import { restorePalette } from '@svelte/store'
  import { onMount } from 'svelte'

  const dds = new DragDropSort()

  const onSort = () => {
    const { drag, drop } = dds.dragEnd()
    if (!drag || !drop) return
    const colorNameDrag = drag.getAttribute('title')
    const colorNameDrop = drop.getAttribute('title')
    if (!colorNameDrag || !colorNameDrop) return
    swapPaletteColors(colorNameDrag, colorNameDrop)
  }

  onMount(restorePalette)
</script>

{#if $palette}
  <div class="palette">
    {#each $palette as color (color.name)}
      <div
        class="color"
        draggable="true"
        title={color.name}
        style={bgColorHSL(color.hsl)}
        onclick={() => setSelected(color)}
        ondragstart={(e) => dds.dragStart(e)}
        ondragover={(e) => dds.dragOver(e)}
        ondragend={onSort}
        role="button"
      ></div>
    {/each}
  </div>
{:else}
  <Loading />
{/if}

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
