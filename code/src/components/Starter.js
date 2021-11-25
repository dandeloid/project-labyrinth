import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { startMaze } from "../reducers/maze"

/* import { NavButton } from "styling/styling" */

// Styled components

const StartContainer = styled.div`
  max-width: 500px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  text-align: center;
`
const InputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const StyledInput = styled.input`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  width: 100%;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  border: none;
`
const NavButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  width: 60px;
  padding: 10px;
    &:hover{
      transform: scale(1.1);
    }
`
const TitleH = styled.h1`
  font-weight: 500;
`
const TextP1 = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`
const TextP2 = styled.p`
  font-style: italic;
`

// Starter component
export const Starter = () => {
  const [userName, setUserName] = useState("")
  const user = useSelector(store => store.maze.username)
  console.log("user", user) // CONSOLE

  const dispatch = useDispatch()

  const startGame = () => {
    dispatch(startMaze(userName))
  }

  const checkKey = event => {
    if (event.keyCode === 13 && !event.shiftKey) {
      startGame(event)
    }
  }

  return (
    <StartContainer>
      <TitleH>
        Welcome to our amazing maze. See if you can find you way out of it.
      </TitleH>
      <TextP2>Start with entering your name.</TextP2>
      <InputContainer>
        <StyledInput
          type="text"
          value={userName}
          /* placeholder="Enter your username here" */
          onChange={event => setUserName(event.target.value)}
          onKeyDown={event => checkKey(event)}
        />
        <NavButton onClick={startGame}> Start </NavButton>
      </InputContainer>
      <TextP1>Good luck!</TextP1>
    </StartContainer>
  )
}
