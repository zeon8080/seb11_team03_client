import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: white;
  position: relative;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
  border-radius: 15px;
`;

export const SelectBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 10px;

  & > div:first-of-type {
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
    left: 20px;
  }
`;

export const SubSelectBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-right: 30px;

  & > div:first-of-type {
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
    left: 180px;
  }
`;

export const Arrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/arrow_down.webp");
`;
