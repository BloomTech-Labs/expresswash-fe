import React, {PureComponent} from 'react';


class MenuIcon extends PureComponent {
  render() {
    const {width='100%', fill1='#181919', fill2='#343332'} = this.props;

    return (
        <svg id="Capa_1"  x="0px" y="0px" width={width} viewBox="0 0 157 157" style={{enableBackground:'new 0 0 157 157'}}>
            <circle fill={fill1} cx="78.5" cy="78.5" r="77"/>
            <path fill={fill2} d="M123.3,77.4c1.7-1.8,1.5-4.6-0.4-6.3l-41.1-36c-1.9-1.6-4.9-1.6-6.7,0.1L33.9,73.1c-1.8,1.7-1.9,4.5-0.2,6.3
                l1,1.1c1.7,1.8,4.5,2,6.2,0.5l3.1-2.8v40.4c0,2.5,2,4.5,4.5,4.5h16.1c2.5,0,4.5-2,4.5-4.5V90.3h20.5v28.3c0,2.5,1.7,4.5,4.2,4.5h17
                c2.5,0,4.5-2,4.5-4.5V78.7c0,0,0.9,0.7,1.9,1.7c1,0.9,3.3,0.2,4.9-1.7L123.3,77.4z"/>
        </svg>
    );
  }
}

export default MenuIcon;