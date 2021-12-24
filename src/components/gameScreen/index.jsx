import React, { useEffect, useReducer } from 'react'
import {Template, GameBox, Container} from './style'
import GamePiece from '../gamePiece'
import reducer from './reducer';

export default function GameScreen() {
    const [game, dispatch] = useReducer(reducer,[1,2,3]);

    useEffect(() => {
        dispatch({type: 'START'})
    }, []);

    return (
        <Template>
            <Container>
                <GameBox>
                    {game.map((obj) => {
                        console.log(game)
                        return <GamePiece number={obj.value}/>
                    })}
                </GameBox>
            </Container>
        </Template>
    )
}
