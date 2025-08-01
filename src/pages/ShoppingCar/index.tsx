import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { PaymentType } from "@/enums/paymentType";
import { addItemsProduct, removeFromCart, removeItemsProduct, selectCart } from "@/redux/cartSlice";
import { ValidacaoFromsType, validacaoSchema } from "@/Schemas/validacaoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Coins,
  CreditCardIcon,
  DollarSign,
  MapPin,
  Minus,
  Plus,
  Trash2Icon
} from "lucide-react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormValidation } from "./formsValidation";





export function ShooppingCar() {

const DELIVERY = 3.5

const {products} = useSelector(selectCart)


const dispatch = useDispatch();



const navigate = useNavigate();

  const form = useForm<ValidacaoFromsType>({
    resolver: zodResolver(validacaoSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const onSubmit = (data: ValidacaoFromsType) => {
    navigate("confirmation", {
      replace: true,
      state:data
    })
  };

const subtotal = useMemo(() => {
  return products.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0)
}, [products])


const total = useMemo(() => {
  return subtotal + DELIVERY;
},[subtotal])
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex mt-10 ">
        <div>
          <h1 className="text-base_subtitle text-[23px] font-semibold mb-[15px] ml-40">
            Complete seu Pedido
          </h1>

          <div className="bg-base-card rounded-lg p-10 ml-40 max-w-[640px]">
            <div>
              <div className="pl-7">
                <div className="flex gap-2 items-start ">
                  <MapPin className="size-5 text-yellow_dark my-1" />
                  <div>
                    <p className="text-base">Endereço de Entrega</p>
                    <p className=" text-sm">
                      Infrome o endereço onde deseja receber seu pedido
                    </p>
                  </div>
                </div>
                <FormValidation control={form.control} />
              </div>
            </div>
          </div>

          <div className="bg-base-card rounded-lg p-10 mb-10 mt-3 ml-40">
            <div className="flex text-base font-Roboto gap-2">
              <DollarSign className="text-purple size-[22px]" />
              <div>
                <p>Pagamento</p>
                <p className="text-sm text-base_text">
                  O Pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className="mt-8">
              <FormField
                control={form.control}
                name="paymentType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-3"
                      >
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem
                              value={PaymentType.CREDIT_CARD}
                              className="sr-only peer"
                              id="credit-card"
                            />
                          </FormControl>
                          <FormLabel
                            className="peer-data-[state=checked]:border-purple border border-transparent hover:border-purple transition cursor-pointer flex items-center gap-3 bg-base_button py-2 px-6 rounded-md flex-1"
                            htmlFor="credit-card"
                          >
                            <CreditCardIcon className="text-purple size-5" />
                            <span className="text-xs text-base_text">
                              CARTÃO DE CRÉDITO
                            </span>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center  ">
                          <FormControl>
                            <RadioGroupItem
                              value={PaymentType.DEBT_CARD}
                              className="sr-only peer"
                              id="debt-card"
                            />
                          </FormControl>
                          <FormLabel
                            className="peer-data-[state=checked]:border-purple border border-transparent hover:border-purple transition cursor-pointer flex items-center gap-3 bg-base_button py-2 px-6 rounded-md flex-1"
                            htmlFor="debt-card"
                          >
                            <CreditCardIcon className="text-purple size-5" />
                            <span className="text-xs text-base_text">
                              CARTÃO DE DÉBITO
                            </span>
                          </FormLabel>
                        </FormItem>

                        <FormItem>
                          <FormControl>
                            <RadioGroupItem
                              value={PaymentType.IN_CASH}
                              className="sr-only peer"
                              id="inCash"
                            />
                          </FormControl>
                          <FormLabel
                            className="peer-data-[state=checked]:border-purple border border-transparent hover:border-purple transition cursor-pointer flex items-center gap-3 bg-base_button py-2 px-6 rounded-md flex-1"
                            htmlFor="inCash"
                          >
                            <Coins className="text-purple size-5" />
                            <span className="text-xs text-base_text">
                              DINHEIRO
                            </span>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-base_subtitle text-[23px] font-semibold mb-[15px] ml-8">
            <h1>Cafés Selecionados</h1>
          </div>

          <div className="rounded-tr-2xl rounded-bl-2xl bg-base-card ml-8">
            {products.map((product, index) => (
              <div key={index} className="flex p-10 gap-6">
                <div className="size-16">
                  <img src={product.image} alt="ExpressoTradicional" />
                </div>

                <div>
                  <div className="flex mb-2">
                    <h3>{product.titulo}</h3>
                    <p className="ml-[50px] font-bold font-Baloo text-base_text text-lg texte-center">
                      R$ {product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className=" flex [&_div]:flex gap-2 [&_div]:rounded-lg ">
                    <div className=" flex bg-base_button items-center rounded-lg p-2 gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(removeItemsProduct(product.titulo))
                        }
                      >
                        <Minus className="size-3.5 text-purple" />
                      </button>
                      <span className="text-xl">{product.count}</span>
                      <button type="button" onClick={() =>
                          dispatch(addItemsProduct(product.titulo))
                        }>
                        <Plus className="size-3.5 text-purple" />
                      </button>
                    </div>

                    <button type="button" className="bg-base_button p-2 flex text-base_text uppercase gap-2 rounded-md" onClick={() => dispatch(removeFromCart(product.titulo))}>
                      <Trash2Icon className="text-purple size-4 items-center mt-1" />
                      <p>Remover</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Separator className="w-368 mx-10" />

            <div className="px-10 py-6 text-sm text-base_text space-y-3">
              <div className="flex justify-between">
                <p>Total de Itens</p>
                <p>R$ {subtotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <p>Entrega</p>
                <p>R$ {DELIVERY.toFixed(2)}</p>
              </div>

              <div className="flex justify-between text-base_subtitle text-xl font-bold">
                <p>Total</p>
                <p>R$ {total.toFixed(2)}</p>
              </div>

              <button
                className="flex justify-center bg-yellow p-3 rounded-lg text-white text-sm mt-6 w-full"
                type="submit"
              >
                Confirmar Pedido
              </button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
