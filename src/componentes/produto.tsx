import { setAddCart } from "@/redux/cartSlice";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useConter } from "../hooks/conter";
interface ProdutostoProps {
  item: {
    titulo: string;
    description: string;
    image: string;
    price: number;
    tags: string[];
    
  };
}




export function Produto({ item }: ProdutostoProps) {
  const { count, increment, decrement, setCount } = useConter();
 
  const dispatch = useDispatch();

  const handleAdProduct = () => {
    dispatch(setAddCart({
      titulo: item.titulo,
      image: item.image,
      price: item.price,
      count: count,
    }));
    setCount(0);
  }
  

  return (
    <div className="relative bg-background rounded-tr-2xl rounded-bl-2xl max-w-64 max-h-80 mb-10">
      <img
        className="absolute -top-5 mx-auto left-0 right-0"
        src={item.image}
        alt={item.titulo}
      />

      <div>
        <div className="flex justify-center gap-2 pt-28 mb-4">
          {item.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-yellow_light rounded-full py-1 px-2 uppercase font-bold text-[10px] text-yellow_dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h2 className="font-Baloo font-bold text-xl mb-2 text-center">
        {item.titulo}
      </h2>
      <p className="text-center mb-8 text-sm font-Roboto px-1 text-base_label">
        {item.description}
      </p>

      <div className="flex px-6 pb-5 items-center justify-center">
        <div className="flex gap-[23px] items-center">
          <p className="text-sm text-base_text">
            R$
            <span className="font-bold text-2xl ml-1">
              {item.price.toFixed(2)}{" "}
            </span>
          </p>
          <div className=" flex bg-base_button items-center rounded-lg p-2 gap-1">
            <button onClick={decrement}>
              <Minus className="size-3.5 text-purple" />
            </button>
            <span className="text-xl">{count}</span>
            <button onClick={increment}>
              <Plus className="size-3.5 text-purple" />
            </button>
          </div>
        </div>

        <button
          className="bg-purple_dark p-2.5 rounded-lg ml-2"
          onClick={() => {
            toast(`${item.titulo} adicionado ao carrinho`, {
              description: `${count} Produtos adicionado(s) ao carrinho`,
            }); handleAdProduct(); 
          }}
        >
          <ShoppingCart className="text-white items-cen</button>ter" />
        </button>
      </div>
    </div>
  );
}
