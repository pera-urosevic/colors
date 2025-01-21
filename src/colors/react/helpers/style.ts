import type { HSL } from 'color-convert/conversions'

export const bgColorHSL = (hsl: HSL) => {
  const style = { backgroundColor: `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` }
  return style
}
