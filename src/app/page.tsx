"use client";

import React from "react";
import { useStore } from "@/store";
import { Logo } from "@/components";
import { Button, Input } from "@/lib";
import { getUserId } from "@/utils/user";
import { getUser, loginUser } from "@/services/user";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "@/global.types";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { setUser, setToken, token, isAuth } = useStore();
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const isInfoComplete = () =>
    userInfo.userName.trim() !== "" && userInfo.password.trim() !== "";

  const handleClick = async () => {
    if (isInfoComplete()) {
      const response = await loginUser(userInfo);
      console.log(response);
      if (response.success && response?.data?.token) {
        const userId = getUserId(response.data.token);
        const userData: User = await getUser(userId, token ?? "");
        setUser(userData);
        setToken(response.data.token);
        setUserInfo({ userName: "", password: "" });
        router.push("/home");
      } else {
        setError("Opps! Bad credentials!");
      }
    }
  };

  useEffect(() => {
    console.log("Is Auth?", isAuth);
    if (isAuth) {
      router.push("/home");
    }
  }, [isAuth]);

  return (
    <main className="min-h-full text-center flex flex-col items-center justify-center w-full bg-background-dark">
      <section className="w-4/12 space-y-6 flex-col flex justify-center items-center">
        <Logo className="text-center text-5xl" />
        <Input
          className="w-3/6"
          placeholder="Username"
          type="text"
          onChange={handleChange}
          name="userName"
        />
        <Input
          className="w-3/6"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          name="password"
        />
        {error !== "" && (
          <div>
            <label className="text-red-500 font-medium">{error}</label>
          </div>
        )}
        <Button
          className="w-4/12 bg-secondary-400 hover:bg-secondary-600 disabled:bg-secondary-200"
          disabled={!isInfoComplete()}
          onClick={handleClick}
        >
          Login
        </Button>
      </section>
    </main>
  );
}
