import React from 'react';
import TodoSearch from '../TodoList/TodoSearch';
import TodoTable from '../TodoList/TodoTable';



export default function TodoList() {
  return (
    <div className="p-20 md:p-10 space-y-6">
      <TodoSearch />
      <TodoTable />
    </div>
  );
}
