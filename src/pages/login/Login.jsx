import "./Login.scss";

import { Button, Form, Input } from "antd";
import React, { Fragment, useEffect } from "react";
import { Spin, message } from "antd";

import { setToken } from "../../context/slices/authSlices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router
import { useSignInAdminMutation } from "../../context/api/adminApi";

const Login = () => {
  const [signIn, { data, isSuccess, isError, error }] =
    useSignInAdminMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    signIn(values);
  };

  useEffect(() => {
    if (isError) {
      message.error(error?.data?.msg || "Login failed");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.payload));
      navigate("/admin/create-product");
    }
  }, [isSuccess]);

  return (
    <Fragment>
      <div className="login">
        <div className="login__form">
          <Form
            className="login__form__form"
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                style={{
                  backgroundColor: "black",
                }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
