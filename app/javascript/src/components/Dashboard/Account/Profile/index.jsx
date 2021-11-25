import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Header } from "neetoui/layouts";
import { Button } from "neetoui/v2";
import { Input as FormikInput } from "neetoui/v2/formik";

import formValidationSchemas from "constants/formValidationSchemas";
import { useUserState } from "contexts/user";

const Profile = () => {
  const { user } = useUserState();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    // submit form
  };

  return (
    <>
      <Header title="My Profile" className="border-b border-gray-200" />
      <div className="flex flex-col justify-center items-center mx-auto w-full h-full sm:max-w-md">
        <Formik
          initialValues={{
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
            password: "",
          }}
          onSubmit={onSubmit}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          validationSchema={formValidationSchemas.profileForm}
        >
          {({ handleSubmit }) => (
            <Form className="p-8 space-y-6 w-full bg-white rounded-lg border shadow-sm">
              <FormikInput name="email" label="Email" type="email" required />
              <FormikInput name="firstName" label="First Name" required />
              <FormikInput name="lastName" label="Last name" required />
              <FormikInput
                name="password"
                label="Current password"
                type="password"
                required
              />
              <Button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  setSubmitted(true);
                  handleSubmit();
                }}
                label="Update"
                fullWidth
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Profile;
