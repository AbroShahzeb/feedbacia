export const CustomInput = ({
  placeholder = "",
  register,
  error = "",
  validationRules,
  name,
  className = "",
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        {...register(name, validationRules)}
        className={`text-grey-500 text-[15px] font-normal py-[13px] px-6 rounded-[5px] focus:outline-none border ${
          error
            ? "border-[#D73737]"
            : "border-transparent focus:border-secondary "
        } bg-grey-50 ${className}`}
      />
      {error && (
        <p className="text-[14px] font-normal text-[#D73737] mt-1">{error}</p>
      )}
    </div>
  );
};
