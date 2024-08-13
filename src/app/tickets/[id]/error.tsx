"use client";

import React from "react";
import { FrownOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";

const { Title, Text } = Typography;

const ErrorBoundary = () => {
  const goToTickets = () => {
    window.location.href = "/tickets";
  };

  return (
    <div>
      <Flex gap={40} vertical justify="center" align="center">
        <FrownOutlined style={{ fontSize: "72px", color: "#323232" }} />
        <Title>Упс! Обращение не найдено</Title>
        <Text>
          Я знаю, вы оказались здесь не случайно. Не делайте так больше.
        </Text>
        <Button type="link" onClick={goToTickets}>
          Перейти к списку обращений
        </Button>
      </Flex>
    </div>
  );
};

export default ErrorBoundary;
