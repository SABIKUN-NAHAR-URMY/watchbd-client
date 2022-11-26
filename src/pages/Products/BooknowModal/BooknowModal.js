import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BooknowModal = ({ bookNow,  setBookNow }) => {
    console.log(bookNow);
    const { user } = useContext(AuthContext);
    const { productName, resalePrice } = bookNow;

    const handelBook = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            email,
            name,
            itemName,
            price,
            phone,
            location
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Item is Booked');
                    setBookNow(null);
                }
                else{
                    // window.location.reload();
                    toast.error('Already booked this Item');
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booknow-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={()=>setBookNow(null)} htmlFor="booknow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelBook} className='grid grid-cols-1 gap-3'>
                        <input name='itemName' type="text" defaultValue={productName} disabled placeholder="Item Name" className="input input-bordered w-full" />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='price' type="text" defaultValue={resalePrice} disabled placeholder="ResalePrice" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn input-bordered w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BooknowModal;