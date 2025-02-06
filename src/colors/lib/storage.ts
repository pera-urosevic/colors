import { mockDelay } from '@lib/mock'
import type { Color } from '@lib/types'

// mock async storage

export const load = async (): Promise<Color[]> => {
  const json = localStorage.getItem('palette') || '[]'
  const newPalette = JSON.parse(json) as Color[]
  await mockDelay()
  return newPalette
}

export const save = async (colors: Color[]): Promise<void> => {
  localStorage.setItem('palette', JSON.stringify(colors))
  mockDelay()
}
