import styled from "@emotion/styled";

interface ISearch {
  word?: string;
}
interface IImgChk {
  imgUrl?: string;
}
interface ISetting {
  slideNum: number;
}
export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  padding: 35px 0;
  border-bottom: 3px solid #eee;
`;
export const StyledSlider = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
  width: calc(100% - 280px);
  margin: 0 auto;
`;
export const BtnWrap = styled.div`
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 60px;
    height: 60px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
  }
`;
export const NextBtn = styled.button`
  right: 80px;
  background-image: url(/nextBtn_gr.webp);
  :enabled {
    background-image: url(/nextBtn_or.webp);
    background-size: contain;
  }
`;
export const PrevBtn = styled.button`
  left: 80px;
  background-image: url(/prevBtn_gr.webp);
  :enabled {
    background-image: url(/prevBtn_or.webp);
    background-size: contain;
  }
`;
export const RouteBox = styled.div<ISetting>`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  transition: 0.6s;
  transform: translateX(
    ${(props) => props.slideNum !== 0 && `${props.slideNum}00%`}
  );
  width: 100%;
  padding: 35px 30px;
  background-color: white;
  .title {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    padding: 16px 16px;
    background-color: #eee;
    margin: 0 100px;
    ::placeholder {
      color: #999;
      text-align: center;
    }
  }
  .arrow {
    width: 100px;
    height: 100px;
    background: url(/arrow_or.webp) no-repeat;
    background-size: contain;
  }
  .start {
    margin-left: 110px;
  }
  .end {
    margin-right: 110px;
  }
`;
export const Text = styled.div`
  text-align: center;
  font-size: 24px;
  padding: 40px 0;
  font-weight: 500;
`;
export const ModalBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 20px;
  margin-top: 20px;
  padding-top: 10px;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  button {
    cursor: pointer;
    width: 20%;
    padding: 0 15px;
    font-size: 18px;
    font-weight: 500;
    color: #757575;
    line-height: 40px;
    background-color: transparent;
    border-bottom: 2px solid #fbb240;
    :hover {
      color: black;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 550px;
`;
export const SearchWrap = styled.div<ISearch>`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 2px solid #eee;
  border-color: ${(props) => props.word !== "" && "#FBB240"};
  input {
    width: calc(100% - 30px);
    background-color: transparent;
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    ::placeholder {
      color: #999;
    }
  }
  button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    background: url(/search.webp) no-repeat;
    background-size: contain;
    text-indent: -9999px;
  }
`;
export const StoreWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  input {
    width: 45%;
    padding: 10px 20px;
    border-bottom: 2px solid #eee;
    background-color: transparent;
    font-size: 18px;
    line-height: 32px;
    color: #999;
    text-align: center;
    ::placeholder {
      color: #999;
    }
  }
`;
export const Store = styled.input`
  border-color: ${(props) => props.value !== "상호명" && "#FBB240 !important"};
  color: ${(props) => props.value !== "상호명" && "black !important"};
  font-weight: ${(props) => props.value !== "상호명" && "500"};
`;
export const Menu = styled.input`
  border-color: ${(props) =>
    props.value !== "" ? "#FBB240 !important" : "#eee !important"};
  color: ${(props) => props.value !== "" && "black !important"};
  font-weight: ${(props) => props.value !== "" && "500"};
`;

export const ImgWrap = styled.div<IImgChk>`
  position: relative;
  cursor: pointer;
  width: 130px;
  height: 130px;
  border: 3px dotted #d9d9d9;
  border: ${(props) => props.imgUrl !== "" && "1px solid #FBB240"};
  input {
    width: 1px;
    height: 1px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background: url(/plus.webp) no-repeat;
    background-size: contain;
    display: ${(props) => (props.imgUrl === "" ? "block" : "none")};
  }
`;
export const RegisterBtn = styled.button`
  cursor: pointer;
  width: 130px;
  height: 130px;
  background-color: #d9d9d9;
  color: white;
  font-size: 30px;
  font-weight: 700;
  line-height: 130px;
  :enabled {
    background-color: #fbb240;
  }
`;
