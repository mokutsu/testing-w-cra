import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

// global function it
 it('shows a comment box', () => {
  // document from jsdom dependency, global
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(15);
 })
