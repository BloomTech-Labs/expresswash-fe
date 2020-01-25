import React, {PureComponent} from 'react';


class Bmw extends PureComponent {
  render() {
    const {width='23px', fill='#00A8C5'} = this.props;

    return (
        <svg id="Layer_1" x="0px" y="0px" width={width} viewBox="0 0 35.174805 24.605957" style={{enableBackground:"new 0 0 35.174805 24.605957"}}>
            <g>
                <path fill={fill} d="M10.161133,24.605957c-0.035645,0-0.071289-0.001465-0.107422-0.003906
                    C9.642578,24.572754,9.26123,24.375,9,24.055664l-9-11l2.322266-1.899414l7.995117,9.771973L33.147461,0l2.027344,2.211914l-24,22
                    C10.896973,24.466309,10.535156,24.605957,10.161133,24.605957z"/>
            </g>
        </svg>
    );
  }
}

export default Bmw;