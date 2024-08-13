"use client";

import React from "react";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { authService } from "services";
import { ErrorMessage } from "components";
import { loginFormValidationSchema } from "utils/validation";

import css from "./LoginForm.module.scss";

type LoginFormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = async ({ username, password }: LoginFormData) => {
    try {
      await authService.login({ username, password });

      Cookies.set("auth", "just-some-super-secret-token", {
        expires: 7,
        path: "/",
        secure: true,
        sameSite: "Lax",
      });

      router.push("/tickets");
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Неверное имя пользователя или пароль",
      });
    }
  };

  const formik = useFormik<LoginFormData>({
    initialValues: {
      password: "",
      username: "",
    },
    validationSchema: loginFormValidationSchema,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <>
      {contextHolder}
      <Form
        className={css.form}
        name="login"
        autoComplete="off"
        onFinish={formik.submitForm}
      >
        <h1 className={css.formTitle}>Войти</h1>

        <Form.Item
          validateStatus={formik.errors.username ? "error" : undefined}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Имя пользователя"
            {...formik.getFieldProps("username")}
          />
          <ErrorMessage message={formik.errors.username} />
        </Form.Item>
        <Form.Item
          data-name="passwordFormItem"
          validateStatus={formik.errors.password ? "error" : undefined}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Пароль"
            visibilityToggle={false}
            {...formik.getFieldProps("password")}
          />
          <ErrorMessage message={formik.errors.password} />
        </Form.Item>

        <Form.Item className={css.loginFormButtons}>
          <Button
            className={css.loginSubmitButton}
            type="primary"
            size="large"
            htmlType="submit"
            data-name="submitLoginButton"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
