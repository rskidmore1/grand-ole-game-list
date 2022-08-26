import React, { useState } from 'react';
import { Accordion } from '@mantine/core';
import EntryForm from './components/EntryForm';
import GameList from './components/GameList';
import { starterGames } from './data';

import './App.css';

function App() {
  const [games, setGames] = useState(starterGames);

  const handleSubmit = (event) => {
    games.some((game) => game.id === `${event.target[0].value?.split(' ')[0]}${event.target[1].value?.split(' ')[0]}`);

    if (games.some((game) => game.id === `${event.target[0].value?.toLowerCase().split(' ')[0]}${event.target[1].value?.toLowerCase().split(' ')[0]}`)) {
      // eslint-disable-next-line no-alert
      alert('That Publisher and Game already exists.');
    } else {
      setGames(games.concat(
        {
          id: `${event.target[0].value?.split(' ')[0]}${event.target[1].value?.split(' ')[0]}`,
          publisher: event.target[0].value,
          name: event.target[1].value,
          nickname: event.target[2].value,
          rating: event.target[3].value,
        },
      ));
    }

    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className="w-full mt-5">

      <div className="flex lg:flex-row flex-col lg:justify-center
         lg:items-start items-center gap-3"
      >
        <Accordion defaultValue="customization" className="lg:hidden">
          <Accordion.Item value="New Game">
            <Accordion.Control>New Game</Accordion.Control>
            <Accordion.Panel>

              <EntryForm handleSubmit={handleSubmit} />

            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <div className="lg:flex hidden ">

          <EntryForm handleSubmit={handleSubmit} />
        </div>

        <GameList games={games} />

      </div>
    </div>
  );
}

export default App;
