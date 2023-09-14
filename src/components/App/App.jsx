import { Component } from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';

import { fetchImages } from '../api';

import { AppDiv } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
    notFound: false,
    isMoreBtn: false,
    showModal: false,
    currentImg: {},
  };

  handleSubmit = query => {
    // evt.preventDefault();
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  hendleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });
      try {
        const imagesArr = await fetchImages(query, page);
        if (imagesArr.length === 0) {
          this.setState({ notFound: true });
        }
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...imagesArr.hits],
            isMoreBtn: page < Math.ceil(imagesArr.totalHits / 12),
          };
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleOpenModal = image => {
    this.setState({ showModal: true, currentImg: image });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, currentImg: null });
  };

  render() {
    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.loading && <Loader />}
        {this.state.error && !this.state.loading && (
          <div>Ops! There was an error!</div>
        )}
        <ImageGallery
          images={this.state.images}
          onClickOpen={this.handleOpenModal}
        />
        {this.state.notFound && (
          <div>`Sorry! There are no pictures ${this.state.query}!`</div>
        )}
        {this.state.isMoreBtn && <Button onClick={this.hendleLoadMore} />}
        {this.state.showModal && (
          <Modal
            image={this.state.currentImg}
            onCloseModal={this.handleCloseModal}
          />
        )}
      </AppDiv>
    );
  }
}
