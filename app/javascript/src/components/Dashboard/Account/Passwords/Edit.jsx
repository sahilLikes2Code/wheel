import React from "react";

import { Form, Formik } from "formik";
import { Header } from "neetoui/layouts";
import { Button, Toastr } from "neetoui/v2";
import { Input as FormikInput } from "neetoui/v2/formik";
import * as Yup from "yup";

import registrationsApi from "apis/registrations";

const Edit = () => {
  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    password: Yup.string().required("New password is required"),
    passwordConfirmation: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const formikInputAttrs = {
    type: "password",
    "aria-required": "true",
    placeholder: "******",
  };

  const handleSubmit = async data => {
    try {
      await registrationsApi.updatePassword({
        user: {
          current_password: data.currentPassword,
          password: data.password,
          password_confirmation: data.passwordConfirmation,
        },
      });
      Toastr.success("Password updated successfully");
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <>
      <Header title="Change Password" className="border-b border-gray-200" />
      <div className="flex flex-col justify-center items-center mx-auto w-full h-full sm:max-w-md">
        <Formik
          initialValues={{
            currentPassword: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="p-8 space-y-6 w-full bg-white rounded-lg border shadow-sm">
            <FormikInput
              {...formikInputAttrs}
              name="currentPassword"
              label="Current password"
            />
            <FormikInput
              {...formikInputAttrs}
              name="password"
              label="New password"
            />
            <FormikInput
              {...formikInputAttrs}
              name="passwordConfirmation"
              label="Confirm password"
            />
            <Button name="submit" type="submit" label="Update" fullWidth />
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Edit;
