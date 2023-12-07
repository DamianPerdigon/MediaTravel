
import React from 'react';
import { render } from '@testing-library/react';
import FlexBetween from 'components/FlexBetween';
import '@testing-library/jest-dom';




describe('FlexBetween Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<FlexBetween data-testid="flex-between" />);
    const flexBetweenComponent = getByTestId('flex-between');
    expect(flexBetweenComponent).toBeInTheDocument();
  });

  it('displays children correctly', () => {
    const { getByText } = render(
      <FlexBetween>
        <div>Child 1</div>
        <div>Child 2</div>
      </FlexBetween>
    );
    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });


});
