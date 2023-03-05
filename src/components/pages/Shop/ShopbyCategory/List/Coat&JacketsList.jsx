import { useState } from "react"
import CoatsJacketsData from "../../../../data/CoatsJacketsData"
import dogmen from '../../../../imgs/card-bestseller/dogmen.png'
import dogwomen from '../../../../imgs/card-bestseller/dogwomen.png'



const Category = () => {
  const [data, setData] = useState(CoatsJacketsData);

  const filterResult = (catItem) => {
    const result = CoatsJacketsData.filter((fdata) => {
      return fdata.category === catItem;
    });
    setData(result);
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="buttonss">
          <button onClick={() => { filterResult('man') }}> <div ><img className="dogmen" src={dogmen} alt="" /></div> </button>
          <button onClick={() => { filterResult('woman') }}> <div ><img className="dogwomen" src={dogwomen} alt="" /></div></button>
        </div>
        <div className="row">
          {data.map((values) => {
            const { title, price, img, id } = values;
            return (
              <div key={id} className="cardcoat" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{price}$</p>

                  <button>add card</button>
                </div>

              </div>

            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Category