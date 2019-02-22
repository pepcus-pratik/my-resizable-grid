import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isResizing: false,
    }
  }

  onDrag(e) {
    console.log('e --- ', e);
  }

  onDragMove(e) {
    console.log('mouse move -- e -- ', e);
  }

  renderGhostBar() {
    if (this.state.isResizing) {
      return (
        <div className="resize-ghost-line" />
      );
    }

    return null;
  }

  render() {
    return (
      <div className="App grid">
        <div className="grid-header">
          <div className="cell cell-first">
            <span>First</span>
            <div className="resize-column-line" onMouseDown={this.onDrag} onMouseMove={this.onDragMove} />
            {this.renderGhostBar()}
          </div>
          <div className="cell cell-second">
            <span>Second</span>
            <div className="resize-column-line" />
          </div>
        </div>
        <div className="grid-body">
          <div className="grid-row">
            <div className="cell cell-first">R1-First</div>
            <div className="cell cell-second">R1-Second</div>
          </div>
          <div className="grid-row">
            <div className="cell cell-first">R2-First</div>
            <div className="cell cell-second">R2-Second</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
