import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Styled from "styled-components";
import moment from 'moment';

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

const DatesContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-evenly;
    width: 100%;
`

const BoxContainer = Styled.div`
    width: 110px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 5px;
    cursor: pointer;
    padding: 17px 10px;
    margin-bottom: 15px;

    &:hover {
        background: #a6e1eb;
        border: 2px solid #a6e1eb;
        color: #ffffff;
    }
`

const DayTitle = Styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: #363636;
    margin: 0;
`

const ButtonContainer = Styled.div`
    position: absolute;
    bottom: 0%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 90%;
    background: transparent;
    background-image: linear-gradient(360deg, #ffffff 50%, #ffffffab 75%, rgba(255, 255, 255, 0));
}


`

const PrevButton = Styled.div`
    background: #a6e1eb;
    border: 2px solid #a6e1eb;
    color: #ffffff;
    width: 40%;
    justify-content: center;
    padding: 0.75rem;
    text-align: center;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: #00A8C5;
        border: 2px solid #00A8C5;
        color: #ffffff;
    }
`

const NextButton = Styled.div`
    background: #00A8C5;
    width: 40%;
    justify-content: center;
    padding: 0.75rem;
    text-align: center;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
`



class SelectTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTime: null,
            times: [
                "5am-6am",
                "6am-7am",
                "7am-8am",
                "8am-9am",
                "9am-10am",
                "10am-11am",
                "11am-12pm",
                "12pm-1pm",
                "1pm-2pm",
                "2pm-3pm",
                "3pm-4pm",
                "4pm-5pm",
                "5pm-6pm",
                "6pm-7pm",
                "7pm-8pm"
            ],
            washTime: {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: false,
                12: false,
                13: false,
                14: false,
                15: false,
                16: false,
            }
        };
    }



    timeClick = time => event => {
        event.preventDefault();
        console.log(event.target.id);
        this.props.washTimeOnClick(time);
        this.setState({
            ...this.state,
            selectedTime: time
        })

        if(event.target.id === `0`) {
            this.setState({
                washTime: {
                    0: true,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            })
        } else if(event.target.id === `1`) {
            this.setState({
                washTime: {
                    0: false,
                    1: true,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            })
        } else if(event.target.id === `2`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: true,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            })
        } else if(event.target.id === `3`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: true,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            })
        } else if(event.target.id === `4`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: true,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            })
        } else if(event.target.id === `5`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: true,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            })
        } else if(event.target.id === `6`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: true,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `7`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: true,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `8`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: true,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `9`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: true,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `10`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: true,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `11`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: true,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `12`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: true,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `13`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: true,
                    14: false,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `14`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: true,
                    15: false,
                    16: false,
                }
            }) 
        } else if(event.target.id === `15`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: true,
                    16: false,
                }
            }) 
        } else if(event.target.id === `16`) {
            this.setState({
                washTime: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: true,
                }
            }) 
        }
    }




    render() {
        const {selectedTime, times, washTime} = this.state;
        const {currentWeek} =this.props;

        return (
            <Container >
                <DatesContainer>
                    {times.map((time, i) => (
                        <BoxContainer id={i} key={i} className={washTime[i] ? 'active-time-box' : ''} onClick={this.timeClick(time)}>
                            <DayTitle 
                                id={i}
                                className={washTime[i] ? 'active-time-title' : ''}
                                onClick={this.timeClick(time)}
                            >
                                {time}
                            </DayTitle>
                        </BoxContainer>
                    ))}
                </DatesContainer>

                <ButtonContainer className={selectedTime !== null ? "" : "hidden"}>
                    <PrevButton onClick={() => this.props.prev()}>Back</PrevButton>
                    <NextButton className={selectedTime !== null ? null : 'inactive-button'} onClick={() => this.props.next()}>Next</NextButton>
                </ButtonContainer>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SelectTime)
);