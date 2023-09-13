import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
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
      <div onClick={this.handleClick}>
        <div>
          <img
            src={this.props.image.largeImageURL}
            alt={this.props.image.tag}
          />
        </div>
      </div>
    );
  }
}
