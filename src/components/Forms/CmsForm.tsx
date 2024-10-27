import { FormProvider, useForm } from "react-hook-form";
import { cmsSchema, cmsForm, typeOptions } from "../../schemas/cms";
import { zodResolver } from "@hookform/resolvers/zod";
import Button2 from "../Button/Button2";
import Input from "../Input";
import Select from "../Select";

type props = {
  onSubmit: (data: cmsForm) => void;
};

function CmsForm({ onSubmit }: props) {
  const methods = useForm<cmsForm>({
    resolver: zodResolver(cmsSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Name</Input>
        <Input name="lastName">Last Name</Input>
        <Input name="email">email</Input>
        <Select options={typeOptions} label="Seleccione un tipo" name="type" />

        <div className="mt-3 mb-4">
          <input type="submit" className="btn btn-primary" value="Enviar" />
          <Button2 onClick={() => methods.reset()}> Limpiar </Button2>
        </div>
      </form>
    </FormProvider>
  );
}

export default CmsForm;
