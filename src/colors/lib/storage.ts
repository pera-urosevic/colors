import type { Color } from '@lib/types'

export const load = (): Color[] => {
  const json = localStorage.getItem('palette') || '[]'
  const newPalette = JSON.parse(json) as Color[]
  return newPalette
}

export const save = (colors: Color[]) => {
  localStorage.setItem('palette', JSON.stringify(colors))
}
