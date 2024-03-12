"use client"

import React from "react";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card isBlurred className="" shadow="sm">
        <div>
          <Image
            className="pt-3 pl-6"
            src="/uploads/logo3.PNG"
            alt="Login logo"
            width={220}
            height={220}
          />
        </div>
        <div className="text-2xl font-bold pt-5 pb-4 flex justify-center">
          <h1>Нэвтрэх</h1>
        </div>
        <CardBody>
          <div className="px-6">
            <p>Email:</p>
            <Input
              type="email"
              placeholder="Enter your email"
              size={'sm'}
              style={{ width: '400px' }}
              className="pt-2"
            />

          </div>
          <div className="px-6 pt-6">
            <p>Password:</p>
            <Input
              type="password"
              placeholder="Enter your password"
              size="sm"
              style={{ width: '400px' }}
              className="pt-2"
            />
          </div>
          <div className="px-6 py-7">
            <Button color="primary" style={{ width: '425px' }}>
              Нэвтрэх
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
