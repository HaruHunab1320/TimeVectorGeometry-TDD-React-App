import React from 'react';
import { render } from '@testing-library/react';
import { IcosahedralList } from '../IcosahedralList';

describe('IcosahedralList', () => {
  const icosahedrons = [
    { id: 1, name: 'CREATIVE GENESIS' },
    { id: 2, name: 'PRIMAL MATRIX' },
  ];
  let loadIcosahedrons;
  let context;

  beforeEach(() => {
    loadIcosahedrons = jest.fn().mockName('loadIcosahedrons');

    context = render(
      <IcosahedralList
        loadIcosahedrons={loadIcosahedrons}
        icosahedrons={icosahedrons}
      />,
    );
  });

  it('loads icosahedral names on first render', () => {
    expect(loadIcosahedrons).toHaveBeenCalled();
  });

  it('displays the icosahedral names', () => {
    const { queryByText } = context;

    expect(queryByText('CREATIVE GENESIS')).not.toBeNull();
    expect(queryByText('PRIMAL MATRIX')).not.toBeNull();
  });
});
