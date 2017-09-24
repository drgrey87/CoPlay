import 'react-native';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Index from '../index.ios';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
