import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {HomeScreen} from '../screens/index';
import {store} from '../store/index';

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {getByPlaceholderText, getByTestId} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    // Verify that the search input is present
    const searchInput = getByPlaceholderText('Search...');
    expect(searchInput).toBeTruthy();

    // Verify that the loading indicator is present
    const loadingIndicator = getByTestId('loading-indicator');
    expect(loadingIndicator).toBeTruthy();
  });

  it('should trigger search input change', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    const searchInput = getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'Bulbasaur');

    expect(searchInput.props.value).toBe('Bulbasaur');
  });
});
