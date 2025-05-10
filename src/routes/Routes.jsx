// routes/Routes.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Dashboard from '../pages/Dashboard/Dashboard';
import ITRequest from '../pages/ITRequest/ITRequest';
import StaffDirectory from '../pages/StaffDirectory/StaffDirectory';
import Tickets from '../pages/Tickets/Tickets';
import TodoList from '../pages/TodoList/TodoList';

export default function Routes() {
  return (
    <Switch>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/it-request' component={ITRequest} />
      <Route path='/staff-directory' component={StaffDirectory} />
      <Route path='/todo-list' component={TodoList} />
      <Route path='/tickets' component={Tickets} />
    </Switch>
  );
}
