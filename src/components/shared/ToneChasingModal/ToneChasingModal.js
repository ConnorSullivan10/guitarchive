import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ToneChasingModal.scss';

class ToneChasingModal extends React.Component {
  static propTypes = {
    show: PropTypes.array,
    modalClose: PropTypes.func,
  }

  render() {
    const { show, modalClose } = this.props;
    return (
      <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button className="btn" variant="secondary" onClick={modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ToneChasingModal;
