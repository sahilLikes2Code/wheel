import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui/v2";
import { Input as FormikInput } from "neetoui/v2/formik";

import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

const ResetPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    // trigger api call for reset password
  };

  return (
    <div className="flex overflow-y-auto overflow-x-hidden flex-row justify-center items-center p-6 w-screen h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center mx-auto w-full h-full sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Forgot your password?
        </h2>
        <div className="mt-4 mb-5 w-2/3 text-center text-gray-700">
          Enter your email address below and we&apos;ll send you a link to reset
          your password.
        </div>
        <Formik
          initialValues={formInitialValues.resetPasswordForm}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={onSubmit}
          validationSchema={formValidationSchemas.resetPasswordForm}
        >
          {({ handleSubmit }) => (
            <Form
              className="p-8 space-y-6 w-full bg-white rounded-md border shadow"
              id="new_user"
            >
              <FormikInput name="email" label="Email" type="email" required />
              <div className="flex flex-col justify-center items-center space-y-2">
                <Button
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    setSubmitted(true);
                    handleSubmit();
                  }}
                  label="Send reset password email"
                  data-disable-with="Send reset password email"
                  fullWidth
                />
                <Button label="Back" style="link" to="/login" />
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex flex-row justify-start items-center mt-4 space-x-1">
          <p className="font-normal text-gray-600">{`Don't have an account?`}</p>
          <Button label="Signup" style="link" to="/signup" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
