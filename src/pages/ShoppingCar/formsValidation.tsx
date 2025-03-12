import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { ValidacaoFromsType } from "@/Schemas/validacaoSchema";
import { Control } from "react-hook-form";

interface FormValidationProps{
    control: Control<ValidacaoFromsType> 
}

export function FormValidation({control}:FormValidationProps) {

  return (
    <div className="space-y-4 mt-8">
      <FormField
        control={control}
        name="cep"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <input
                className="bg-base_button rounded-lg p-3 w-full"
                placeholder="CEP"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="rua"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <input
                className="bg-base_button rounded-lg p-3 w-full"
                placeholder="Rua"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="numero"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="bg-base_button rounded-lg p-3 w-full"
                  placeholder="Número"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="complemento"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <input
                    className="bg-base_button rounded-lg p-3 w-full pr-[75px]"
                    placeholder="Complemento"
                    {...field}
                  />
                  <span className="absolute right-3 top-3 text-base_label text-sm ">
                    Opcional
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex flex-row gap-4">
        {/* Campo Bairro */}
        <FormField
          control={control}
          name="bairro"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="bg-base_button rounded-lg p-3 flex-1"
                  placeholder="Bairro"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="cidade"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="bg-base_button rounded-lg p-3 flex-1"
                  placeholder="Cidade"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="uf"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="bg-base_button rounded-lg p-3 max-w-[90px]"
                  placeholder="UF"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

    </div>
  );
}