import { Tabs } from "antd";
import styled from "@emotion/styled";
import * as S from "./userInfoStyles";
import ReserveListMiddle from "./reserveList/middle/reserveListMiddle";

const Style = styled(Tabs)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  color: #a3a3a3;

  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fbb240; /* 선택된 탭 폰트 색상 설정 */
  }

  & .ant-tabs-ink-bar {
    background-color: #fbb240; // 변경 할 커서 색상
  }

  & .ant-tabs-nav .ant-tabs-tab:hover {
    cursor: pointer; /* 탭 커서 색상 설정 */
    color: #fbb240; /* 마우스를 올려 놓은 탭 폰트 색상 설정 */
  }
  /* .ant-tabs-tab.ant-tabs-tab-active {
    :nth-child(1) {
      width: 30px;
      height: 30px;
      background-image: url(/bookMark_or.webp);
      background-repeat: no-repeat;
    }
  } */
`;
const Tab = styled.div`
  line-height: 40px;
  text-align: center;
  width: 200px;
  font-size: 18px;
  position: relative;
`;

export default function UserInfo(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <Style tabPosition={"left"} defaultActiveKey="1">
          <Tabs.TabPane
            tab={
              <Tab>
                <S.UserImg src="/userImg.webp" />
                <S.SelectImg src="/imgSelect.webp" />
              </Tab>
            }
            key="1"
          ></Tabs.TabPane>
          <Tabs.TabPane tab={<Tab>찜 목록</Tab>} key="2"></Tabs.TabPane>
          <Tabs.TabPane tab={<Tab>내가 쓴 글</Tab>} key="3"></Tabs.TabPane>
          <Tabs.TabPane tab={<Tab>예약 확인</Tab>} key="4">
            <ReserveListMiddle />
          </Tabs.TabPane>
        </Style>
      </S.Wrapper>
    </S.Container>
  );
}
