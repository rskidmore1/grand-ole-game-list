/* eslint-disable react/prop-types */
import React from 'react';

import { Input } from '@mantine/core';

export default function EntryForm({ handleSubmit }) {
  return (

    <form
      className="flex flex-col border-2 border-black
    rounded-[40px] h-[340px] p-5 gap-1 items-center"
      onSubmit={handleSubmit}
    >

      <p>Publisher</p>
      <Input />

      <p>Name</p>
      <Input />

      <p>Nickname</p>
      <Input />

      <p>Rating</p>
      <Input />
      <input type="submit" value="Submit" className="px-2 py-1 rounded-md border-[1px] cursor-pointer" />

    </form>
  );
}
