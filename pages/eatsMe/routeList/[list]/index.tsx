import { useRouter } from "next/router";

export default function List(): JSX.Element {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <div>
        동적! <br />
        dasdasdasd아이디:{router.query.routeId}
      </div>
    </>
  );
}
