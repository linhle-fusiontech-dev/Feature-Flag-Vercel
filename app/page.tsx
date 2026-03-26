import { getSession } from "@/app/api/user.api";
import { demoJsonFlag, demoNumberFlag, demoShowUIFlag, demoStringFlag, marketingBanner } from "@/app/flags";
import { FlagEnum } from "@/app/keyFlag/key.flag";


export default async function Page() {
  const demoShowUI = await demoShowUIFlag();

  const demoString = await demoStringFlag();

  const showBanner = await marketingBanner();
  const session = await getSession();

  const demoNumber = await demoNumberFlag();
  
  const demoJson = await demoJsonFlag();

  return (
    <>
      <div>"{FlagEnum.DEMO_SHOW_BOOLEAN}": {demoShowUI ? `Show DemoShowUI SUCCESS! - ${demoShowUI}` : `Show DemoShowUI FALSE! - ${demoShowUI}`}</div>
      <br />
      <div>"{FlagEnum.MARKETING_BANNER}": {showBanner ? 'Show banner success!' : `Show banner false (id:${session.user.id}": - name: ${session.user.name})`}</div>
      <br />
      <div>"{FlagEnum.DEMO_STRING_FLAG}": String flag: {demoString}</div>
      <br />
      <div>"{FlagEnum.DEMO_NUMBER_FLAG}": Number flag: {demoNumber}</div>

      <pre>"{FlagEnum.DEMO_JSON_FLAG}": {JSON.stringify(demoJson, null, 2)}</pre>
    </>
  );
}
