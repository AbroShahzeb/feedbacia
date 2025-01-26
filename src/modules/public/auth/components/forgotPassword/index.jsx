import { useForm } from "react-hook-form";
import { Button, CustomInput } from "../../../../../generalComponents";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

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
              Request Reset Link
            </h2>

            {/* Email Form Group Start */}
            <div className="mt-6 md:mt-10">
              <h3 className="text-xs font-bold leading-[-0.181px] text-grey-400 dark:text-grey-100">
                Email
              </h3>
              <p className="mt-[3px] text-xs text-grey-300 dark:text-grey-100/75">
                Enter your email, and we'll send reset link to that email
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

            {/* Forgot Password Actions */}
            <div className="mt-10  md:mt-8 ">
              <Button label="Request" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
