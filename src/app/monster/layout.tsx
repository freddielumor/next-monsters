import { Metadata } from "next";
import FixedLayout from "@/components/fixed-layout/fixed-layout";
import "../globals.css";

export const metadata: Metadata = {
  title: "Monster Details",
  description: "Details of selected monster",
};

export default function MonsterLayout({ children }: { children: React.ReactNode }) {
  return (
    <FixedLayout>
      {children}
    </FixedLayout>
  );
}


