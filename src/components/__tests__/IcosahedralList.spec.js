import React from 'react';
import { render } from '@testing-library/react';
import { IcosahedralList } from '../IcosahedralList';
import { isExportDeclaration } from 'typescript';

describe('IcosahedralList', () => {
  it('loads icosahedral names on first render', () => {
    const loadIcosahedrons = jest.fn().mockName('loadIcosohedrons');

    render(<IcosahedralList loadIcosahedrons={loadIcosahedrons} />);

    expect(loadIcosahedrons).toHaveBeenCalled();
  });
});
