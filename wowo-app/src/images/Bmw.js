import React, {PureComponent} from 'react';


class Bmw extends PureComponent {
  render() {
    const {width='50px', fill1='#181919', fill2='#343332'} = this.props;

    return (
        <svg id="Layer_1" x="0px" y="0px" width={width} viewBox="0 0 155 155" style={{enableBackground:"new 0 0 155 155"}}>
            <g>
                <path fill={fill1} d="M154.5,77.5c0,42.5-34.5,77-77,77v-77H154.5z"/>
                <path fill={fill2} d="M77.5,77.5v77c-42.5,0-77-34.5-77-77H77.5z"/>
                <path fill={fill1} d="M77.5,0.5v77h-77C0.5,35,35,0.5,77.5,0.5z"/>
                <path fill={fill2} d="M154.5,77.5h-77v-77C120,0.5,154.5,35,154.5,77.5z"/>
            </g>
        </svg>
    );
  }
}

export default Bmw;