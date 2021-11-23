import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";
import { Input } from "neetoui/formik";

import notesApi from "apis/notes";
import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

import AssignedContractDropdown from "./AssignedContractDropdown";
import TagsDropdown from "./TagsDropdown";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={formInitialValues.newNoteForm}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.newNoteForm}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Input label="Title *" name="title" className="mb-6" />
          <Input label="Description  *" name="description" className="mb-6" />
          <AssignedContractDropdown name="assignedContact" />
          <TagsDropdown name="tags" />

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
