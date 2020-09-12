import React from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import flushPromises from 'flush-promises';
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
      createIcosahedron.mockResolvedValue();
      const { getByPlaceholderText, getByTestId } = context;

      await userEvent.type(
        getByPlaceholderText('Add Icosahedron'),
        icosahedronName,
      );
      userEvent.click(getByTestId('new-icosahedron-submit-button'));

      return act(flushPromises);
    });

    it('calls createIcosahedron with the name', () => {
      expect(createIcosahedron).toHaveBeenCalledWith(icosahedronName);
    });

    it('clears the name', () => {
      const { getByPlaceholderText } = context;
      expect(getByPlaceholderText('Add Icosahedron').value).toEqual('');
    });
  });
});
