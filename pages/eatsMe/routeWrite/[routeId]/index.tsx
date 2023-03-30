import { useRouter } from "next/router";

export default function RouteId(): JSX.Element {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <div>
        동적! <br />
        게시글아이디:{router.query.routeId}
      </div>
    </>
  );
}
