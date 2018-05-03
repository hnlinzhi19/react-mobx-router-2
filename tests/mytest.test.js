import React from 'react';
import renderer from 'react-test-renderer';

import mytest from '../src/component/mytest.js';

describe('<mytest />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<mytest />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });