<script lang="ts">
  type Props = {
    value: string
    title: string
    maxLength?: number
    width?: number
    onInput: (value: string) => void
    onKeyUp?: (e: KeyboardEvent) => void
    onBlur?: () => void
  }

  const { value, title, maxLength = 20, width = 64, onInput, onKeyUp, onBlur }: Props = $props()

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    onInput(value)
  }
</script>

<input
  class="input-string"
  type="string"
  maxlength={maxLength}
  {value}
  {title}
  onchange={onChange}
  style={`width: ${width}px`}
  onkeyup={onKeyUp}
  onblur={onBlur}
/>

<style scoped>
  .input-string {
    text-align: right;
    font-size: 18px;
  }
</style>
