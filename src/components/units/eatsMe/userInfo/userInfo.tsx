import { Tabs } from "antd";
import styled from "@emotion/styled";
import * as S from "./userInfoStyles";

const Style = styled(Tabs)`
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

export default function UserInfo(): JSX.Element {
  return (
    <>
      <Style tabPosition={"left"} defaultActiveKey="1">
        <Tabs.TabPane tab={<S.Tab>찜 목록</S.Tab>} key="1">
          <S.PickedList>찜 찜 찜</S.PickedList>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<S.Tab>내가 쓴 글</S.Tab>} key="2">
          <S.UserWriteList>글 글 글</S.UserWriteList>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<S.Tab>예약 확인</S.Tab>} key="3">
          <S.ReserveList>예약 예약 예약</S.ReserveList>
        </Tabs.TabPane>
      </Style>

    </>
  );
}
