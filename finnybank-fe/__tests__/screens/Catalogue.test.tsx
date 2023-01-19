import React from 'react';

import renderer from 'react-test-renderer';

import Screen from '../../src/screens/Themes';

import Wrapper from '../Wrapper';

describe('<Catalogue />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Screen />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
