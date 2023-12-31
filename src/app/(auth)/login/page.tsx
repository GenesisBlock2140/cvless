"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import z from "zod";
import { loginSchema } from "@/zod/loginSchema";
import axios, { AxiosError } from "axios";
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
import { toast } from "@/components/ui/use-toast";
import login from "@/services/login/login";

interface IError {
  email: string;
  password: string;
}

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<IError>({
    email: "",
    password: "",
  });

  const { push } = useRouter();

  const isValidFormat = (): boolean => {
    try {
      loginSchema.parse({ email, password });
    } catch (error) {
      if (error instanceof z.ZodError) {
        let errorList = {
          email: "",
          password: "",
        };
        if (error.message.includes("email"))
          errorList.email = "Merci de saisir un email valide";
        if (error.message.includes("password"))
          errorList.password = "Doit comprendre entre 3 et 64 caractères";
        setError(errorList);
      }
      return false;
    }
    setError({
      email: "",
      password: "",
    });
    return true;
  };

  const onLogin = async () => {
    const checkFormat = isValidFormat();
    if (!checkFormat) {
      return;
    }
    try {
      const response = await login(email, password);
      console.log("Login successfully", response);
      toast({
        variant: "success",
        duration: 1500,
        title: "🚀 Login réussi !",
        description: "Vous allez être redirigé vers votre profil",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          variant: "destructive",
          duration: 5000,
          title: "⚠️ Une erreur est survenu",
          description: error.response?.data.error,
        });
      }
      return;
    }
    setTimeout(() => {
      push("/profile");
    }, 1250);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Se connecter</CardTitle>
        <CardDescription>
          Connectez-vous et créez votre cv en ligne en quelques minutes
          gratuitement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <p className="text-sm font-semibold text-red-500">
                {error.email}
              </p>
              <Label htmlFor="mail">Email</Label>
              <Input
                id="mail"
                placeholder="Email"
                ref={emailRef}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={error.email ? "border-red-500" : ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <p className="text-sm font-semibold text-red-500">
                {error.password}
              </p>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mot de passe"
                ref={passwordRef}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={error.password ? "border-red-500" : ""}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-between gap-5">
        <Link href={"/signup"} className="text-sm">
          Pas encore de compte ?{" "}
        </Link>
        <Button onClick={onLogin}>Se connecter</Button>
      </CardFooter>
    </Card>
  );
}
