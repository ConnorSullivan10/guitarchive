import React from 'react';
import {
  Modal, Button, ButtonGroup, ToggleButton, Card,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import toneLegendsData from '../../../helpers/data/toneLegendsData';
import ampsData from '../../../helpers/data/ampsData';
import './ToneChasingModal.scss';

class ToneChasingModal extends React.Component {
  static propTypes = {
    show: PropTypes.array,
    modalClose: PropTypes.func,
    toneLegends: PropTypes.array,
    // guitarId: PropTypes.string,
  }

  state = {
    guitarLegend: {},
    amp: {},
  }

  // componentDidMount() {
  //   const { guitarId } = this.props;
  //   toneLegendsData.getToneLegendsByGuitarId(guitarId)
  //     .then((toneLegends) => this.setState({ toneLegends }))
  //     .catch((err) => console.error('error from get legends by guitar', err));
  // }

  getSingleLegendByGenre = (e) => {
    const { toneLegends } = this.props;
    const { guitarLegend } = this.state;
    const singleLegend = toneLegends.find((toneLegend) => toneLegend.legendGenre === e.target.value);
    console.log(singleLegend);
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
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={guitarLegend.legendImageUrl} />
                <Card.Body>
                  <Card.Title>{guitarLegend.legendName}</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={amp.ampImageUrl} />
                <Card.Body>
                  <Card.Title>{amp.ampBrand} {amp.ampName}</Card.Title>
                  <div>{amp.description}</div>
                </Card.Body>
              </Card>
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
