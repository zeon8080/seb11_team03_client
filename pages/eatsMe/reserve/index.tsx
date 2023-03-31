import { useWithAuth } from "../../../src/components/commons/hooks/custom/useWithAuth";
import Reserve from "../../../src/components/units/eatsMe/reserve/reserve";

export default function ReservePage(): JSX.Element {
  useWithAuth();
  return <Reserve />;
}
