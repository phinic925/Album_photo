import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Photo from './Photo';

describe('Photo component', () => {
  it('renders the photo and allows the user to edit the title', () => {
    const title = 'A beautiful sunset';
    const src = 'https://example.com/sunset.jpg';
    const { getByAltText, getByDisplayValue } = render(
      <Photo title={title} src={src} />
    );

    expect(getByAltText(title)).toBeInTheDocument();
    expect(getByDisplayValue(title)).toBeInTheDocument();

    const newTitle = 'A gorgeous sunset';
    fireEvent.change(getByDisplayValue(title), { target: { value: newTitle } });
    expect(getByDisplayValue(newTitle)).toBeInTheDocument();
  });
});
