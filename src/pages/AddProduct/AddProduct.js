import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbbKey;

    const navigate = useNavigate();
    

    const handelAddProduct = data => {
        console.log(data);
        const image = data.picture[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url);
                if(imgData.success){
                    console.log(imgData.data.url);
    
                    const product = {
                        category_id: parseInt(data.category_id),
                        picture: imgData.data.url,
                        productName: data.productName,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        yearsUse: data.yearsUse,
                        postedDate: data.postedDate,
                        sellerName: data.sellerName,
                        status: data.status,
                        rating: data.rating,
                        mobileNumber: data.mobileNumber,
                        description: data.description,
                        sell: data.sell
                    }
    
                    fetch('http://localhost:5000/products',{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json',
                            // authorization : `bearer ${localStorage.getItem('Token')}`
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if(result.acknowledged){
                            toast.success(`Product added successfully`);
                            navigate(`/products/${data.category_id}`);
                        }
                    })
                }
            })
        }

    return (
        <div className='w-96 p-7 '>
            <h3 className="text-3xl">Add A Product</h3>

            <form onSubmit={handleSubmit(handelAddProduct)}>
                {/* category_id */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Category</span></label>
                    <select {...register("category_id",
                        { required: "Category is required" })} className="input input-bordered w-full">
                        <option category_id="1">1</option>
                        <option category_id="2">2</option>
                        <option category_id="3">3</option>
                    </select>
                    {errors.category_id && <p className='text-red-600'>{errors.category_id?.message}</p>}
                </div>
                {/* Picture */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Picture</span></label>
                    <input type="file"
                        {...register("picture",
                            { required: "Picture is required" })} className="input input-bordered w-full" />
                    {errors.picture && <p className='text-red-600'>{errors.picture?.message}</p>}
                </div>
                {/* productName */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type="text"
                        {...register("productName",
                            { required: "productName is required" })} className="input input-bordered w-full" />
                    {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                </div>
                {/* Location */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text"
                        {...register("location",
                            { required: "location is required" })} className="input input-bordered w-full" />
                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                </div>
                {/* Resale Price  */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Resale Price</span></label>
                    <input type="text"
                        {...register("resalePrice",
                            { required: "resalePrice is required" })} className="input input-bordered w-full" />
                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
                </div>
                {/* Original price  */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Original Price</span></label>
                    <input type="text"
                        {...register("originalPrice",
                            { required: "originalPrice is required" })} className="input input-bordered w-full" />
                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                </div>
                {/* yearsUse */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">YearsUse</span></label>
                    <input type="text"
                        {...register("yearsUse",
                            { required: "yearsUse is required" })} className="input input-bordered w-full" />
                    {errors.yearsUse && <p className='text-red-600'>{errors.yearsUse?.message}</p>}
                </div>
                {/* Posted date  */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Posted Date</span></label>
                    <input
                    {...register("postedDate")} 
                    className="input input-bordered w-full"
                    type="datetime-local"
                    // selected={startDate} 
                    // onChange={(date) => setStartDate(date)}
                    // postedDate={date}
                     />

                    {/* {errors.selected && <p className='text-red-600'>{errors.selected?.message}</p>} */}
                </div>
                {/* seller name  */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Seller Name</span></label>
                    <input type="text"
                    {...register("sellerName", 
                    { required: "sellerName is required" })} 
                    className="input input-bordered w-full" />
                    {errors.sellerName && <p className='text-red-600'>{errors.sellerName?.message}</p>}
                </div>
                {/* Status  */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Status</span></label>
                    <select {...register("status",
                        { required: "status is required" })} className="input input-bordered w-full">
                        <option status="Unverified">Unverified</option>
                    </select>
                </div>
                {/* Ratings  */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Rating</span></label>
                    <select {...register("rating",
                        { required: "rating is required" })} className="input input-bordered w-full">
                        <option rating="Excellent">Excellent</option>
                        <option rating="Good">Good</option>
                        <option rating="Fair">Fair</option>
                    </select>
                    {errors.rating && <p className='text-red-600'>{errors.rating?.message}</p>}
                </div>
                {/* mobileNumber */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Mobile Number</span></label>
                    <input type="text"
                        {...register("mobileNumber",
                            { required: "mobileNumber is required" })} className="input input-bordered w-full" />
                    {errors.mobileNumber && <p className='text-red-600'>{errors.mobileNumber?.message}</p>}
                </div>
                {/* Description  */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Description</span></label>
                    <input type="text"
                        {...register("description",
                            { required: "description is required" })} className="input input-bordered w-full" />
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                </div>
                {/* sell */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Available</span></label>
                    <select {...register("sell",
                        { required: "sell is required" })} className="input input-bordered w-full">
                        <option sell="available">Available</option>
                    </select>
                </div>


                <input className='btn w-full mt-5' value='Add Product' type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;