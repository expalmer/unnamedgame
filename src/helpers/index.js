const getEmptyPosition = (x) => x.find(i => i && i.color === null)

const fnIsNext = (a, b) => {
  const z = [+b.x - 1, +b.x + 1].includes(+a.x) && +a.y === +b.y
  const w = [+b.y - 1, +b.y + 1].includes(+a.y) && +a.x === +b.x
  return z || w
}

const inMatch = (a, b, idx) => a[idx].color === b[idx].color

export const isInMatch = (arrayA, arrayB) => [6, 7, 8, 11, 12, 13, 16, 17, 18].every(idx => inMatch(arrayA, arrayB, idx))

export const changeItems = (items, item = null) => {

  const ept = getEmptyPosition(items)

  const nextItems = items.map(i => {
    if (!item) {
      return { ...i }
    }
    const { id, x, y, color } = item

    if (+i.id === +id) {
      return { ...i, color: null, current: false }
    }

    if (+i.id === +ept.id) {
      let position = '-'
      if (+x > +ept.x) {
        position = 'isLeft'
      } else if (+x < +ept.x) {
        position = 'isRight'
      } else if (+y > +ept.y) {
        position = 'isTop'
      } else if (+y < +ept.y) {
        position = 'isBottom'
      }

      return { ...i, color, current: true, position }
    }
    return { ...i, current: false }
  })
  const nextTheEmpty = getEmptyPosition(nextItems)
  return nextItems.map(i => ({ ...i, isNext: fnIsNext(nextTheEmpty, i) }))
}
