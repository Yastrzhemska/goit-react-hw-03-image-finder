import { Component } from 'react';
import { Overlay, ModalDiv } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyClose);
  }

  handleKeyClose = evt => {
    if (evt.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClick}>
        <ModalDiv>
          <img
            src={this.props.image.largeImageURL}
            alt={this.props.image.tag}
          />
        </ModalDiv>
      </Overlay>
    );
  }
}
