import { useForm } from "react-hook-form";
import { Button, CustomInput } from "../../../../../generalComponents";
import { IconEyeOpen } from "../../../../../assets/svgAssetsComponents/IconEyeOpen";
import { useState } from "react";
import { IconEyeClose } from "../../../../../assets/svgAssetsComponents/IconEyeClose";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
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
              Reset Password
            </h2>

            {/* Password Form Group Start */}
            <div className="mt-6 md:mt-10 ">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Password
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Enter your new password below, must be atleast 8 characters long
              </p>
              <div className="mt-6">
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

            {/* Reset Password Actions */}
            <div className="mt-10  md:mt-8 ">
              <Button label="Reset" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
