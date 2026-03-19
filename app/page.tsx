import { marketingBanner } from "@/app/flags";

 
export default async function Page() {
  const showBanner = await marketingBanner();
 
  return <div>{showBanner ? 'Sale live now!' : 'Welcome'}</div>;
}
