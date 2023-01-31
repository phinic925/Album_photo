import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import UserInformation from './UserInformation';

describe('UserInformation', () => {
  it('displays the user table and album list', async () => {
    const { findByText, getByText } = render(<UserInformation />);

    await findByText('ID');
    await findByText('Name');
    await findByText('Username');
    await findByText('Email');
    await findByText('Action');

    fireEvent.click(getByText('View Albums'));

    await findByText('Albums for User 1');
    await findByText('quidem molestiae enim');

   })
   })