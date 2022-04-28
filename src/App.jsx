import React, { useState, useCallback, useEffect } from "react";
import * as S from "./styles";
import { getBoardData, getBoardTarget } from "./store";

import { changeItems, isInMatch } from "./helpers";

function App() {
  const [master] = useState(getBoardTarget());
  const [items] = useState(changeItems(getBoardData()));

  const [playerOneItems, setPlayerOneItems] = useState(items);
  const [playerTwoItems, setPlayerTwoItems] = useState(items);

  const [winner, setWinner] = useState(0);

  const changePosition = useCallback(
    (items, setItems, item, number) => {
      if (winner) {
        return;
      }
      if (!item || !item.isNext) {
        return;
      }
      const nextItems = changeItems(items, item);
      setItems(nextItems);
      if (isInMatch(nextItems, master)) {
        setWinner(number);
      }
    },
    [master, winner]
  );

  const playerOneEmptyItem = playerOneItems.find((i) => !i.color);
  const playerTwoEmptyItem = playerTwoItems.find((i) => !i.color);

  const playerOneMappedKeys = playerOneItems
    .filter((i) => i.isNext)
    .reduce((acc, i) => {
      if (i.x > playerOneEmptyItem.x) return { ...acc, 65: i };
      if (i.x < playerOneEmptyItem.x) return { ...acc, 68: i };
      if (i.y > playerOneEmptyItem.y) return { ...acc, 87: i };
      if (i.y < playerOneEmptyItem.y) return { ...acc, 83: i };
      return acc;
    }, {});

  const playerTwoMappedKeys = playerTwoItems
    .filter((i) => i.isNext)
    .reduce((acc, i) => {
      if (i.x > playerTwoEmptyItem.x) return { ...acc, 37: i };
      if (i.x < playerTwoEmptyItem.x) return { ...acc, 39: i };
      if (i.y > playerTwoEmptyItem.y) return { ...acc, 38: i };
      if (i.y < playerTwoEmptyItem.y) return { ...acc, 40: i };
      return acc;
    }, {});

  useEffect(() => {
    const upHandler = (e) => {
      const { keyCode } = e;
      changePosition(
        playerOneItems,
        setPlayerOneItems,
        playerOneMappedKeys[keyCode],
        1
      );
      changePosition(
        playerTwoItems,
        setPlayerTwoItems,
        playerTwoMappedKeys[keyCode],
        2
      );
    };

    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keyup", upHandler);
    };
  }, [
    changePosition,
    playerOneItems,
    playerOneMappedKeys,
    playerTwoItems,
    playerTwoMappedKeys,
  ]);

  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        {/* Player One */}
        <S.Wrapper>
          <S.Title>Player One {winner && winner === 1 ? "WINNER" : ""}</S.Title>
          <S.MiniBoard>
            {master.map((i, idx) => (
              <S.MiniItem
                key={i.id}
                style={{ left: `${i.x * 20}px`, top: `${i.y * 20}px` }}
                color={i.color}
                matched={playerOneItems[idx].color === i.color}
              />
            ))}
          </S.MiniBoard>
          <S.Board>
            {playerOneItems.map((i) => {
              if (!i.color) {
                return null;
              }
              return (
                <S.Item
                  key={i.id}
                  style={{ left: `${i.x * 60}px`, top: `${i.y * 60}px` }}
                  onClick={() =>
                    changePosition(playerOneItems, setPlayerOneItems, i)
                  }
                  color={i.color}
                  anime={i.current && i.position}
                />
              );
            })}
          </S.Board>
        </S.Wrapper>
        {/* Player Two */}
        <S.Wrapper>
          <S.Title>Player Two {winner && winner === 2 ? "WINNER" : ""}</S.Title>
          <S.MiniBoard>
            {master.map((i, idx) => (
              <S.MiniItem
                key={i.id}
                style={{ left: `${i.x * 20}px`, top: `${i.y * 20}px` }}
                color={i.color}
                matched={playerTwoItems[idx].color === i.color}
              />
            ))}
          </S.MiniBoard>
          <S.Board>
            {playerTwoItems.map((i) => {
              if (!i.color) {
                return null;
              }
              return (
                <S.Item
                  key={i.id}
                  style={{ left: `${i.x * 60}px`, top: `${i.y * 60}px` }}
                  onClick={() =>
                    changePosition(playerTwoItems, setPlayerTwoItems, i)
                  }
                  color={i.color}
                  anime={i.current && i.position}
                />
              );
            })}
          </S.Board>
        </S.Wrapper>
      </S.Container>
    </>
  );
}

export default App;
