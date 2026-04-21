import type { ReactNode } from "react";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MetaComponent from "@/components/common/Metacomponent";

interface PageShellProps {
  meta: {
    title: string;
    description: string;
    keywords?: string;
    canonical: string;
    ogImage?: string;
  };
  children: ReactNode;
}

export default function PageShell({ meta, children }: PageShellProps) {
  return (
    <>
      <MetaComponent meta={meta} />
      <Header1 />
      {children}
      <Footer1 />
      <Copyright />
    </>
  );
}
