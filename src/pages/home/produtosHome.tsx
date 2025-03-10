import { PRODUTODOS } from "../../assets/data/DescriptionProdutos";
import { Produto } from "../../componentes/produto";

const Products = PRODUTODOS;

export function ProdutoHome() {
  return (
    <div className="px-40 py-32">
      <h1 className="mb-[54px] text-base_title text-[32px]  font-bold font-Roboto">
        Nossos Cafés
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {Products.map((item, index) => (
          <Produto item={item} key={index}/>
        ))}
      </div>
    </div>
  );
}
