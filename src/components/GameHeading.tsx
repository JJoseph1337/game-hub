import React from 'react'
import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginLeft={4} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading