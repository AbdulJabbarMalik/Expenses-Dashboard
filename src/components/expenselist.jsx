
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export function Expenselist({ icon , type , date , discription , amount ,colour, className, ...props }) {
  return (
    <Card className={cn("w-[100%]", className)} {...props}>
      <CardContent className="grid gap-4  p-2">
        <div>
          <div className="mb-4 grid grid-cols-[25px_75%_1fr] items-start pb-4 last:mb-0 last:pb-0  gap-12">
            <div
              className={` ${colour}  
            p-2 flex h-[40px] w-[40px] translate-y-1 rounded-full  justify-center items-center cursor-pointer icon-box`}
            >
              <i className="text-white">{icon}</i>
            </div>

            <div className="space-y-1 self-end">
              <p className="text-sm font-medium leading-none">{type}</p>
              <p className="text-sm text-muted-foreground">
                {`${date} ${discription}`}
              </p>
            </div>
            <div className="text-center">{amount}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
