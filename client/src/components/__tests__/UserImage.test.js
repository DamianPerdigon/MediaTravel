import React from 'react';
import { render } from '@testing-library/react';
import UserImage from '../UserImage';

describe('UserImage', () => {
  it('debe coincidir con el snapshot', () => {
    const { asFragment } = render(
      <UserImage image="test-image.jpg" size="60px" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
