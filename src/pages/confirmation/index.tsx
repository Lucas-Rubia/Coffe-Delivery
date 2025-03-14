import { PaymentType } from "@/Enums/paymentType";
import { ValidacaoFromsType } from "@/Schemas/validacaoSchema";
import { images } from "@/utils/imagens";
import { DollarSign, MapPin, TimerIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Confirmation (){
 const location = useLocation();
 const orderDetails = location.state as ValidacaoFromsType;


  const displayPaymentType = () => {
    switch (orderDetails.paymentType) {
      case PaymentType.IN_CASH:
        return "Em Dinheiro"  
      case PaymentType.CREDIT_CARD:
        return "Cartão de Crédito"  
      case PaymentType.DEBT_CARD:
        return "Cartão de Débito"  

      default:
        return "Em Dinheiro"
    }
  }

    return (
      
      <div className="ml-40 mt-20 mb-10">
        <div className="mb-10">
          <h1 className="text-yellow_dark text-[32px] font-Baloo font-bold">
            Uhu! Pedido confirmado
          </h1>
          
          <p className="text-xl font-Roboto text-base_subtitle">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>

        <div className="flex font-Roboto text-base text-base_text gap-[98px]">
          <div className="[&_div]:flex [&_div]:gap-3 [&_div]:m-8 border border-purple_dark rounded-tr-[50px] rounded-bl-[50px] p-10">
            <div className="items-center">
              <MapPin className="bg-purple_dark rounded-full p-2 text-white size-8" />
              <p className="w-2/3">
                Entrega em <span className="font-bold">{orderDetails.rua}, {orderDetails.numero}</span> {orderDetails.bairro}
                - {orderDetails.cidade}, {orderDetails.uf}
              </p>
            </div>

            <div className="items-center">
                <TimerIcon className="bg-yellow rounded-full p-2 text-white size-8"/>
                <p>Previsão de Entrega <span className="block font-bold"> 20 min - 30 min</span></p>
            </div>

            <div className="items-center">
                <DollarSign className="bg-yellow_dark rounded-full p-2 text-white size-8"/>
                <p>Pagamento na Entrega <span className="block font-bold">{displayPaymentType()}</span></p>
            </div>
          </div>

          <div>
            <img className="w-[492px] mr-40" src={images.Illustration} alt="IlustarcaoFinalDePedido" />
          </div>
        </div>
      </div>
    );
}