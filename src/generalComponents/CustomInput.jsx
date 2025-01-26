export const CustomInput = ({
  placeholder = "",
  register,
  error = "",
  validationRules,
  name,
  className = "",
  postIcon,
  postIconClickAction,
  type = "text",
}) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        {...register(name, validationRules)}
        className={`text-grey-500 dark:text-grey-100/75 dark:bg-grey-500 text-[15px] font-normal py-[13px] px-6 rounded-[5px] focus:outline-none border ${
          error
            ? "border-[#D73737]"
            : "border-transparent focus:border-secondary "
        } bg-grey-50 ${className}`}
        type={type}
      />
      {postIcon && (
        <button
          onClick={() => postIconClickAction && postIconClickAction()}
          className="absolute top-0 translate-y-1/2 right-3 text-grey-500 dark:text-grey-100 hover:opacity-80"
          type="button"
        >
          {postIcon}
        </button>
      )}

      {error && (
        <p className="text-[14px] font-normal text-[#D73737] mt-1">{error}</p>
      )}
    </div>
  );
};
