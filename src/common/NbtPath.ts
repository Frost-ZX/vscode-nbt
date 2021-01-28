export class NbtPath {
  constructor(public arr: (string | number)[] = []) {}

  public pop(count = 1) {
    return new NbtPath(this.arr.slice(0, -count))
  }

  public shift(count = 1) {
    return new NbtPath(this.arr.slice(count))
  }

  public push(...el: (string | number)[]) {
    return new NbtPath([...this.arr, ...el])
  }

  public head() {
    return this.arr[0]
  }

  public last() {
    return this.arr[this.arr.length - 1]
  }

  public length() {
    return this.arr.length
  }

  public startsWith(other: NbtPath) {
    return other.arr.every((e, i) => this.arr[i] === e)
  }

  public toString() {
    return this.arr
      .map(e => (typeof e === 'string') ? `.${e}` : `[${e}]`)
      .join('')
      .replace(/^\./, '')
  }
}
