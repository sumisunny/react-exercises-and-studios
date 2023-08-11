import React, { useState } from 'react';

export default function BoardAssignment() {
  const boards = [
    { label: 'Board 1', value: 'board1' },
    { label: 'Board 2', value: 'board2' },
    { label: 'Board 3', value: 'board3' }
  ];

  const [boardName, setBoardName] = useState('no boards yet!');

  const handleChange = (event) => {
    setBoardName(event.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((board) => (
          <option value={board.value} key={board.value}>
            {board.label}
          </option>
        ))}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
