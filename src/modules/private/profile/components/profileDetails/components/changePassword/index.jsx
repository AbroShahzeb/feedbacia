import { useMutation } from "@tanstack/react-query";
import { Button, CustomInput } from "../../../../../../../generalComponents";
import { useForm } from "react-hook-form";
import { updatePassword } from "../../../../../../../services/authApi";
import toast from "react-hot-toast";

export const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      console.log("data", data);
      if (data.status === "success") {
        toast.success("Password changed successfully");
        reset();
      } else if (data.status === "fail") {
        toast.error(data.message);
      } else {
        toast.error("Something wrong happened");
      }
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const handleCancelUpdate = () => {
    reset({
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start gap-5  md:gap-[50px]  w-full"
    >
      <div className="w-full flex flex-col gap-6 flex-1">
        <div className="text-[24px] leading-[30px] font-medium text-grey-600 dark:text-grey-50">
          Change Password
        </div>
        <div>
          <CustomInput
            validationRules={{
              required: "Can't be empty",
              minlength: {
                value: 8,
              },
            }}
            name="currentPassword"
            register={register}
            error={errors?.currentPassword?.message}
            placeholder="Current Password"
            className="w-full"
          />
        </div>
        <div>
          <CustomInput
            validationRules={{
              required: "Can't be empty",
              minlength: {
                value: 8,
                message: "Must be atleast 8 characters long",
              },
            }}
            name="password"
            register={register}
            error={errors?.password?.message}
            placeholder="Password"
            className="w-full"
          />
        </div>

        <div>
          <CustomInput
            validationRules={{ required: "Can't be empty" }}
            name="passwordConfirm"
            register={register}
            error={errors?.passwordConfirm?.message}
            placeholder="Password Confirmation"
            className="w-full"
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button
            variant="transparent"
            label="Cancel"
            onClick={handleCancelUpdate}
          />
          <Button
            label="Update"
            type="submit"
            isLoading={isPending}
            disabled={isPending}
          />
        </div>
      </div>
    </form>
  );
};
