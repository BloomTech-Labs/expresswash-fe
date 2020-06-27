import React from 'react';
import { MDBIcon } from 'mdbreact';
import styled from 'styled-components';

const CarImg = styled.img`
  width: 15%;
`;
const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  padding: 10px 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;
const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 60%;
`;
const InfoText = styled.p`
  width: 45%;
`;
const InfoSpan = styled.span`
  font-weight: bold;
`;

const EachVehicle = ({ vehicle, deleteToggle }) => {
  return (
    <Container>
      <CarImg src={vehicle.photo} alt="car" />
      <InfoContainer>
        <InfoText>
          <InfoSpan>Year: </InfoSpan> {vehicle.year}{' '}
        </InfoText>
        <InfoText>
          <InfoSpan>Make: </InfoSpan> {vehicle.make}{' '}
        </InfoText>
        <InfoText>
          <InfoSpan>Model: </InfoSpan> {vehicle.model}{' '}
        </InfoText>
        <InfoText>
          <InfoSpan>Color: </InfoSpan> {vehicle.color}{' '}
        </InfoText>
        <InfoText>
          <InfoSpan>Plate#: </InfoSpan> {vehicle.licensePlate}{' '}
        </InfoText>
      </InfoContainer>
      <MDBIcon
        size="2x"
        className="red-text"
        icon="times"
        onClick={() => deleteToggle(vehicle.carId)}
      />
    </Container>
  );
};

export default EachVehicle;
