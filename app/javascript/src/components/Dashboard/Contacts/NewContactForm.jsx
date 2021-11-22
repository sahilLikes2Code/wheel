import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Toastr } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";
import { Input } from "neetoui/formik";
import * as yup from "yup";

import AssignedRoleDropdown from "./AssignedRoleDropdown";

export default function NewContactForm({ onClose }) {
  const handleSubmit = () => {
    Toastr.success("Contact added successfully.");
    onClose();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        role: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email: yup.string().required("Last Name is required"),
        role: yup.object().required("Role is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <div className="flex">
            <Input
              label="First Name *"
              name="firstName"
              className="mb-6 w-1/3 mr-2"
            />
            <Input
              label="Last Name *"
              name="lastName"
              className="ml-2 mb-6 w-1/3"
            />
          </div>
          <Input label="Email Address *" name="email" className="mb-6" />
          <AssignedRoleDropdown name="role" />

          <div className="absolute bottom-0 left-0 border-t p-8 w-full">
            <Button
              type="submit"
              label="Save Changes "
              size="large"
              style="primary"
              disabled={isSubmitting}
              loading={isSubmitting}
              icon={Check}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
