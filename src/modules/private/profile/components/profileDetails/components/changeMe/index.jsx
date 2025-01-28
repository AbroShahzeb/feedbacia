import { useDispatch, useSelector } from "react-redux";
import { Button, CustomInput } from "../../../../../../../generalComponents";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateMe } from "../../../../../../../services/authApi";
import toast from "react-hot-toast";
import { setCredentials } from "../../../../../../public/auth/redux/slice";

export const ChangeMe = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: updateMe,
    onSuccess: (data) => {
      if (data.status === "success") {
        toast.success("Personal details updated successfully");
        dispatch(setCredentials(data.data.user));
        localStorage.setItem("user", JSON.stringify(data.data.user));
      } else if (data.status === "fail") {
        toast.error(data.message);
      } else {
        toast.error("Something wrong happened");
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      name: user?.name,
      email: user?.email,
    });
  }, [user]);

  const onSubmit = (data) => {
    mutate(data);
  };

  const handleCancelUpdate = () => {
    reset({
      name: user?.name,
      email: user?.email,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start gap-5  md:gap-[50px]  w-full"
    >
      <div className="w-full flex flex-col gap-6 flex-1">
        <div className="text-[24px] leading-[30px] font-medium text-grey-600 dark:text-grey-50">
          Personal Details
        </div>
        <div>
          <CustomInput
            validationRules={{ required: "Can't be empty" }}
            name="name"
            register={register}
            error={errors?.name?.message}
            placeholder="Name"
            className="w-full"
          />
        </div>

        <div>
          <CustomInput
            validationRules={{ required: "Can't be empty" }}
            name="email"
            register={register}
            error={errors?.email?.message}
            placeholder="Email Address"
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
            label="Save Changes"
            type="submit"
            isLoading={isPending}
            disabled={isPending}
          />
        </div>
      </div>
    </form>
  );
};
