import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 684px;
  overflow: hidden;
  ${mq[2]} {
    height: auto;
  }
`;

export const Title = styled.span`
  font-size: 35px;
  font-weight: bold;
  color: black;
  margin: 84px 0;
  /* 미디어 쿼리 1200px */
  ${mq[2]} {
    display: none;
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  /* 미디어 쿼리 800px */
  ${mq[1]} {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 774px;
  height: 224px;
  background-color: #f5f5f5;
  padding: 20px 36px;
  /* 미디어 쿼리 1200px */
  ${mq[2]} {
    width: 100%;
  }
  /* 미디어 쿼리 800px */
  ${mq[1]} {
    width: 100%;
    height: auto;
    padding: 20px 15px;
    gap: 0 25px;
  }
`;

export const ReserveBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  /* 미디어 쿼리 800px */
  ${mq[1]} {
    width: 100%;
    margin-left: 0;
    justify-content: center;
    gap: 15px 0;
  }
`;

export const FoodImg = styled.img`
  width: 184px;
  height: 184px;
  object-fit: contain;
  ${mq[0]} {
    width: 30vw;
    height: 30vw;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 8px;
  /* 미디어 쿼리 800px */
  ${mq[1]} {
    margin-right: 0;
  }
`;

export const Align = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 18px;
  margin-bottom: 15px;
  /* 미디어 쿼리 800px */
  ${mq[1]} {
    gap: 0 8px;
    margin-bottom: 0;
  }

  & > span {
    color: black;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ScheduleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
  /* 미디어 쿼리 800px */
  ${mq[1]} {
    width: 100%;
    flex-wrap: wrap;
    gap: 10px 0;
  }
`;

export const ScheduleCont = styled.div`
  display: flex;
  gap: 0 20px;
`;

export const Date = styled.span`
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  width: 144px;
  height: 40px;
  background-color: #ff6b3f;
  color: white;
`;

export const Time = styled.span`
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  width: 62px;
  height: 40px;
  background-color: #ff6b3f;
  color: white;
  margin-left: 10px;
  /* 미디어 쿼리 800px */
  ${mq[1]} {
    margin-left: 0;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  gap: 0 10px;
`;
export const EditBtn = styled.button`
  all: unset;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  width: 70px;
  height: 40px;
  color: white;
  background-color: black;
  margin-left: 10px;
  cursor: pointer;
  /* 미디어 쿼리 800px */
  ${mq[1]} {
    margin-left: 0;
  }
`;
