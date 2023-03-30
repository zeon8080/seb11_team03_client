import styled from "@emotion/styled";

export const SelectList = styled.div`
  width: 230px;
  height: 470px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div:last-of-type {
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const Location = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-bottom: none;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    border: 2px solid #fbb240;
    color: #fbb240;
  }
`;
