import React from 'react';
import { render } from '@testing-library/react';
import { IcosahedralList } from '../IcosahedralList';

describe('IcosahedralList', () => {
  it('loads icosahedral names on first render', () => {
    const loadIcosahedrons = jest.fn().mockName('loadIcosohedrons');
    const icosahedrons = [];

    render(
      <IcosahedralList
        loadIcosahedrons={loadIcosahedrons}
        icosahedrons={icosahedrons}
      />,
    );

    expect(loadIcosahedrons).toHaveBeenCalled();
  });

  it('displays the icosahedral names', () => {
    const noop = () => {};
    const icosahedrons = [
      { id: 1, name: 'CREATIVE GENESIS' },
      { id: 2, name: 'PRIMAL MATRIX' },
    ];

    const { queryByText } = render(
      <IcosahedralList loadIcosahedrons={noop} icosahedrons={icosahedrons} />,
    );

    expect(queryByText('CREATIVE GENESIS')).not.toBeNull();
    expect(queryByText('PRIMAL MATRIX')).not.toBeNull();
  });
});
