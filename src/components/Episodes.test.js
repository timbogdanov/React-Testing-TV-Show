import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

const showData = [
  {
    id: 553946,
    image: '',
    name: 'chapter one',
    season: 1,
    number: 1,
    summary: 'words',
    runtime: 60,
  },
  {
    id: 553947,
    image: '',
    name: 'chapter two',
    season: 2,
    number: 2,
    summary: 'words',
    runtime: 60,
  },
];

test('Renders with episode data', () => {
  const { queryAllByTestId } = render(<Episodes episodes={showData} />);

  expect(queryAllByTestId(/episode-list/i)).toHaveLength(2);
});

test("Doesn't render without data", () => {
  const { queryAllByTestId } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId(/episode-list/i)).toHaveLength(0);
});
