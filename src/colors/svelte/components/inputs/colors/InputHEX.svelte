<script lang="ts">
  import type { HEX } from 'color-convert/conversions'
  import InputString from '@svelte/components/inputs/base/InputString.svelte'

  type Props = {
    value: HEX
    onInput: (value: HEX) => void
  }

  const { value, onInput }: Props = $props()

  let hex = $state(value)

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onInput(hex)
    }
  }

  const onBlur = () => {
    onInput(hex)
  }
</script>

<InputString {value} title="HEX" maxLength={6} onInput={(hexNew: HEX) => (hex = hexNew)} {onKeyUp} {onBlur} />
