import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoIcons";
import { Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import notesApi from "apis/notes";
import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

import {
  ASSIGNED_CONTACT_DROPDOWN_OPTIONS,
  TAG_DROPDOWN_OPTIONS,
} from "../constants";

export default function NoteForm({ onClose, refetch }) {
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
        <Form className="space-y-6 w-full">
          <Input label="Title *" name="title" size="large" />
          <Input label="Description  *" name="description" size="large" />
          <Select
            name="assignedContact"
            isClearable
            isSearchable
            label="Assigned Contact  *"
            options={ASSIGNED_CONTACT_DROPDOWN_OPTIONS}
            placeholder="Select Role"
          />
          <Select
            name="tags"
            isClearable
            isSearchable
            label="Tags *"
            options={TAG_DROPDOWN_OPTIONS}
            placeholder="Select Role"
          />

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
