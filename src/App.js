import React, { useState } from 'react';
import * as styles from './styles'
import { getBoardData, getBoardTarget } from './store'

import { changeItems, isInMatch } from './helpers'

function App() {

  const [items, setItems] = useState(changeItems(getBoardData()))
  const [master] = useState(getBoardTarget())
  const [matched, setMatched] = useState(false)

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
                  position={i.current && i.position}
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
