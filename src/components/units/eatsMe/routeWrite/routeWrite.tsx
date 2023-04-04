import { useEffect, useState } from "react";
import {
  IQuery,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { usePathState } from "../../../commons/hooks/custom/usePathState";
import RouteWriteMiddle from "./middle/routeWriteMiddle";
import RouteWriteTop from "./top/routeWriteTop";

interface IRouteWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
}

export default function RouteWrite(props: IRouteWriteProps): JSX.Element {
  const [path, setPath] = usePathState();
  const [map, setMap] = useState<any>({});
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    if (props.data !== undefined && props.isEdit) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { personalMapData, id, __typename, ...data } =
        props.data?.fetchBoard;
      if (personalMapData !== undefined && personalMapData !== null) {
        setPath((prev: IUpdateBoardInput) => ({
          ...prev,
          ...data,
          boardId: id,
          info: prev.info?.map((el, idx) => {
            if (idx < personalMapData?.length)
              return {
                ...personalMapData[idx],
              };
            return { ...el };
          }),
        }));
        if (!isSet) setIsSet(true);
      }
    }
  }, [props.isEdit && props.data]);

  return (
    <>
      <RouteWriteTop
        isSet={isSet}
        path={path}
        setPath={setPath}
        map={map}
        setMap={setMap}
        data={props.data}
        isEdit={props.isEdit}
      />
      <RouteWriteMiddle />
    </>
  );
}
