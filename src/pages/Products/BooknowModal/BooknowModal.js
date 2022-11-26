import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BooknowModal = ({ bookNow }) => {
    const { user } = useContext(AuthContext);
    const { productName, resalePrice } = bookNow;
    return (
        <div>
            <input type="checkbox" id="booknow-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booknow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 gap-3'>
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