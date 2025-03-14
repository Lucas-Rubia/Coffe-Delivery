import { PaymentType } from "@/Enums/paymentType";
import { z } from "zod";

export const validacaoSchema = z.object({
  cep: z
    .string().length(8, 'CEP Inválido'),

  rua: z
    .string()
    .min(1, "Campo Obrigatório")
    .max(30, "Campo só pode conter até 30 caracteres"),
  numero: z
    .string()
    .min(1, "Campo Obrigatório")
    .max(5, "Campo só pode conter números de até 8 caracteres"),
  complemento: z
    .string()
    .max(30, "Campo só pode conter até 30 caracteres")
    .optional(),
  bairro: z
    .string()
    .min(3, "Campo Obrigatório")
    .max(30, "Campo só pode conter até 30 caracteres"),
  cidade: z
    .string()
    .min(3, "Campo Obrigatório")
    .max(30, "Campo só pode conter até 30 caracteres"),
  uf: z
    .string()
    .min(2, "Campo Obrigatório")
    .max(2, "Campo só pode conter 2 caracteres"),

  paymentType: z.nativeEnum(PaymentType, {
    required_error: "Selecione o tipo de pagamento",
  }),
});

export type ValidacaoFromsType = z.infer<typeof validacaoSchema>