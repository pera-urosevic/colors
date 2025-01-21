<script lang="ts">
  import { palette, selected, hsl, setPalette, unsetSelected } from '@svelte/store'
  import type { Color } from '@lib/types'

  const add = (color: Color) => {
    if ($palette.find((c) => c.name === color.name)) {
      alert('Color name already exists')
      return
    }
    const paletteNew = [...$palette, color]
    setPalette(paletteNew)
  }

  const remove = (color: Color) => {
    const paletteNew = $palette.filter((c) => c !== color)
    setPalette(paletteNew)
  }

  const onSave = async () => {
    const name = prompt('Color Name?')
    if (!name) return
    const colorNew = { name, hsl: $hsl }
    add(colorNew)
  }

  const onRemove = async () => {
    const cs = $selected
    if (!cs) return
    const confirmed = confirm(`Are you sure you want to remove color "${cs.name}"?`)
    if (!confirmed) return
    remove(cs)
    unsetSelected()
  }
</script>

<div class="actions">
  <button onclick={onSave}>Add</button>
  <button onclick={onRemove} disabled={!$selected}>Remove</button>
</div>

<style scoped>
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
</style>
