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

const TitleContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0 20px 0;
`

const WeekTitle = Styled.h3`
    font-size: 1rem;
    font-weight: 500;
    color: #363636;
`

const BoxContainer = Styled.div`
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;
    padding: 20px;
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
`

const DateTitle = Styled.h2`
    font-size: 2rem;
    font-weight: 400;
    color: #363636;
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



class SelectDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
            washDate: {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false
            }
        };
    }

    startDate = moment(`${this.props.currentWeek[0]}`, 'YYYY-MM-DD').format('MMMM Do');
    endDate = moment(`${this.props.currentWeek[6]}`, 'YYYY-MM-DD').format('MMMM Do');

    dateClick = date => event => {
        event.preventDefault();
        console.log(event.target.id);
        this.props.washDateOnClick(date);
        this.setState({
            ...this.state,
            selectedDate: date
        })

        if(event.target.id === '0' || event.target.id === 'day0' || event.target.id === 'date0') {
            this.setState({
                washDate: {
                    0: true,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false
                }
            })
        } else if(event.target.id === '1' || event.target.id === 'day1' || event.target.id === 'date1') {
            this.setState({
                washDate: {
                    0: false,
                    1: true,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false
                }
            })
        } else if(event.target.id === '2' || event.target.id === 'day2' || event.target.id === 'date2') {
            this.setState({
                washDate: {
                    0: false,
                    1: false,
                    2: true,
                    3: false,
                    4: false,
                    5: false,
                    6: false
                }
            })
        } else if(event.target.id === '3' || event.target.id === 'day3' || event.target.id === 'date3') {
            this.setState({
                washDate: {
                    0: false,
                    1: false,
                    2: false,
                    3: true,
                    4: false,
                    5: false,
                    6: false
                }
            })
        } else if(event.target.id === '4' || event.target.id === 'day4' || event.target.id === 'date4') {
            this.setState({
                washDate: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: true,
                    5: false,
                    6: false
                }
            })
        } else if(event.target.id === '5' || event.target.id === 'day5' || event.target.id === 'date5') {
            this.setState({
                washDate: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: true,
                    6: false
                }
            })
        } else if(event.target.id === '6' || event.target.id === 'day6' || event.target.id === 'date6') {
            this.setState({
                washDate: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: true
                }
            })
        }
    }




    render() {
        const {selectedDate, washDate} = this.state;
        const {currentWeek} =this.props;

        return (
            <Container >
                <TitleContainer>
                    <WeekTitle>{this.startDate} - {this.endDate}</WeekTitle>
                </TitleContainer>
                <DatesContainer>
                    {currentWeek.map((day, i) => (
                        <BoxContainer id={i} key={i} className={washDate[i] ? 'active-date-box' : ''} onClick={this.dateClick(day)}>
                            <DayTitle 
                                id={`day${i}`}
                                className={washDate[i] ? 'active-day-title' : ''}
                                onClick={this.dateClick(day)}
                            >
                                {moment(day, 'YYYY-MM-DD').format('ddd').toUpperCase()}
                            </DayTitle>
                            <DateTitle 
                                id={`date${i}`}
                                className={washDate[i] ? 'active-date-title' : ''}
                                onClick={this.dateClick(day)}
                            >
                                 {moment(day, 'YYYY-MM-DD').format('DD')}
                            </DateTitle>
                        </BoxContainer>
                    ))}
                </DatesContainer>

                <ButtonContainer className={this.state.selectedDate !== null ? "" : "hidden"}>
                    <PrevButton onClick={() => this.props.prev()}>Back</PrevButton>
                    <NextButton className={this.state.selectedDate !== null ? null : 'inactive-button'} onClick={() => this.props.next()}>Next</NextButton>
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
    )(SelectDate)
);