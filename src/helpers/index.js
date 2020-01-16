const fnTheNext = (x) => x.find(i => i && i.color === null)
const fnIsNext = (a, b) => {
  const z = [+b.x - 1, +b.x + 1].includes(+a.x) && +a.y === +b.y
  const w = [+b.y - 1, +b.y + 1].includes(+a.y) && +a.x === +b.x
  return z || w
}

const inMatch = (a, b, idx) => a[idx].color === b[idx].color

export const isInMatch = (arrayA, arrayB) => [6, 7, 8, 11, 12, 13, 16, 17, 18].every(idx => inMatch(arrayA, arrayB, idx))

const makePositions = (a, b = null) => {
  if (!b) {
    return { isLeft: false, isRight: false, isTop: false, isBottom: false }
  }
  if (+a.x > +b.x) {
    return { isLeft: true, isRight: true, isTop: true, isBottom: true }
  }
  if (+a.x < +b.x) {
    return { isLeft: true, isRight: true, isTop: true, isBottom: true }
  }
  if (+a.y > +b.y) {
    return { isLeft: true, isRight: true, isTop: true, isBottom: true }
  }
  if (+a.y < +b.y) {
    return { isLeft: true, isRight: true, isTop: true, isBottom: true }
  }
  return { isLeft: true, isRight: false, isTop: false, isBottom: false }
}

export const changeItems = (items, item = null) => {
  const theEmpty = fnTheNext(items)

  const nextItems = items.map(i => {
    if (!item) {
      return { ...i }
    }
    if (+i.id === +item.id) {
      return { ...i, color: null, current: false, ...makePositions(i) }
    }
    if (+i.id === +theEmpty.id) {
      return { ...i, color: item.color, current: true, ...makePositions(i, theEmpty) }
    }
    return { ...i, current: false, ...makePositions(i) }
  })
  const nextTheEmpty = fnTheNext(nextItems)
  return nextItems.map(i => ({ ...i, isNext: fnIsNext(nextTheEmpty, i) }))
}
