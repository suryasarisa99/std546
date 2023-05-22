import { useRouter } from "next/router";

export default function Home() {
  let router = useRouter();
  return (
    <>
      {/* <form
        action=""
        onSubmit={(e) => {
          router.push(`/${e.target.user.value}`);
        }}
      >
        <input type="text" name="user" />
      </form> */}
    </>
  );
}
