import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Toastr, Input } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";

import formInitialValues from "constants/formInitialValues";

import AssignedRoleDropdown from "./AssignedRoleDropdown";

import formValidationSchemas from "../../../constants/formValidationSchemas";

export default function NewContactForm({ onClose }) {
  const handleSubmit = () => {
    Toastr.success("Contact added successfully.");
    onClose();
  };

  return (
    <Formik
      initialValues={formInitialValues.newContactForm}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.newContactForm}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <div className="flex">
            <Input
              label="First Name *"
              name="firstName"
              className="mr-2 mb-6"
            />
            <Input label="Last Name *" name="lastName" className="mb-6 ml-2" />
          </div>
          <Input label="Email Address *" name="email" className="mb-6" />
          <AssignedRoleDropdown name="role" />

          <div className="absolute bottom-0 left-0 p-8 w-full border-t">
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
