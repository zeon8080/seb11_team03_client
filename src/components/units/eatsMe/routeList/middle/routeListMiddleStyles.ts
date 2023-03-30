import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 45px;
  margin-top: 30px;
  background: white;
  ${mq[2]} {
    height: calc(100vh - 180px);
    flex-direction: column;
    margin-top: 0;
    padding: 0 20px;
  }
`;
export const ListWrapper = styled.article`
  width: calc(55% - 25px);
  ${mq[2]} {
    overflow: hidden;
    min-height: 40vh;
    height: calc(100vh - 510px);
    width: 100%;
  }
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  ${mq[2]} {
    padding-bottom: 20px;
    height: calc(100% - 105px);
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const MapWrapper = styled.article`
  position: sticky;
  width: calc(45% - 25px);
  height: 645px;
  top: 17vh;
  right: 0px;
  overflow: hidden;
  ${mq[2]} {
    width: 100%;
    height: calc(100vh - 650px);
    min-height: 36vh;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin: 0 auto 42px;
  ${mq[2]} {
    width: fit-content;
    margin: 10px auto;
  }
`;

export const StartSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 160px;
  height: 60px;
  background: #f5f5f5;
  cursor: pointer;
  ${mq[2]} {
    width: 20vw;
    height: 52px;
  }

  & > div:first-of-type {
    width: calc(100% - 34px);
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }
`;

// prettier-ignore
export const StartArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props: { isToggle: boolean }) => props.isToggle ? "/arrow_up.webp" : "/arrow_down.webp"});
`;

export const StartSelectorWrapper = styled.div`
  display: ${(props: { isToggle: boolean }) =>
    props.isToggle ? "block" : "none"};
  position: absolute;
  top: 80px;
  left: -35px;
  z-index: 1;
  cursor: pointer;
  ${mq[2]} {
    left: 0;
    width: 20vw;
  }
`;

export const ArrowImgWrapper = styled.div`
  width: 85px;
  height: 85px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  ${mq[2]} {
    width: 70px;
    height: 70px;
  }
`;

export const EndSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 160px;
  height: 60px;
  background: #f5f5f5;
  cursor: pointer;
  ${mq[2]} {
    width: 20vw;
    height: 52px;
  }

  & > div:first-of-type {
    width: calc(100% - 34px);
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }
`;

// prettier-ignore
export const EndArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props: { isToggle: boolean }) => props.isToggle ? "/arrow_up.webp" : "/arrow_down.webp"});
`;

export const EndSelectorWrapper = styled.div`
  display: ${(props: { isToggle: boolean }) =>
    props.isToggle ? "block" : "none"};
  position: absolute;
  top: 80px;
  right: -35px;
  z-index: 1;
  cursor: pointer;
  ${mq[2]} {
    right: 0;
    width: 20vw;
  }
`;
