import { Search } from "@/components/monster-search/search";
import FixedLayout from "@/components/fixed-layout/fixed-layout";

export default async function Home() {
  return (
    <FixedLayout>
      <h1>Monster Search</h1>
      <Search />
    </FixedLayout>
  );
}
