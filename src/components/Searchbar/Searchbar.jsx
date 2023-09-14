import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
  SearchBarHead,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    return (
      <SearchBarHead>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">Search</SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBarHead>
    );
  }
}
