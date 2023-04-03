import { Tabs } from "antd";
import * as S from "./userInfoStyles";
import PickedList from "./pickedList/pickedList";
import ReserveListMiddle from "./reserveList/middle/reserveListMiddle";
import UserWriteList from "./userWriteList/userWriteList";

export default function UserInfo(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Style tabPosition={"left"} defaultActiveKey="1">
          <Tabs.TabPane
            tab={
              <S.Tab>
                <S.UserImg src="/userImg.webp" />
                <S.SelectImg src="/imgSelect.webp" />
              </S.Tab>
            }
            key="4"
            disabled
          ></Tabs.TabPane>
          <Tabs.TabPane tab={<S.Tab>찜 목록</S.Tab>} key="1">
            <PickedList />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<S.Tab>내가 쓴 글</S.Tab>} key="2">
            <UserWriteList />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<S.Tab>예약 확인</S.Tab>} key="3">
            <ReserveListMiddle />
          </Tabs.TabPane>
        </S.Style>
      </S.Wrapper>
    </S.Container>
  );
}
