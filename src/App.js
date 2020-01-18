import React, { useState, useCallback, useEffect } from 'react';
import * as S from './styles'
import { getBoardData, getBoardTarget } from './store'

import { changeItems, isInMatch, inMatch } from './helpers'

function App() {

  const [items, setItems] = useState(changeItems(getBoardData()))
  const [master] = useState(getBoardTarget())
  const [matched, setMatched] = useState(false)

  const changePosition = useCallback((item) => {
    if (!item || !item.isNext) {
      return
    }
    const nextItems = changeItems(items, item)
    setMatched(isInMatch(nextItems, master))
    setItems(nextItems)
  }, [items, master])


  const emptyItem = items.find(i => !i.color)
  const mapped = items.filter(i => i.isNext).reduce((acc, i) => {
    if (i.x > emptyItem.x) return {...acc, '37': i }
    if (i.x < emptyItem.x) return {...acc, '39': i }
    if (i.y > emptyItem.y) return {...acc, '38': i }
    if (i.y < emptyItem.y) return {...acc, '40': i }
    return acc
  }, {})
  
  useEffect(() => {
    const upHandler = e => {
      const { keyCode } = e
      changePosition(mapped[keyCode])
    }    
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keyup', upHandler);
    };
  }, [changePosition, mapped]);
  
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
