import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Wallet } from "lucide-react";

const Bank = ({ data }) => {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols0 @5xl/main:grid-cols-4 md:grid-cols-2 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      {data.map((account, index) => {
        return (
          <Card key={index} className="@container/card">
            <CardHeader className="relative">
              <CardDescription className="text-black dark:text-white font-bold flex items-center gap-1">
                <Wallet className="scale-70" />
                {account.name}
              </CardDescription>
              <CardTitle className="@[252px]/card:text-2xl text-xl font-semibold tabular-nums">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(account.ammount)}
              </CardTitle>
            </CardHeader>
            <CardFooter className="-mt-4 text-sm opacity-75 flex items-center">
              Edit <Pencil className="scale-45" />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Bank;
