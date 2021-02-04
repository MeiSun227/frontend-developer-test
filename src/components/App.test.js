import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import ReportTable from './ReportTable'

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('render()', () => {
    it('renders the Box', () => {
      expect(wrapper.find({ 'data-testid': 'app-box' })).toHaveLength(1);
    });
  });
});

test('renders content', () => {
  const reports = [{
    id: '67f06020-95b3-484d-8713-36584c79e94a',
    timestamp: new Date('2020/2/22').getTime(),
    diff: [
      { field: 'name', oldValue: 'Constantine P. N.', newValue: 'Joe' },
    ],
  },
  {
    id: 'bb177085-7340-4cf7-a892-f436f20951e2',
    timestamp: new Date('2020/2/19').getTime(),
    diff: [
      { field: 'name', oldValue: 'Constantine Prescott Nathaniel Jr.', newValue: 'Constantine Prescott Nathaniel Sr.' },
    ],
  },
  ]
  const component = render(
    <ReportTable reports={reports} />
  )

  expect(component.container).toHaveTextContent('Constantine Prescott Nathaniel Jr.')
})

test('clicking sort', () => {
  const reports = [{
    id: '67f06020-95b3-484d-8713-36584c79e94a',
    timestamp: new Date('2020/2/22').getTime(),
    diff: [
      { field: 'name', oldValue: 'Constantine P. N.', newValue: 'Joe' },
    ],
  },
  {
    id: 'bb177085-7340-4cf7-a892-f436f20951e2',
    timestamp: new Date('2020/2/19').getTime(),
    diff: [
      { field: 'name', oldValue: 'Constantine Prescott Nathaniel Jr.', newValue: 'Constantine Prescott Nathaniel Sr.' },
    ],
  },
  ]
  const mockHandler = jest.fn()

  const component = render(
    <ReportTable reports={reports} sortHandler={mockHandler} />)

  const TableSortLabel = component.getByText('Date')
  fireEvent.click(TableSortLabel)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('clicking load more trigger loading state', () => {
}






