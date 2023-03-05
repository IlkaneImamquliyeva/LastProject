
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { useTranslation } from "react-i18next";


const Wishlist = () => {
  const { t } = useTranslation();

  const { addItem } = useCart();
  const {
    isWishlistEmpty,
    items,
    removeWishlistItem,
  } = useWishlist();

  if (isWishlistEmpty)
    return <p className="wishlistempty">{t("language.wishlist.Yourwishlistisempty")}</p>;

  return (
    <>



      <div className="listwish ">
        <div className="container ">
          <div className="row">
        {items.map((item) => (
          <div className="wishcardd col-lg-3 col-6   ">
            <img src={item.img} alt="" /> 
            <h5>{item.title}</h5>
            <p>{item.price}$</p>
            <button onClick={() => removeWishlistItem(item.id)}> {t("language.wishlist.delete")}</button>
            <button className="ms-1" onClick={() => addItem(item)}> {t("language.wishlist.card")}</button>
            </div>
            ))}
      </div>
      </div>
      </div>
    </>
  );
}

export default Wishlist