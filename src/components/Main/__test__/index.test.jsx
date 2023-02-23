import {
  render,
  waitFor,
  screen,
  getAllByTestId,
} from '@testing-library/react';
import * as React from 'react';
import Main from '..';
import mockBlogPostData from '../../../mocks/blogPosts';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');

// .then error as makeRequest not resolved -> not mocked -> undefined

describe('Main Grid', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should show cards when data is loaded', async () => {
    makeRequest.mockResolvedValue(mockBlogPostData);
    render(<Main />);
    await waitFor(() => {
      expect(getAllByTestId('blog-post')).toHaveLength(2);
    });
  });
});
