import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 100px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
  border-radius: 15px;
`;

export const LocationWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 140px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 10px;

  & > div:first-of-type {
    width: calc(100% - 34px);
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }

  &:focus > div:nth-of-type(2) {
    background-image: url("/arrow_up.webp");
  }

  & + div {
    display: none;
  }

  &:focus + div {
    display: block;
    position: absolute;
    top: 85px;
    left: -20px;
  }
`;

export const Arrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/arrow_down.webp");
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
