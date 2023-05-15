import React from 'react';

class SpinnerIndicator extends React.Component {
  render() {
    return (
        <div class="loader h-screen flex items-center justify-center">
          <div class="cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
    );
  }
}

export default SpinnerIndicator;