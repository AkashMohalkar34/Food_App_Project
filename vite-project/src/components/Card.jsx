/* eslint-disable react/prop-types */
import { useDispatchCart, useCart  } from './contextReducer.jsx'
import { useState , useRef, useEffect } from 'react';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
//    console.log(priceOptions);
      console.log("data are ",data)
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
  
    let handleAddCart = async () => {
        

        let food = [];
        for (const item of data) {
            if (item.id == props.foodItem._id) {
                food = item;

                break;
            }
        }
        if (food != []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem_id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", img: props.foodItem.imgSrc, id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                return
            }
            return
        }

        await dispatch({type: "ADD" ,img:props.foodItem.imgSrc , id:props.foodItem._id , name: props.foodItem.name , price:finalPrice , qty:qty , size:size })
        // console.log(data);
    }

    let finalPrice = qty * parseInt(options[size])

    useEffect(() => {
         setSize(priceRef.current.value)
    }, [])


    console.log(props.foodItem); 

    return (
        <div>
            <div className="">
            <div className="card m-3" style={{ maxHeight: "600px", minWidth: "360px"  , margin:"30px"}}>
 
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "fill" }} />
                <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className="container">
                        <select className=" h-100 bg-success m-2 rounded" onClick={(e) => {setQty(e.target.value)}}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>

                            <select className="h-100 bg-success m-2 rounded" ref ={priceRef} onClick={(e) => {setSize(e.target.value) }}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>

                        <div className="d-inline h-100 ">
                                ₹{finalPrice} /-
                            </div>
                            <hr>
                            </hr>
                            <div onClick={handleAddCart} className=" btn bg-success text-white">
                                Add to cart 
                            </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}
