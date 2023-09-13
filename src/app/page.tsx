"use client";

import { useStore } from "@/store";
import { Logo } from "@/components";
import { Button, Input } from "@/lib";
import { getUserId } from "@/utils/user";
import { getUser, loginUser } from "@/services/user";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "@/global.types";
import { useRouter } from "next/navigation";

export default function Login() {
  const { setUser, setToken, token, isAuth } = useStore();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    const response = await loginUser(userInfo);
    if (response?.data?.token) {
      setToken(response.data.token);
      const userId = getUserId(token ?? "");
      const userData: User = await getUser(userId, token ?? "");
      setUser(userData);
      setUserInfo({ userName: "", password: "" });
      router.push("/home");
    }
  };

  useEffect(() => {
    console.log("Is Auth?", isAuth);
    if (isAuth) {
      router.push("/home");
    }
  }, [isAuth]);

  return (
    <main className="min-h-full text-center flex flex-col items-center justify-center w-full">
      <section className="w-4/12 space-y-6">
        <Logo />
        <Input
          placeholder="Username"
          type="text"
          onChange={handleChange}
          name="userName"
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={handleChange}
          name="password"
        />
        <Button onClick={handleClick}>Login</Button>
      </section>
    </main>
  );
}
