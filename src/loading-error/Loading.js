import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.7);
`;
const Heading = styled.p`
  margin-top: 50px;
  font-size: 3rem;
  font-weight: 900;
  color: #3f51b5;
`;

export default function Loading() {
  const loading1 = useSelector((state) => state.userReducer.loading);
  const loading2 = useSelector((state) => state.washerDashboardReducer.loading);
  const loading3 = useSelector((state) => state.washerSignupReducer.loading);
  return (
    <>
      {loading1 || loading2 || loading3 ? (
        <Container>
          <CircularProgress size={100} />
          <Heading> ...LOADING </Heading>
        </Container>
      ) : null}
    </>
  );
}
