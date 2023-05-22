import { useRouter } from "next/router";
import axios from "axios";
import Result from "@/components/Result";
import RegisterContext from "@/context/RegisterId";
import { useContext } from "react";

export default function Home({ data }) {
  let { submitHandle } = useContext(RegisterContext);
  let { Id } = useRouter().query;
  if (!data) return null;
  return (
    <>
      <Result data={data["1-2"]} yr={"1-2"} />
      <Result data={data["2-1"]} yr={"2-1"} />
    </>
  );
}

function makeId(id) {
  let regId = "21U41A0500";
  if (id.includes("LE")) {
    regId = "22U45A0500";
    let leIndex = id.indexOf("LE");
    if (id.startsWith("LE")) {
      id = id.substring(2);
    } else id = id.substring(0, leIndex) + id.substring(leIndex);
    console.log("spliced: " + id);
  }
  let branch = id.substring(6, 8);
  if (id.length === 3) id = "0" + id;
  return regId.substring(0, 10 - id.length) + id;
}

export async function getStaticProps({ params }) {
  let { Id } = params;
  console.log(params);

  return new Promise((resolve, reject) => {
    axios.get(`https://get-std-res.vercel.app/${makeId(Id)}`).then((res) => {
      resolve({
        props: {
          data: res.data,
        },
      });
    });
  });
}

export async function getStaticPaths() {
  let p = [];
  for (let i = 1; i <= 99; i++) p.push({ params: { Id: `21U41A05${i}` } });
  return {
    paths: p,
    fallback: true,
  };
}
