import { useEffect, useState } from "react";
import iconEditFeedback from "../../../../../../../assets/shared/icon-edit-feedback.svg";
import iconNewFeedback from "../../../../../../../assets/shared/icon-new-feedback.svg";

import { productRequests } from "../../../../../../../data";

import {
  Button,
  CustomInput,
  CategoryDropdown,
  CustomTextArea,
  FeedbackStatusDropdown,
} from "../../../../../../../generalComponents";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const AddEditFeedback = ({ isEdit = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { id } = useParams();

  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});

  const [feedbackData, setFeedbackData] = useState({});

  const handleFormSubmit = (data) => {
    console.log("Data", data);
  };

  useEffect(() => {
    if (id) {
      const data = productRequests.find(
        (feedback) => feedback.id === Number(id)
      );
      setFeedbackData(data);
    }
  }, [id]);

  useEffect(() => {
    setValue("title", feedbackData?.title);
    setValue("description", feedbackData?.description);
    setSelectedCategory({ label: feedbackData?.category });
    setSelectedStatus({ label: feedbackData?.status });
  }, [feedbackData]);

  return (
    <main className="w-full min-h-screen flex items-start justify-center bg-grey-50 dark:bg-grey-950 px-6 py-8 pb-[77px] md:px-[114px] md:pb-[223px] xl:pb-[187px]">
      <div className="flex flex-col gap-[55px] md:gap-[68px] xl:max-w-[540px] xl:mx-auto xl:w-[540px]">
        <div>
          <Button label="Go back" variant="back-transparent" />
        </div>
        <form
          className="relative px-6 pb-6  rounded-[10px] bg-grey-0 dark:bg-grey-600 md:px-[42px] md:pb-10"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="absolute left-6 md:left-10 top-0 -translate-y-1/2">
            <img
              src={isEdit ? iconEditFeedback : iconNewFeedback}
              alt={isEdit ? "Edit Feedback Icon" : "New Feedback Icon"}
              className="size-10 md:size-[56px]"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-grey-400 dark:text-grey-100 mt-[44px] md:mt-[52px] md:text-3xl">
              {isEdit
                ? `Editing ‘${feedbackData?.title}’`
                : "Create New Feedback"}
            </h2>

            {/* Feedback Title Form Group Start */}
            <div className="mt-6 md:mt-10">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Feedback Title
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Add a short, descriptive headline
              </p>
              <div className="mt-4">
                <CustomInput
                  placeholder=""
                  name="title"
                  register={register}
                  validationRules={{
                    required: "Can't be empty",
                    minlength: [10, "Must be greater than 10 characters"],
                    maxlength: [60, "Cannot be greater than 60 characters"],
                  }}
                  error={errors?.title?.message}
                  className="w-full"
                />
              </div>
            </div>
            {/* Feedback Title Form Group End */}

            {/* Feedback Category Dropdown Start */}
            <div className="mt-6 ">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Category
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Choose a category for your feedback
              </p>
              <div className="mt-4">
                <CategoryDropdown
                  placeholder="Feedback Category"
                  selectedOption={selectedCategory}
                  onSelect={setSelectedCategory}
                  className="w-full"
                />
              </div>
            </div>
            {/* Feedback Category Dropdown End */}

            {/* Feedback Status Dropdown Start */}
            <div className="mt-6 ">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Update Status
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Change feature state
              </p>
              <div className="mt-4">
                <FeedbackStatusDropdown
                  placeholder="Feedback Status"
                  selectedOption={selectedStatus}
                  onSelect={setSelectedStatus}
                  className="w-full"
                />
              </div>
            </div>
            {/* Feedback Status Dropdown End */}

            {/* Feedback Detail Form Field Start */}
            <div className="mt-6 ">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Feedback Detail
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <div className="mt-4">
                <CustomTextArea
                  placeholder=""
                  name="description"
                  register={register}
                  validationRules={{
                    required: "Can't be empty",
                    minlength: [10, "Must be greater than 10 characters"],
                    maxlength: [60, "Cannot be greater than 60 characters"],
                  }}
                  error={errors?.description?.message}
                  className="w-full h-[120px] md:h-[96px]"
                />
              </div>
            </div>
            {/* Feedback Detail Form Field End */}

            {/* Feedback Actions */}
            <div className="mt-10 flex flex-col w-full md:mt-8 md:flex-row-reverse md:items-center md:justify-between">
              <div className="flex flex-col gap-4 md:flex-row-reverse">
                <Button label={isEdit ? "Save Changes" : "Add Feedback"} />
                <Button label="Cancel" variant="tertiary" />
              </div>
              {isEdit && (
                <div className="mt-4 md:mt-0">
                  <Button label="Delete" variant="danger" className="w-full" />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
