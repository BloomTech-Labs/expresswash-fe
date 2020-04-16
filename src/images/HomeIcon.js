import React, {PureComponent} from 'react';


class MenuIcon extends PureComponent {
  render() {
    const {width='100%', fill1='#181919', fill2='#343332'} = this.props;

    return (
      <svg id="Layer_1" x="0px" y="0px" width={width} viewBox="0 0 97 97" style={{enableBackground:"new 0 0 97 97"}}>
        <g>
          <circle fill={fill1} cx="48.5" cy="48.499985" r="47.850006"/>
          <path fill={fill2} d="M73.630005,37.969986v30.380005c0,1.659973-1.349976,3-3,3H54.190002v-18.75H42.809998v18.75H26.369995
            c-1.650024,0-3-1.340027-3-3V37.969986l23.809998-17.880005c0.780029-0.590027,1.859985-0.590027,2.640015,0L73.630005,37.969986z"
            />
        </g>
      </svg>
    );
  }
}

export default MenuIcon;