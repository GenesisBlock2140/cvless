import { FC } from "react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex justify-between items-center h-20">
        <div className="font-medium text-lg relative">
          <Link href="/">CVless</Link>
          <div className="absolute top-[-18px] right-[-35px]">
            <Badge>Beta</Badge>
          </div>
        </div>
        <ul className="flex justify-between items-center gap-3">
          <li>Foire aux questions</li>
          <li>
            <Link href={"/login"}>
              <Button size="sm">S'inscrire</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
