import Bank from "@/components/tracker/Bank";
import { SiteHeader } from "@/components/tracker/SiteHeader";

export default function Dashboard() {
  const account = [
    { name: "Cash", ammount: 120000 },
    { name: "BNI", ammount: 4500000 },
    { name: "Mandiri", ammount: 3833000 },
    { name: "Mandiri", ammount: 3833000 },
    { name: "Mandiri", ammount: 3833000 },
  ];

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <Bank data={account} />
          </div>
        </div>
      </div>
    </>
  );
}
