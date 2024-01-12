import React, { useState } from 'react';
import FreeStudent from '../component/FreeStudent'; // Import your FreeStudent component
import PaidStudent from '../component/PaidStudent'; // Import your PaidStudent component

const Account = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleButtonClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <h1 className="text-center">Account</h1>
            <div className="text-center">
                <button
                    className="btn btn-primary mr-2"
                    onClick={() => handleButtonClick('paid')}
                >
                    Paid
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => handleButtonClick('free')}
                >
                    Free
                </button>
            </div>

            {selectedOption === 'paid' && <PaidStudent />}
            {selectedOption === 'free' && <FreeStudent />}
        </div>
    );
}

export default Account;
