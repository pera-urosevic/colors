import type { HSL } from 'color-convert/conversions'

export const randomHSL = (): HSL => {
  return [
    Math.round(Math.random() * 36) * 10,
    Math.round(Math.random() * 4) * 10 + 30,
    Math.round(Math.random() * 4) * 10 + 30,
  ]
}
