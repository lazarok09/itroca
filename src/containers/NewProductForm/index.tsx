import { useForm } from "react-hook-form";
import { Button } from "../../components/SubmitInput";
import { CustomInput } from "@/components/CustomInput";
import { ItrocaCreateProduct, postProduct } from "@/services/itroca";
import { toast } from "react-toastify";

export const NewProductFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, isSubmitting },
  } = useForm<ItrocaCreateProduct>();
  const canSubmit = !isLoading && !isSubmitting;

  const onSubmit = async (inputs: ItrocaCreateProduct) => {
    try {
      const product = await postProduct({
        body: {
          image: inputs.image,
          name: inputs.name,
          price: inputs.price,
        },
      });
      toast.success(`Produto criado.`, {
        className: "toast-custom-icon",
        toastId: `success-${product.id}`,
        autoClose: 1500,
      });
    } catch (e: unknown) {
      console.error("🚀 ~ onSubmit ~ e:", e);
      const treatedError = e as GenericErrorHandler;
      toast.error(`${treatedError.message}`, {
        className: "toast-custom-icon",
        toastId: `error-${treatedError.message}`,
        autoClose: 1500,
      });
    }
  };
  //TODO : https://jujuontheweb.medium.com/how-to-use-react-hook-form-with-your-custom-form-components-a86a1a77cf3c

  return (
    <form id="newproductform" onSubmit={handleSubmit(onSubmit)}>
      <fieldset form={"newproductform"}>
        <div className="flex flex-col gap-1">
          <label htmlFor="iphone_name">iPhone</label>
          <CustomInput
            type="text"
            id="iphone_name"
            placeholder="ex: iPhone 11"
            className="normal-case"
            {...register("name")}
          />

          <div className="pt-2" />

          <label>Preço</label>
          <CustomInput
            type="text"
            {...register("price")}
            placeholder="3599,99"
            className="normal-case"
          />
          <div className="pt-2" />

          <label htmlFor="image_url">Imagem</label>
          <CustomInput
            type="text"
            {...register("image")}
            placeholder="url()"
            className="normal-case"
          />
        </div>
        <Button form="newproductform" type="submit" disabled={!canSubmit}>
          Enviar
        </Button>
      </fieldset>
    </form>
  );
};
