import React, { useEffect, useReducer } from 'react'
import {Template, GameBox, Container} from './style'
import GamePiece from '../gamePiece'
import reducer from './reducer';
import DropPiece from '../dropPiece';
import DragPiece from '../dragPiece';

export default function GameScreen() {
    const [game, dispatch] = useReducer(reducer,[]);

    useEffect(() => {
        dispatch({type: 'START'})
    }, []);

    return (
        <Template>
            <Container>
                <GameBox>
                    {game.map((obj) => {
                        console.log(game)
                        return obj.value === 0 ? <DropPiece key={0} /> :
                        obj.drag ? <DragPiece drag={obj.drag} key={obj.value} number={obj.value} /> :
                        <GamePiece key={obj.value} number={obj.value} />
                    })}
                </GameBox>
            </Container>
        </Template>
    )
}
