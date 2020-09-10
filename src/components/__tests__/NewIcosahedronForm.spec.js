import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewIcosahedronForm } from '../NewIcosahedronForm';

describe('NewIcosahedronForm', () => {
  const icosahedronName = 'FRESH START';

  let createIcosahedron;
  let context;

  beforeEach(() => {
    createIcosahedron = jest.fn().mockName('createIcosahedron');
    context = render(
      <NewIcosahedronForm createIcosahedron={createIcosahedron} />,
    );
  });

  describe('when filled in', () => {
    beforeEach(async () => {
      const { getByPlaceholderText, getByTestId } = context;

      await userEvent.type(
        getByPlaceholderText('Add Icosahedron'),
        icosahedronName,
      );
      userEvent.click(getByTestId('new-icosahedron-submit-button'));
    });

    it('calls createIcosahedron with the name', () => {
      expect(createIcosahedron).toHaveBeenCalledWith(icosahedronName);
    });
  });
});
