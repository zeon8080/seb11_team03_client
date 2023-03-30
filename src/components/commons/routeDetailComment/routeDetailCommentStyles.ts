import styled from "@emotion/styled";

export const Container = styled.div`
  width: 55%;
  padding: 10px 10px 0;
  margin-bottom: 36px;
  background: #f5f5f5;
`;

export const WriteWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  padding: 6px 10px;
  background-color: white;

  & > input {
    width: calc(100% - 56px);
    font-weight: 500;
    font-size: 12px;
  }

  & > button {
    width: 46px;
    font-weight: 500;
    font-size: 12px;
    background-color: #fbb240;
    color: white;
    cursor: pointer;
  }
`;

export const DivideLine = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const CommentsWrapper = styled.div`
  position: relative;
  padding: 6px;
  margin-bottom: 10px;
  background-color: white;
`;

export const ImgBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 34px;
  top: 3px;
  right: 3px;

  & > img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const userInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    width: 25px;
    height: 25px;
    margin-right: 6px;
    border-radius: 50%;
  }

  & > div {
    font-weight: 500;
    font-size: 12px;
  }
`;

export const Comments = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
`;
