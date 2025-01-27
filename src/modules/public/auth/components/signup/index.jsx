import { useForm } from "react-hook-form";
import { Button, CustomInput } from "../../../../../generalComponents";
import { IconEyeOpen } from "../../../../../assets/svgAssetsComponents/IconEyeOpen";
import { useState } from "react";
import { IconEyeClose } from "../../../../../assets/svgAssetsComponents/IconEyeClose";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../../../../services/authApi";
import toast from "react-hot-toast";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      if (data.status === "fail") {
        toast.error(data.message);
      } else {
        toast.success("Signed up successfully. Redirecting...");
      }
    },
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordConfirmShown, setIsPasswordConfirmShown] = useState(false);

  return (
    <main className="w-full min-h-screen flex items-start justify-center bg-grey-50 dark:bg-grey-950 px-6 py-8 pb-[77px] md:px-[114px] md:pt-[56px] md:pb-[223px]  xl:pt-[92px] xl:pb-[187px]">
      <div className="flex flex-col gap-[55px] w-full md:gap-[68px] max-w-[500px] md:mx-auto md:w-[500px]">
        <div>
          <Button label="Go back" variant="back-transparent" />
        </div>
        <form
          className="relative px-6 pb-6  rounded-[10px] bg-grey-0 dark:bg-grey-600 md:px-[42px] md:pb-10"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div>
            <h2 className="text-xl font-bold text-grey-400 dark:text-grey-100 mt-[44px] md:mt-[52px] md:text-3xl">
              Signup
            </h2>

            {/* Name Form Group Start */}
            <div className="mt-6 md:mt-10">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Name
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Enter your name below, keep it short
              </p>
              <div className="mt-4">
                <CustomInput
                  placeholder=""
                  name="name"
                  register={register}
                  validationRules={{
                    required: "Can't be empty",
                  }}
                  error={errors?.name?.message}
                  className="w-full"
                />
              </div>
            </div>
            {/* Name Form Group End */}

            {/* Email Form Group Start */}
            <div className="mt-6">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Email address
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Enter your email below, make sure it is valid
              </p>
              <div className="mt-4">
                <CustomInput
                  placeholder=""
                  name="email"
                  register={register}
                  validationRules={{
                    required: "Can't be empty",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  error={errors?.email?.message}
                  className="w-full"
                />
              </div>
            </div>
            {/* Email Form Group End */}

            {/* Password Form Group Start */}
            <div className="mt-6 ">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Password
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Enter your password below, must be atleast 8 characters long
              </p>
              <div className="mt-4">
                <CustomInput
                  placeholder=""
                  name="password"
                  register={register}
                  validationRules={{
                    required: "Can't be empty",
                    minLength: {
                      value: 8,
                      message: "Must be atleast 8 characters long",
                    },
                  }}
                  error={errors?.password?.message}
                  className="w-full"
                  postIcon={
                    isPasswordShown ? <IconEyeClose /> : <IconEyeOpen />
                  }
                  type={isPasswordShown ? "text" : "password"}
                  postIconClickAction={() =>
                    setIsPasswordShown((prev) => !prev)
                  }
                />
              </div>
            </div>
            {/* Password Form Group End */}

            {/* Password Confirmation Form Group Start */}
            <div className="mt-6 ">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Password Confirmation
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Enter your password again
              </p>
              <div className="mt-4">
                <CustomInput
                  placeholder=""
                  name="passwordConfirm"
                  register={register}
                  validationRules={{
                    required: "Can't be empty",
                  }}
                  error={errors?.passwordConfirm?.message}
                  className="w-full"
                  postIcon={
                    isPasswordConfirmShown ? <IconEyeClose /> : <IconEyeOpen />
                  }
                  type={isPasswordConfirmShown ? "text" : "password"}
                  postIconClickAction={() =>
                    setIsPasswordConfirmShown((prev) => !prev)
                  }
                />
              </div>
            </div>
            {/* Password Confirmation Form Group End */}

            {/* Already a member start*/}
            <div className="mt-4 ">
              <div className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Already a member?{" "}
                <Link to="/auth/login" className="underline text-secondary">
                  Login
                </Link>
              </div>
            </div>
            {/* Already a member end */}

            {/* Signup Actions */}
            <div className="mt-10  md:mt-8 ">
              <Button label="Signup" type="submit" isLoading={isPending} />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
