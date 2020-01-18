import React, { useState } from 'react';
import * as S from './styles'
import { getBoardData, getBoardTarget } from './store'

import { changeItems, isInMatch, inMatch } from './helpers'

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
        <S.MiniBoard>
          {master.map((i, idx) => (
            <S.MiniItem 
              key={i.id}
              style={{ left: `${i.x * 20}px`, top: `${i.y * 20}px`}}
              color={i.color}
              matched={items[idx].color === i.color}
            />
          ))}
        </S.MiniBoard>
        <S.Board>
          {items.map(i => {
            if (!i.color) {
              return null
            }
            return (
              <S.Item
                key={i.id}
                style={{ left: `${i.x * 60}px`, top: `${i.y * 60}px` }}
                onClick={() => changePosition(i)}
                color={i.color}
                anime={i.current && i.position}
              />
            )
          })}
        </S.Board>
        
      </S.Container >
    </>
  );
}

export default App;
