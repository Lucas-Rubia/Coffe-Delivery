import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";
import { images } from "../../utils/imagens";

export function HeroSection() {
  return (
    <div className="flex px-40 py-24 gap-14 bg-background">
      <div>
        <div className="mb-4">
          <h1 className="font-Roboto font-bold text-[40px] w-3/4">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-base_subtitle text-[20px] ">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className=" grid grid-cols-2 text-base_subtitle text-[16px] [&_div_div]:items-center [&_div]:flex [&_div]:gap-3 [&_div]:mb-2 ">
          <div>
            <div className="bg-yellow_dark p-2 rounded-full">
              <ShoppingCart className="size-4 text-white" />
            </div>
            <p>Compra simples e segura</p>  
          </div>
          <div>
            <div className="bg-base_text p-2 rounded-full">
              <Package className="size-4 text-white" />
            </div>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <div className="bg-yellow p-2 rounded-full">
              <Timer className="size-4 text-white" />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <div className="bg-purple p-2 rounded-full">
              <Coffee className="size-4 text-white" />
            </div>
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </div>

      <div>
        <img className="h-full w-full" src={images.CoffeCup} alt="CoffeCup" />
      </div>
    </div>
  );
}
