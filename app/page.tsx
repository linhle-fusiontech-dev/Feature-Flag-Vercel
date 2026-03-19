import { getSession, marketingBanner } from "@/app/flags";

export default async function Page() {
  const showBanner = await marketingBanner();
  console.log("showBanner", showBanner);

  const session = await getSession();
  console.log("session", session);
  return (
    <>
      <div>{showBanner ? 'Sale live now!' : 'Welcome'}</div>
    </>
  );
}