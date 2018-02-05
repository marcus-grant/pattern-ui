import React from 'react';
import {
  DefaultListCell,
  ListCell,
  ListSection,
} from './lists/lists';

const defCell = <DefaultListCell label="Main Text" detailLabel="Subtext" />;
const BasicCell = <h1>Basic Header Cell</h1>;
const CallbackContent = props => (
  <div>
    <h1>This is a button callback</h1>
    <button onClick={props.callback}>Toggle</button>
  </div>
);

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false,

    };
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div className="app__container">
        <ListCell>
          <CallbackContent callback={() => this.toggle()} />
        </ListCell>
        <h4>Toggle State: {this.state.toggle ? 'true' : 'false'}</h4>
        <br />
        <hr />
        <h2>List Section:</h2>
        <ListSection name="A list section" isCollapsible>
          {[0, 1, 2, 3].map(x => (
            <DefaultListCell label={`Cell section: 0, Row ${x}`} />
          ))}
        </ListSection>
      </div>
    );
  }
}
