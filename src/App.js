import React, { useState } from 'react';
import * as S from './styles'
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
      <S.GlobalStyle />
      <S.Container>
        <S.Board>
          {items.map(i => {
            if (!i.color) {
              return null
            }
            return (
              <S.Item
                key={i.id}
                x={i.x}
                y={i.y}
                onClick={() => changePosition(i)}
                color={i.color}
                position={i.current && i.position}
              >
                
              </S.Item>
            )
          })}
        </S.Board>
        <S.Board mini>
          {master.map(i => {
            if (!i.color) {
              return null
            }
            return (
              <S.Item
                mini
                color={i.color}
                key={i.id}
                x={i.x}
                y={i.y}
              >
                <S.ItemInner mini
                  color={i.color}
                />
              </S.Item>
            )
          })}
        </S.Board>
      </S.Container >
    </>
  );
}

export default App;
