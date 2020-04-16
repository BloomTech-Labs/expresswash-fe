import React, {PureComponent} from 'react';


class UserCircle extends PureComponent {
  render() {
    const {size='50px', fill='#00A8C5', stroke='#00A8C5'} = this.props;

    return (
        <svg className="button" expanded="true" height={size} width={size}>
            <circle className="outterCircle" cx="50%" cy="50%" r="60%" fill="none" stroke={stroke} strokeWidth="5%">
              <animate attributeType="SVG" attributeName="r" begin="0s" dur="1.5s" repeatCount="indefinite" from="5%" to="60%"/>
              <animate attributeType="CSS" attributeName="stroke-width" begin="0s"  dur="1.5s" repeatCount="indefinite" from="3%" to="0%" />
              <animate attributeType="CSS" attributeName="opacity" begin="0s"  dur="1.5s" repeatCount="indefinite" from="1" to="0"/>
            </circle>
            <circle className="innerCircle" cx="50%" cy="50%" r="20%" fill={fill} stroke="none"></circle>
        </svg>
    );
  }
}

export default UserCircle;
