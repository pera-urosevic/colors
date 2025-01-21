<script lang="ts">
  type Props = {
    value: number
    title: string
    min?: number
    max?: number
    step?: number
    width?: number
    onInput: (value: number) => void
  }

  const { value, title, min = 0, max = 100, step = 1, width = 64, onInput }: Props = $props()

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const value = Number(target.value)
    onInput(value)
  }
</script>

<input
  class="input-number"
  type="number"
  {min}
  {max}
  {step}
  {value}
  {title}
  onchange={onChange}
  style={`width: ${width}px`}
/>

<style scoped>
  .input-number {
    text-align: right;
    font-size: 18px;
    appearance: textfield;
    -moz-appearance: textfield;
  }
</style>
