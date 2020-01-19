const COLORS = {
  GREEN: 'green',
  BLUE: 'blue',
  YELLOW: 'yellow',
  RED: 'red',
  ORANGE: 'orange',
  NONE: '#333333'
}

const rand = (n) => Math.floor(Math.random() * n)

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = rand(i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const colors = () => [
  COLORS.GREEN,
  COLORS.GREEN,
  COLORS.GREEN,
  COLORS.GREEN,
  COLORS.GREEN,
  COLORS.BLUE,
  COLORS.BLUE,
  COLORS.BLUE,
  COLORS.BLUE,
  COLORS.BLUE,
  COLORS.YELLOW,
  COLORS.YELLOW,
  COLORS.YELLOW,
  COLORS.YELLOW,
  COLORS.YELLOW,
  COLORS.RED,
  COLORS.RED,
  COLORS.RED,
  COLORS.RED,
  COLORS.RED,
  COLORS.ORANGE,
  COLORS.ORANGE,
  COLORS.ORANGE,
  COLORS.ORANGE,
  COLORS.ORANGE,
]

const original = () => [
  [
    { color: null },
    { color: null },
    { color: null },
    { color: null },
    { color: null },
  ],
  [
    { color: null },
    { color: null },
    { color: null },
    { color: null },
    { color: null },
  ],
  [
    { color: null },
    { color: null },
    { color: null },
    { color: null },
    { color: null },
  ],
  [
    { color: null },
    { color: null },
    { color: null },
    { color: null },
    { color: null },
  ],
  [
    { color: null },
    { color: null },
    { color: null },
    { color: null },
    { color: null },
  ]
]

const reduce = (items) => items.reduce((acc, y, yIndex) => {
  const z = y.reduce((acc2, x, xIndex) =>
    [...acc2, {
      x: xIndex,
      y: yIndex,
      ...x,
      id: `${xIndex}${yIndex}`,
      isNext: false,
    }]
    , [])
  return [...acc, ...z]
}, [])


export const getBoardData = () => {
  const a = reduce(original())

  const b = shuffle(colors())
  const c = rand(b.length)
  const d = a.map((i, idx) => {
    if (c === idx) {
      return { ...i, color: null }
    }
    return { ...i, color: b[idx] }
  })
  return d
}

export const getBoardTarget = () => {
  const a = reduce(original())
  const b = shuffle(colors())
  const d = a.map((i, idx) => {
    if ([0, 4].includes(i.x) || [0, 4].includes(i.y)) {
      return { ...i, color: COLORS.NONE }
    }
    return { ...i, color: b[idx] }
  })
  return d
}
