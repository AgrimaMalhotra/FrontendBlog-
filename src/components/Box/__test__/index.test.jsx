import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import Box from '..';

const Data = {
  date: '2nd Januray, 2018',
  readingTime: '2 mins',
  title: 'The future of abstract art and the culture ...',
  description:
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
  claps: 10,
  liked: false,
  image: 'abstract.png',
};

describe('Box', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Box {...Data} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should change to red heart on clicking black heart', () => {
    render(<Box {...Data} />);
    expect(screen.queryByAltText('black heart').src).toContain(
      'heart-black.svg'
    );
    fireEvent.click(screen.queryByAltText('black heart'));
    expect(screen.queryByAltText('red heart').src).toContain('heart-red.svg');
  });
  it('should change to black heart on clicking red heart', () => {
    Data.liked = !Data.liked;
    render(<Box {...Data} />);
    expect(screen.queryByAltText('red heart').src).toContain('heart-red.svg');
    fireEvent.click(screen.queryByAltText('red heart'));
    expect(screen.queryByAltText('black heart').src).toContain(
      'heart-black.svg'
    );
  });

  it('should increase clap count on clicking clap button', () => {
    render(<Box {...Data} />);
    expect(screen.getByText(Data.claps.toString())).toBeTruthy();
    fireEvent.click(screen.queryByAltText('Clap'));
    expect(screen.getByText((Data.claps + 1).toString())).toBeTruthy();
  });
});
