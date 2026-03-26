import { getSession } from "@/app/api/user.api";
import { demoJsonFlag, demoNumberFlag, demoShowUIFlag, demoStringFlag, marketingBanner } from "@/app/flags";


export default async function Page() {
  const demoShowUI = await demoShowUIFlag();

  const demoString = await demoStringFlag();

  const showBanner = await marketingBanner();
  const session = await getSession();

  const demoNumber = await demoNumberFlag();
  const demoJson = await demoJsonFlag();

  return (
    <>
      <div>{demoShowUI ? `Show DemoShowUI SUCCESS! - ${demoShowUI}` : `Show DemoShowUI FALSE! - ${demoShowUI}`}</div>
      <br />
      <div>{showBanner ? 'Show banner success!' : `Show banner false (id:${session.user.id} - name: ${session.user.name})`}</div>
      <br />
      <div>String flag: {demoString}</div>
      <br />
      <div>Number flag: {demoNumber}</div>
      <br />
      <pre>{JSON.stringify(demoJson, null, 2)}</pre>
    </>
  );
}
