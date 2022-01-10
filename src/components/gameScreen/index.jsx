import React, { useEffect, useReducer, useState } from 'react'
import { Template, GameBox, Container, Warning, Wrap, Text, Button } from './style'
import GamePiece from '../gamePiece'
import reducer from './reducer';
import DropPiece from '../dropPiece';
import DragPiece from '../dragPiece';
import GameOver from '../../utils/isGameOver';

export default function GameScreen() {
    const [game, dispatch] = useReducer(reducer,[]);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        if (!isGameOver) {
            dispatch({type: 'START'})
        }
    }, [isGameOver]);

    useEffect(() => {
        setIsGameOver(GameOver(game));
    }, [game]);

    return (
        <Template>
            {isGameOver && 
                <Wrap>
                    <Warning>
                        <Text>Acabou o jogo!</Text>
                        <Button onClick={() => setIsGameOver(false)}>Recomeçar!</Button>
                    </Warning>
                </Wrap>
            }
            <Container>
                <GameBox>
                    {game.map((obj) => {
                        //console.log(game)
                        return obj.value === 0 ? <DropPiece key={0} /> :
                        obj.drag ? <DragPiece dispatch={dispatch} drag={obj.drag} key={obj.value} number={obj.value} /> :
                        <GamePiece key={obj.value} number={obj.value} />
                    })}
                </GameBox>
            </Container>
        </Template>
    )
}
