import img2 from '../imgs/Shop-imgs/categoryimgs/categoryimg2.avif'
import img3 from '../imgs/Shop-imgs/categoryimgs/categoryimg4.jpg'
import img4 from '../imgs/Shop-imgs/categoryimgs/categoryimg6.jpg'

import { v4 as uuidv4 } from 'uuid';


const moviedata = [
  
    {
        img:img2,
        title:"Sweaters",
        price:16,
        id:uuidv4()
    },
    {
        img:img3,
        title:"Pajamas",
        price:10,
        id:uuidv4()
    },
    {
        img:img4,
        title:" Sport",
        price:14,
        id:uuidv4()
    }

]

export default moviedata