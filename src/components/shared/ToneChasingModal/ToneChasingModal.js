import React from 'react';
import {
  Modal, Row, Col, Button, ButtonGroup, ToggleButton, Card, Container,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ampsData from '../../../helpers/data/ampsData';
import './ToneChasingModal.scss';

class ToneChasingModal extends React.Component {
  static propTypes = {
    show: PropTypes.array,
    modalClose: PropTypes.func,
    toneLegends: PropTypes.array,
  }

  state = {
    guitarLegend: {},
    amp: {},
  }

  getSingleLegendByGenre = (e) => {
    const { toneLegends } = this.props;
    const singleLegend = toneLegends.find((toneLegend) => toneLegend.legendGenre === e.target.value);
    ampsData.getLoneAmp(singleLegend.legendAmp).then((result) => {
      this.setState({ guitarLegend: singleLegend, amp: result });
    });
  }

  render() {
    const { show, modalClose } = this.props;
    const { guitarLegend, amp } = this.state;
    return (
      <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>ToneChasing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Pick a genre for suggested guitar/amp pairings based on the rigs of famous guitarists.</div>
          <ButtonGroup toggle className="toggleBtns" onChange={this.getSingleLegendByGenre}>
            <ToggleButton className="toggle" type="radio" name="radio" value={ 'Jazz/Fusion' }>
              Jazz/Fusion
            </ToggleButton>
            <ToggleButton className="toggle" type="radio" name="radio" value={ 'Hard Rock/Metal' }>
              Hard Rock/Metal
            </ToggleButton>
            <ToggleButton className="toggle" type="radio" name="radio" value={ 'Rock' }>
              Rock
            </ToggleButton>
            <ToggleButton className="toggle" type="radio" name="radio" value={ 'Blues' }>
              Blues
            </ToggleButton>
            <ToggleButton className="toggle" type="radio" name="radio" value={ 'Country' }>
              Country
            </ToggleButton>
          </ButtonGroup>
          {guitarLegend ? (
            <div className="toneChaseResults">
              <Container>
                <Row>
                  <Col className="modalColumn">
                    <Card>
                      <Card.Body>
                        <Card.Img variant="top" src={guitarLegend.legendImageUrl} />
                        <Card.Title>{guitarLegend.legendName}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col classname="modalColumn">
                    <Card>
                      <Card.Body>
                        <Card.Img variant="top" src={amp.ampImageUrl} />
                        <Card.Title>{amp.ampBrand} {amp.ampName}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <div>{amp.description}</div>
              </Container>
            </div>
          ) : ''}
        </Modal.Body>
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
