import styled from "@emotion/styled";
import Slider from "react-slick";

interface IArea {
  startArea?: boolean;
  endArea?: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
  .start,
  .end {
    display: block;
  }
`;
export const StartSelect = styled.div`
  display: none;
  position: absolute;
  left: 280px;
  top: 145px;
`;
export const EndSelect = styled.div`
  display: none;
  position: absolute;
  right: 280px;
  top: 145px;
`;
export const StyledSlider = styled(Slider)`
  height: 100%;
  width: calc(100% - 280px);
  position: relative;
  margin: 0 auto;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
`;
export const NextBtn = styled.button`
  right: -60px;
  width: 60px;
  height: 60px;
  background-image: url(/nextBtn_gr.webp);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  ::before {
    content: none;
  }
  :focus,
  :hover {
    background-image: url(/nextBtn_gr.webp);
    background-size: contain;
  }
  :enabled {
    background-image: url(/nextBtn_or.webp);
    background-size: contain;
  }
`;
export const PrevBtn = styled.button`
  left: -60px;
  width: 60px;
  height: 60px;
  background-image: url(/prevBtn_gr.webp);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  ::before {
    content: none;
  }
  :focus,
  :hover {
    background-image: url(/prevBtn_gr.webp);
    background-size: contain;
  }
  :enabled {
    background-image: url(/prevBtn_or.webp);
    background-size: contain;
  }
`;
export const RouteBox = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 35px 30px;
  background-color: white;
  .title {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    padding: 16px 16px;
    background-color: #eee;
    border-radius: 10px;
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
export const SelectBtn = styled.button<IArea>`
  position: relative;
  width: 230px;
  line-height: 60px;
  padding: 0 25px;
  border-radius: 10px;
  background-color: #e5e5e5;
  color: black;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: url(/arrow_down.webp) no-repeat;
    background-size: contain;
    transition: 0.3s;
  }

  ::after {
    transform: ${(props) => (props.startArea ?? false) && "rotateX(180deg)"};
  }
  ::after {
    transform: ${(props) => (props.endArea ?? false) && "rotateX(180deg)"};
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 550px;
`;
export const SearchWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  border: 4px solid #eee;
  border-radius: 10px;
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
  gap: 0 10px;
  width: 100%;
  input {
    width: calc(50% - 5px);
    padding: 10px 20px;
    border: 4px solid #eee;
    border-radius: 10px;
    background-color: transparent;
    font-size: 18px;
    line-height: 32px;
    color: #999;
    text-align: center;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  border: 3px dotted #d9d9d9;
  border-radius: 5px;
  input {
    cursor: pointer;
    width: 1px;
    height: 1px;
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
  border-radius: 10px;
`;
