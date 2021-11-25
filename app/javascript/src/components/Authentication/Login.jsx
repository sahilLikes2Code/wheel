import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button, Toastr } from "neetoui/v2";
import { Input as FormikInput } from "neetoui/v2/formik";
import PropTypes from "prop-types";

import authenticationApi from "apis/authentication";
import { setAuthHeaders } from "apis/axios";
import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";
import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

const Login = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      const {
        data: { auth_token, user, is_admin },
      } = await authenticationApi.login({ user: { email, password } });
      authDispatch({ type: "LOGIN", payload: { auth_token, email, is_admin } });
      userDispatch({ type: "SET_USER", payload: { user } });
      setAuthHeaders();
      history.push("/");
      Toastr.success("Logged in successfully.");
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex overflow-y-auto overflow-x-hidden flex-row justify-center items-center p-6 w-screen h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center mx-auto w-full h-full sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Sign In
        </h2>
        <Formik
          initialValues={formInitialValues.loginForm}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={onSubmit}
          validationSchema={formValidationSchemas.loginForm}
        >
          {({ handleSubmit }) => (
            <Form className="p-8 space-y-6 w-full bg-white rounded-md border shadow">
              <FormikInput
                name="email"
                type="email"
                placeholder="oliver@example.com"
                required
                label="Email"
                data-cy="login-email-text-field"
              />
              <FormikInput
                name="password"
                type="password"
                placeholder="******"
                required
                label="Password"
                data-cy="login-password-text-field"
              />
              <Button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  setSubmitted(true);
                  handleSubmit();
                }}
                loading={loading}
                fullWidth
                label="Login"
                data-cy="login-submit-button"
              />
            </Form>
          )}
        </Formik>
        <div className="flex flex-col justify-center items-center mt-4 space-y-2">
          <div className="flex flex-row justify-start items-center space-x-1">
            <p className="font-normal text-gray-600">{`Don't have an account?`}</p>
            <Button
              label="Signup"
              style="link"
              to="/signup"
              data-cy="sign-up-link"
            />
          </div>
          <Button
            label="Forgot password?"
            style="link"
            to="/my/password/new"
            data-cy="forgot-password-link"
          />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
