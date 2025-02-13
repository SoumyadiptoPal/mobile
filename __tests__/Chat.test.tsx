import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import Chat from '../screens/Chat';
import renderWithAuth from '../utils/authProvider';
import { GET_CONTACTS } from '../graphql/queries/Contact';

describe('Contacts screen', () => {
  const mockContacts = [
    {
      id: '1',
      name: 'test',
      maskedPhone: '12*****90',
    },
  ];

  const mocks = [
    {
      request: {
        query: GET_CONTACTS,
        variables: {
          filter: {},
          messageOpts: { limit: 3, offset: 0 },
          contactOpts: { limit: 10, offset: 0 },
        },
      },
      response: {
        data: {
          search: [
            {
              contact: mockContacts,
            },
          ],
        },
      },
    },
  ];
  test('renders correctly', () => {
    const { getByTestId } = renderWithAuth(<Chat />, mocks);

    const searchInput = getByTestId('searchInput');
    const loadingIndicator = getByTestId('loadingIndicator');

    expect(searchInput).toBeDefined();
    expect(loadingIndicator).toBeTruthy();
  });

  test('updates search correctly', () => {
    const { getByTestId } = renderWithAuth(<Chat />, mocks);

    const searchInput = getByTestId('searchInput');
    fireEvent.changeText(searchInput, 'test search');

    expect(searchInput.props.value).toBe('test search');
  });

  test('should test when search and filter icon pressed', async () => {
    const mockOnSearchHandler = jest.fn();
    const mockOnFilter = jest.fn();

    const { getByTestId } = renderWithAuth(<Chat />, mocks);
    await waitFor(() => {
      fireEvent.press(getByTestId('searchIcon'));
      fireEvent.press(getByTestId('filterOutline'));
    });

    expect(mockOnSearchHandler).toBeTruthy();
    expect(mockOnFilter).toBeTruthy();
  });
});
