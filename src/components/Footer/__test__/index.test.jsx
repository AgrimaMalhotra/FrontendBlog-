import { render } from '@testing-library/react';
import * as React from 'react';
import Footer from '..';

describe('Footer', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
