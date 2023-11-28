import Image from "next/image";

interface ProductCardProps extends ITrocaProduct {}

export const ProductCard = ({ id, image, name, price }: ProductCardProps) => {
  return (
    <article
      className="
    flex flex-1 items-center justify-center
    border border-solid border-r-gray-100
    rounded-lg
    gap-3 cursor-pointer shadow-md shadow-gray-400
    
    "
    >
      <div className="p-4 relative   flex flex-1">
        <Image src={image} height={140} width={140} alt={name} />
      </div>

      <div
        className=" w-28 font-mono min-h-40 mr-4 
    flex flex-col gap-6 justify-around
      "
      >
        <h3
          className="line-clamp-2 cursor-text font-sans
        text-lg

             
        capitalize "
        >
          {name}
        </h3>
        <p className="cursor-text red text-gray-700  font-semibold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </p>
      </div>
    </article>
  );
};
