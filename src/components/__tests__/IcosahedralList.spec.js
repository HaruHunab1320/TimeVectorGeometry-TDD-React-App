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

  const renderWithProps = (propOverrides = {}) => {
    const props = {
      loadIcosahedrons: jest.fn().mockName('loadIcosahedrons'),
      icosahedrons,
      ...propOverrides,
    };
    loadIcosahedrons = props.loadIcosahedrons;

    context = render(<IcosahedralList {...props} />);
  };

  it('loads icosahedral names on first render', () => {
    renderWithProps();
    expect(loadIcosahedrons).toHaveBeenCalled();
  });

  it('displays the icosahedral names', () => {
    renderWithProps();
    const { queryByText } = context;

    expect(queryByText('CREATIVE GENESIS')).not.toBeNull();
    expect(queryByText('PRIMAL MATRIX')).not.toBeNull();
  });

  it('Displays the loading indicator while loading', ()=>{
    renderWithProps({loading: true});
    const {queryByTestId} = context;
    expect(queryByTestId('loading-indicator')).not.toBeNull();
  });

  it('Does not display the loading indicator while not loading', () => {
    renderWithProps({loading: false});
    const {queryByTestId} = context;
    expect(queryByTestId('loading-indicator')).toBeNull();
  });
});
