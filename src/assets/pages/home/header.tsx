import { images } from "../../../utils/imagens";

export function Header() {
  return (
    <div className="flex justify-between items-center bg-background py-8 px-40 ">
      <div>
        <img src={images.CoffeDelivy} alt="Logo-CoffeDelivy" />
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex bg-purple_light px-2 py-[10px] rounded-lg text-purple_dark">
          <img src={images.Localization} alt="localization" />
          <p> Porto Alegre, RS</p>
        </div>

        <div>
          <button className="bg-yellow_light rounded-lg p-[10px]">
            <img src={images.Little_car} alt="little_car" />
          </button>
        </div>
      </div>
    </div>
  );
}
