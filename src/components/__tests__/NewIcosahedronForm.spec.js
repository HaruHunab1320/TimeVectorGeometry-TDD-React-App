import React from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import flushPromises from 'flush-promises';
import { NewIcosahedronForm } from '../NewIcosahedronForm';

describe('NewIcosahedronForm', () => {
  const icosahedronName = 'FRESH START';
  const requiredError = 'Name is required';
  const serverError = 'The icosahedron could not be saved. Please try again.';

  let createIcosahedron;
  let context;

  beforeEach(() => {
    createIcosahedron = jest.fn().mockName('createIcosahedron');
    context = render(
      <NewIcosahedronForm createIcosahedron={createIcosahedron} />,
    );
  });

  describe('initially', () => {
    it('does not display a validation error', () => {
      const { queryByText } = context;
      expect(queryByText(requiredError)).toBeNull();
    });

    it('does not display a server error', () => {
      const { queryByText } = context;
      expect(queryByText(serverError)).toBeNull();
    });
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

    it('does not display a validation error', () => {
      const { queryByText } = context;
      expect(queryByText(requiredError)).toBeNull();
    });

    it('does not display a server error', () => {
      const { queryByText } = context;
      expect(queryByText(serverError)).toBeNull();
    });
  });

  describe('when empty', () => {
    beforeEach(async () => {
      createIcosahedron.mockResolvedValue();

      const { getByPlaceholderText, getByTestId } = context;
      await userEvent.type(getByPlaceholderText('Add Icosahedron'), '');
      userEvent.click(getByTestId('new-icosahedron-submit-button'));

      return act(flushPromises);
    });

    it('displays a validation error', () => {
      const { queryByText } = context;
      expect(queryByText(requiredError)).not.toBeNull();
    });

    it('does not call createIcosahedron', () => {
      expect(createIcosahedron).not.toHaveBeenCalled();
    });
  });

  describe('when correcting a validation error', () => {
    beforeEach(async () => {
      createIcosahedron.mockResolvedValue();

      const { getByPlaceholderText, getByTestId } = context;

      await userEvent.type(getByPlaceholderText('Add Icosahedron'), '');
      userEvent.click(getByTestId('new-icosahedron-submit-button'));
      await act(flushPromises);

      await userEvent.type(
        getByPlaceholderText('Add Icosahedron'),
        icosahedronName,
      );
      userEvent.click(getByTestId('new-icosahedron-submit-button'));

      return act(flushPromises);
    });

    it('clears the validation error', () => {
      const { queryByText } = context;
      expect(queryByText(requiredError)).toBeNull();
    });
  });

  describe('when the store action rejects', () => {
    beforeEach(async () => {
      createIcosahedron.mockRejectedValue();

      const { getByPlaceholderText, getByTestId } = context;

      await userEvent.type(
        getByPlaceholderText('Add Icosahedron'),
        icosahedronName,
      );
      userEvent.click(getByTestId('new-icosahedron-submit-button'));

      return act(flushPromises);
    });

    it('displays a server error', () => {
      const { queryByText } = context;
      expect(queryByText(serverError)).not.toBeNull();
    });
  });

  describe('when retrying after a server error', () => {
    beforeEach(async () => {
      createIcosahedron.mockRejectedValueOnce().mockResolvedValueOnce();

      const { getByPlaceholderText, getByTestId } = context;
      await userEvent.type(
        getByPlaceholderText('Add Icosahedron'),
        icosahedronName,
      );

      userEvent.click(getByTestId('new-icosahedron-submit-button'));
      await act(flushPromises);

      userEvent.click(getByTestId('new-icosahedron-submit-button'));
      return act(flushPromises);
    });

    it('clears the server error', () => {
      const { queryByText } = context;
      expect(queryByText(serverError)).toBeNull();
    });
  });
});
