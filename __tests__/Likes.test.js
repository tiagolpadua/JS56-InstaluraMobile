import React from 'react';
import Likes from '../src/components/Likes';

import renderer from 'react-test-renderer';

test('renderiza corretamente com a foto sem like', () => {
  const tree = renderer.create(<Likes foto={{likeada: false, likers: []}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renderiza corretamente com a foto com like', () => {
  const tree = renderer.create(<Likes foto={{likeada: true, likers: []}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
