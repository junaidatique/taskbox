import React from 'react'
import ReactDom from 'react-dom'
import { WithPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  ReactDom.render(<WithPinnedTasks />, div);

  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)');
  expect(lastTaskInput).not.toBe(null);

  ReactDom.unmountComponentAtNode(div);

})