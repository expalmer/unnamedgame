import React, { useState } from 'react';
import * as styles from './styles'
import { getBoardData, getBoardTarget } from './store'

import { changeItems, isInMatch } from './helpers'

function App() {

  const [items, setItems] = useState(changeItems(getBoardData()))
  const [master] = useState(getBoardTarget())
  const [matched, setMatched] = useState(false)
  // const [go, setGo] = useState(-1)

  const changePosition = (item) => {
    if (!item.isNext) {
      return
    }
    const nextItems = changeItems(items, item)
    const isMatch = isInMatch(nextItems, master)
    setMatched(isMatch)
    setItems(nextItems)
  }

  return (
    <>
      <styles.GlobalStyle />
      <styles.Container>
        <styles.Board mini>
          {items.map(i => {
            if (!i.color) {
              return null
            }
            return (
              <styles.Item
                mini
                key={i.id}
                x={i.x}
                y={i.y}
                onClick={() => changePosition(i)}
              >
                <styles.ItemInner color={i.color} mini />
              </styles.Item>
            )
          })}
        </styles.Board>
        <styles.Board>
          {items.map(i => {
            if (!i.color) {
              return null
            }
            return (
              <styles.Item
                key={i.id}
                x={i.x}
                y={i.y}
                onClick={() => changePosition(i)}
              >
                <styles.ItemInner
                  color={i.color}
                  isLeft={i.current && console.log(i) && i.isLeft}
                  isRight={i.current && i.isRight}
                  isTop={i.current && i.isTop}
                  isBottom={i.current && i.isBottom}
                />
              </styles.Item>
            )
          })}
        </styles.Board>
        {/* <styles.Board>
        {master.map(i => {
          if (!i.color) {
            return null
          }
          return (
            <styles.Item
            color={i.color}
            key={i.id}
            x={i.x}
            y={i.y}
            onClick={() => changePosition(i)}
            >
            </styles.Item>
            )
          })}
        <styles.Square /> */}
        {/* </styles.Board> */}
      </styles.Container >
    </>
  );
}

export default App;
