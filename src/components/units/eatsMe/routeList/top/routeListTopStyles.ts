import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
  border-radius: 15px;
`;

export const LocationSelector = styled.div`
  width: 140px;
  height: 60px;

  border: 1px solid red;
`;

export const SearchBar = styled.div`
  width: 810px;
  height: 60px;

  border: 1px solid red;
`;

export const routeWriteBtn = styled.button`
  width: 150px;
  height: 60px;

  font-weight: 700;
  font-size: 20px;
  background: #fbb240;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
