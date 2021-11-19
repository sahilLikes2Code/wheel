import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";
import { Input } from "neetoui/formik";
import * as yup from "yup";

import notesApi from "apis/notes";

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
      initialValues={{
        title: "",
        description: "",
        assignedContact: "",
        tags: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required"),
        assignedContact: yup.object().required("Assigned contact is required"),
        tags: yup.object().required("Tag is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Input label="Title" name="title" className="mb-6" required />
          <Input
            label="Description"
            name="description"
            className="mb-6"
            required
          />
          <AssignedContractDropdown name="assignedContact" />
          <TagsDropdown name="tags" />

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
