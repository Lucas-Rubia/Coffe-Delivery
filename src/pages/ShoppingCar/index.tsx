import { Separator } from "@/components/ui/separator";
import {
  CoinsIcon,
  CreditCardIcon,
  DollarSign,
  MapPin,
  Minus,
  Plus,
  Trash2Icon,
} from "lucide-react";
import { images } from "../../utils/imagens";

export function ShooppingCar() {
  return (
    <div className="flex mt-10">
      <div>
        <h1 className="text-base_subtitle text-[23px] font-semibold mb-[15px] ml-40">
          Complete seu Pedido
        </h1>

        <div className="bg-base_card rounded-lg p-10 ml-40 ">
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
            </div>

            <div className="flex flex-col [&_input]:bg-base_button [&_input]:rounded-lg [&_div]:m-4 [&_div]:flex [&_div_input]:p-3 [&_div_input]:mx-3 mt-8 mb-10">
              <div>
                <input className="max-w-{200px]" placeholder="CEP" />
              </div>

              <div>
                <input className="flex-1" placeholder="Rua" />
              </div>

              <div>
                <input placeholder="Numero" />
                <input
                  className="flex-1"
                  placeholder="Complemento (opcional)"
                />
              </div>
              <div>
                <input placeholder="Bairro" />
                <input className="flex-1" placeholder="Cidade" />
                <input className="max-w-[60px]" placeholder="UF" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base_card rounded-lg p-10 mb-10 mt-3 ml-40">
          <div className="flex text-base font-Roboto gap-2">
            <DollarSign className="text-purple size-[22px]" />
            <div>
              <p>Pagamento</p>
              <p className="text-sm text-base_text">
                O Pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="mt-8 mb-10">
            <div className="flex gap-3 [&_button]:flex [&_button]:items-center [&_button]:gap-3 [&_button]:bg-base_button [&_button]:py-2 [&_button]:pl-6 [&_button]:rounded-md [&_button]:flex-1  ">
              <button className="border border-transparent hover:border-purple transition">
                <CreditCardIcon className="text-purple size-5" />
                <span className="text-xs text-base_text">
                  CARTÃO DE CRÉDITO
                </span>
              </button>
              <button className="border border-transparent hover:border-purple transition">
                <CreditCardIcon className="text-purple size-5" />
                <span className="text-xs text-base_text">CARTÃO DE DÉBITO</span>
              </button>
              <button className="border border-transparent hover:border-purple transition">
                <CoinsIcon className="text-purple size-5" />
                <span className="text-xs text-base_text">DINHEIRO</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-base_subtitle text-[23px] font-semibold mb-[15px] ml-8">
          <h1>Cafés Selecionados</h1>
        </div>

        <div className="rounded-tr-2xl rounded-bl-2xl bg-base_card ml-8">
          <div className="flex p-10 gap-6">
            <div className="size-16">
              <img src={images.ExpressoTradicional} alt="ExpressoTradicional" />
            </div>

            <div>
              <div className="flex mb-2">
                <h3>Expresso Tradicional</h3>
                <p className="ml-[50px] font-bold font-Baloo text-base_text text-lg texte-center">
                  R$ 9,90
                </p>
              </div>

              <div className=" flex [&_div]:flex gap-2 [&_div]:rounded-lg ">
                <div className="bg-base_button p-2 gap-1">
                  <Minus className="text-purple" />
                  <span>1</span>
                  <Plus className="text-purple" />
                </div>

                <div className="bg-base_button p-2 text-base_text uppercase gap-2">
                  <Trash2Icon className="text-purple size-4 items-center mt-1" />
                  <p>Remover</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="w-368 mx-10" />


          <div className="px-10 py-6 text-sm text-base_text space-y-3">
            <div className="flex justify-between">
              <p>Total de Itens</p>
              <p>R$ 29,70</p>
            </div>

            <div className="flex justify-between">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>

            <div className="flex justify-between text-base_subtitle text-xl font-bold">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>

            <div className=" flex justify-center bg-yellow p-3 rounded-lg text-white text-sm">
              <button>Confirmar Pedido</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
