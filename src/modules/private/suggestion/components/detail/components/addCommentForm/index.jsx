import { Button, CustomTextArea } from "../../../../../../../generalComponents";

import { useForm } from "react-hook-form";

export const AddCommentForm = ({ maxCharacters = 250 }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const commentInput = watch("comment");

  const onAddComment = (data) => {
    console.log("Comment Data", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onAddComment)}
      className="bg-grey-0 p-6 rounded-[10px]"
    >
      <div className="text-xl font-bold text-grey-400">Add Comment</div>
      <div className="w-full mt-6">
        <CustomTextArea
          register={register}
          name="comment"
          error={errors?.comment?.message}
          validationRules={{ required: "Can't be empty" }}
          maxLength={maxCharacters}
          className="w-full h-[80px]"
          placeholder="Type your comment here"
        />
      </div>

      <div className="flex items-center gap-2 justify-between mt-4">
        <p className="text-xs text-grey-300">
          {maxCharacters - commentInput?.length} characters left
        </p>
        <Button label="Post Comment" type="submit" />
      </div>
    </form>
  );
};
