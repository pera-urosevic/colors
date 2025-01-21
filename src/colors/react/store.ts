import { create } from 'zustand'
import type { HSL } from 'color-convert/conversions'
import type { Color } from '@/colors/lib/types'
import { randomHSL } from '@/colors/lib/color'
import { load, save } from '@/colors/lib/storage'

type ColorsStore = {
  hsl: HSL
  palette: Color[]
  selected: Color | null
  fullScreen: boolean
}

export const useColorsStore = create<ColorsStore>((set) => ({
  hsl: randomHSL(),
  palette: load(),
  selected: null,
  fullScreen: false,
}))

// hsl

export const setHSL = (newHSL: HSL) => {
  useColorsStore.setState({
    hsl: newHSL,
    selected: null,
  })
}

// palette

export const setPalette = (newPalette: Color[]) => {
  useColorsStore.setState({
    palette: newPalette
  })
  save(newPalette)
}

export const swapPaletteColors = (colorName1: string, colorName2: string) => {
  const paletteOld = useColorsStore.getState().palette
  const colorIndex1 = paletteOld.findIndex((c) => c.name === colorName1)
  const color1 = paletteOld[colorIndex1]
  const colorIndex2 = paletteOld.findIndex((c) => c.name === colorName2)
  const color2 = paletteOld[colorIndex2]
  if (!color1 || !color2) return
  const newPalette = [...paletteOld]
  newPalette[colorIndex1] = color2
  newPalette[colorIndex2] = color1
  useColorsStore.setState({
    palette: newPalette
  })
  save(newPalette)
}

// selected

export const setSelected = (colorNew: Color) => {
  useColorsStore.setState((state) => {
    if (colorNew === state.selected) {
      return {
        selected: null,
        hsl: randomHSL(),
      }
    }
    return {
      selected: colorNew,
      hsl: colorNew.hsl,
    }
  })
}

export const unsetSelected = () => {
  useColorsStore.setState({
    selected: null,
    hsl: randomHSL(),
  })
}

// full screen

export const toggleFullScreen = async () => {
  let { fullScreen } = useColorsStore.getState()
  fullScreen = !fullScreen
  if (fullScreen) {
    await document.documentElement.requestFullscreen()
  } else {
    await document.exitFullscreen()
  }
  useColorsStore.setState({ fullScreen })
}
