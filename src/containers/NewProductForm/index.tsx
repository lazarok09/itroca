import { Button } from "../../components/SubmitInput";
import { CustomInput } from "@/components/CustomInput";

export const NewProductFormContainer = () => {
  const handleSubmit = () => {};

  return (
    <form id="newproductform" onSubmit={handleSubmit}>
      <fieldset form={"newproductform"}>
        <div className="flex flex-col gap-1">
          <label htmlFor="iphone_name">iPhone</label>
          <CustomInput
            type="text"
            id="iphone_name"
            placeholder="ex: iPhone 11"
            className="normal-case"
          />
          <div className="pt-2" />

          <label>Preço</label>
          <CustomInput
            type="text"
            placeholder="3599,99"
            className="normal-case"
          />
          <div className="pt-2" />

          <label>Imagem</label>
          <CustomInput
            type="text"
            placeholder="url()"
            className="normal-case"
          />
        </div>
        <Button>Enviar</Button>
      </fieldset>
    </form>
  );
};
