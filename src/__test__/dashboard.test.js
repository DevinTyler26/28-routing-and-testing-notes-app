import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;
  beforeEach(() => {
    mountedDashboard = mount(<Dashboard />);
  });
  afterEach(() => {
    mountedDashboard.unmount();
  });
  test('Simple test for initial state', () => {

  });
  test('Adding a new note to the state', () => {

  });
});
