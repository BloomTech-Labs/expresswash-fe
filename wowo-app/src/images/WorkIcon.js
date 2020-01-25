import React, {PureComponent} from 'react';


class MenuIcon extends PureComponent {
  render() {
    const {width='100%', fill1='#181919', fill2='#343332'} = this.props;

    return (
        <svg id="Layer_1" x="0px" y="0px" width={width} viewBox="0 0 97 97" style={{enableBackground:"new 0 0 97 97"}}>
            <g>
                <circle fill={fill1} cx="48.5" cy="48.499985" r="47.850006"/>
                <path fill={fill2} d="M74.5,31.849991H61.75v-7.75c0-1.100037-0.900024-2-2-2h-22.5c-1.099976,0-2,0.899963-2,2v7.75H22.5
                    c-1.659973,0-3,1.339966-3,3v25h58v-25C77.5,33.189957,76.159973,31.849991,74.5,31.849991z M39.440002,31.849991v-5.190002
                    c0-0.549988,0.450012-1,1-1h16.119995c0.549988,0,1,0.450012,1,1v5.190002H39.440002z"/>
                <path fill={fill2} d="M70.625,74.349991h-44.25c-1.656855,0-3-1.343147-3-3v-7.25h50.25v7.25
                    C73.625,73.006844,72.281853,74.349991,70.625,74.349991z"/>
            </g>
        </svg>
    );
  }
}

export default MenuIcon;