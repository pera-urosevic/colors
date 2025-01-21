export class DragDropSort {
  #drag: HTMLElement | undefined
  #drop: HTMLElement | undefined

  constructor() {
    this.#drag = undefined
    this.#drop = undefined
  }

  isBefore(el: HTMLElement) {
    if (!this.#drag) return false
    if (el.parentNode === this.#drag.parentNode) {
      for (let cur = this.#drag.previousSibling; cur; cur = cur.previousSibling) {
        if (cur === el) return true
      }
    }
    return false
  }

  dragStart(e: DragEvent) {
    if (e.dataTransfer) {
      e.dataTransfer.setData('text', '')
      e.dataTransfer.effectAllowed = 'move'
    }
    const target = e.target as HTMLElement
    this.#drag = target
  }

  dragOver(e: DragEvent) {
    e.preventDefault()
    if (!this.#drag) return
    const target = e.target as HTMLElement
    this.#drop = target
  }

  dragEnd() {
    const payload = {
      drag: this.#drag,
      drop: this.#drop,
    }
    this.#drag = undefined
    this.#drop = undefined
    return payload
  }
}
