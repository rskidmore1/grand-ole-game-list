/* eslint-disable react/prop-types */
import React from 'react';

export default function GameList({ games }) {
  return (
    <div className="border-2 border-black rounded-[40px] lg:w-[450px] lg:h-[631px] w-[80vw] h-[80vh]">
      <div className="flex flex-row border-b-2 border-black h-12 place-content-center">
        <p className="text-[24px] pt-2.5">Games</p>
      </div>
      <div className="flex flex-col overflow-auto h-[80%] mx-2">
        {games.map((game) => (
          <div key={game.name + Math.random()} className="flex flex-col mb-3">
            <p>
              <span className="text-xl">
                {'  '}
                Name:
                {game.name}
              </span>

            </p>

            <p>
              Publisher:
              {game.publisher}
            </p>

            <p>
              Nickname:
              {game.nickname}
            </p>
            <p>

              Rating:
              {game.rating}

            </p>

          </div>

        ))}
      </div>
    </div>
  );
}
