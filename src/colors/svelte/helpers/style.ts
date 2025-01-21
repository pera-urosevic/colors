import type { HSL } from 'color-convert/conversions'

export const bgColorHSL = (hsl: HSL) => {
  const style = `background-color: hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
  return style
}
