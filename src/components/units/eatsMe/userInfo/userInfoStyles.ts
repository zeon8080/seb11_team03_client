import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 780px;

  background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 216px;
`;

export const UserImg = styled.img`
  width: 168px;
  height: 168px;
  object-fit: contain;
  cursor: pointer;
`;

export const SelectImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 24px;
  bottom: 24px;
`;
