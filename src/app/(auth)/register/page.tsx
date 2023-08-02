import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>S'inscrire</CardTitle>
        <CardDescription>
          Inscrivez-vous et créez votre cv en ligne en quelques minutes
          gratuitement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mail">Email</Label>
              <Input id="mail" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" placeholder="Mot de passe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="passwordBis">Confirmation du mot de passe</Label>
              <Input
                id="passwordBis"
                type="password"
                placeholder="Mot de passe encore"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-between gap-5">
        <Link href={"/login"} className="text-sm">
          J'ai déjà un compte !{" "}
        </Link>
        <Button>Je m'inscris</Button>
      </CardFooter>
    </Card>
  );
}
