export const ProductCard = ({ product }) => {
  return (
    <div className="md:bg-suggestion-header-tablet  md:p-6 md:flex-1 md:pt-[103px] xl:bg-suggestion-header-desktop bg-no-repeat xl:p-6 md:bg-cover md:rounded-[10px] text-grey-0 xl:pt-[62px]">
      <div>
        <h3 className="text-2xl font-bold">{product?.name}</h3>
        <p className="text-sm font-medium opacity-75">{product?.slogan}</p>
      </div>
    </div>
  );
};
