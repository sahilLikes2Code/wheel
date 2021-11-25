import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoIcons";
import { Button, Toastr } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

import { ASSIGNED_ROLE_DROPDOWN_OPTIONS } from "../constants";

export default function ContactForm({ onClose }) {
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
        <Form className="space-y-6 w-full">
          <div className="flex space-x-4">
            <Input label="First Name *" name="firstName" size="large" />
            <Input label="Last Name *" name="lastName" size="large" />
          </div>
          <Input label="Email Address *" name="email" size="large" />
          <Select
            name="role"
            isClearable
            isSearchable
            label="Assigned Role *"
            options={ASSIGNED_ROLE_DROPDOWN_OPTIONS}
            placeholder="Select Role"
          />

          <div className="flex absolute bottom-0 left-0 p-8 neeto-ui-pane__footer neeto-ui-shadow-m">
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
