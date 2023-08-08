"use client";

import { useToast } from "@/components/ui/use-toast";
import { useRef, useState } from "react";
import { AxiosError } from "axios";

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
import { userSchema } from "@/zod/userSchema";
import { z } from "zod";
import signup from "@/services/signup/signup";

interface IError {
  email: string;
  password: string;
  username: string;
}

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const [error, setError] = useState<IError>({
    email: "",
    password: "",
    username: "",
  });

  const { toast } = useToast();

  const isValidFormat = (): boolean => {
    try {
      userSchema.parse({ email, password, username });
    } catch (error) {
      if (error instanceof z.ZodError) {
        let errorList = {
          email: "",
          password: "",
          username: "",
        };
        if (error.message.includes("email"))
          errorList.email = "Merci de saisir un email valide";
        if (error.message.includes("username"))
          errorList.username = "Doit comprendre entre 3 et 64 caractères";
        if (error.message.includes("password"))
          errorList.password = "Doit comprendre entre 3 et 64 caractères";
        setError(errorList);
      }
      return false;
    }
    setError({
      email: "",
      password: "",
      username: "",
    });
    return true;
  };

  const onRegister = async () => {
    const checkFormat = isValidFormat();
    if (!checkFormat) {
      return;
    }
    try {
      const response = await signup(email, password, username);
      console.log("Register successfully", response);
      toast({
        variant: "success",
        duration: 5000,
        title: "🚀 Inscription réussi, bienvenue !",
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
    }
  };

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
                {error.username}
              </p>
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                placeholder="Nom d'utilisateur"
                ref={usernameRef}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className={error.username ? "border-red-500" : ""}
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
        <Link href={"/login"} className="text-sm">
          J'ai déjà un compte !{" "}
        </Link>
        <Button onClick={onRegister}>Je m'inscris</Button>
      </CardFooter>
    </Card>
  );
}
