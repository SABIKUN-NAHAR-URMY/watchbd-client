import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddProduct = () => {
    const [startDate, setStartDate] = useState(new Date());

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbbKey;

    const navigate = useNavigate();
    // const { data: products, isLoading } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/appointmentSpecialty');
    //         const data = await res.json();
    //         return (data);
    //     }
    // })

    const handelAddProduct = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(data);
                if (imgData.success) {
                    console.log(imgData.data.url);
                }
            })

        //         const product = {
        //             category_id: data.
        //             name: data.name,
        //             email: data.email,
        //             specialty: data.specialty,
        //             image: imgData.data.url
        //         }

        //         fetch('http://localhost:5000/doctors',{
        //             method: 'POST',
        //             headers: {
        //                 'content-type' : 'application/json',
        //                 authorization : `bearer ${localStorage.getItem('Token')}`
        //             },
        //             body: JSON.stringify(doctor)
        //         })
        //         .then(res => res.json())
        //         .then(result => {
        //             console.log(result);
        //             if(result.acknowledged){
        //                 toast.success(`${data.name} Doctor added successfully`);
        //                 navigate('/dashboard/manageDoctors');
        //             }
        //         })
        //     }
        // })
    }

    // if(isLoading){
    //     return <Loading></Loading>
    // }

    return (
        <div className='w-96 p-7 '>
            <h3 className="text-3xl">Add A Product</h3>

            <form onSubmit={handleSubmit(handelAddProduct)}>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Category</span></label>
                    <select {...register("value",
                        { required: "Category Id is required" })} className="input input-bordered w-full">
                        <option value="1">Women's Watches</option>
                        <option value="2">Men's Watches</option>
                        <option value="3">Kid's Watches</option>
                    </select>
                    {errors.category_id && <p className='text-red-600'>{errors.category_id?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file"
                        {...register("img",
                            { required: "Photo is required" })} className="input input-bordered w-full" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type="text"
                        {...register("productName",
                            { required: "productName is required" })} className="input input-bordered w-full" />
                    {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text"
                        {...register("location",
                            { required: "location is required" })} className="input input-bordered w-full" />
                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Resale Price</span></label>
                    <input type="text"
                        {...register("resalePrice",
                            { required: "resalePrice is required" })} className="input input-bordered w-full" />
                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Original Price</span></label>
                    <input type="text"
                        {...register("originalPrice",
                            { required: "originalPrice is required" })} className="input input-bordered w-full" />
                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">YearsUse</span></label>
                    <input type="text"
                        {...register("yearsUse",
                            { required: "yearsUse is required" })} className="input input-bordered w-full" />
                    {errors.yearsUse && <p className='text-red-600'>{errors.yearsUse?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Posted Date</span></label>
                    <DatePicker 
                    {...register("selected",
                    { required: "Date is required" })} 
                    className="input input-bordered w-full"
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} />

                    {errors.selected && <p className='text-red-600'>{errors.selected?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Seller Name</span></label>
                    <input type="text"
                        {...register("sellerName",
                            { required: "sellerName is required" })} className="input input-bordered w-full" />
                    {errors.sellerName && <p className='text-red-600'>{errors.sellerName?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Status</span></label>
                    <input type="text" defaultValue={'Unverified'}
                        {...register("defaultValue")} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Rating</span></label>
                    <select {...register("value",
                        { required: "Category Id is required" })} className="input input-bordered w-full">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    {errors.rating && <p className='text-red-600'>{errors.rating?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Mobile Number</span></label>
                    <input type="text"
                        {...register("mobileNumber",
                            { required: "mobileNumber is required" })} className="input input-bordered w-full" />
                    {errors.mobileNumber && <p className='text-red-600'>{errors.mobileNumber?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Description</span></label>
                    <input type="text"
                        {...register("description",
                            { required: "description is required" })} className="input input-bordered w-full" />
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Available</span></label>
                    <input type="text" defaultValue={'available'}
                        {...register("defaultValue")} className="input input-bordered w-full" />
                </div>


                <input className='btn w-full mt-5' value='Add Product' type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;