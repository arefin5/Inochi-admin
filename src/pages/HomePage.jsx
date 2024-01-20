import React, { useState } from 'react';
import FreeStudent from '../component/FreeStudent'; // Import your FreeStudent component
import PaidStudent from '../component/PaidStudent'; // Import your PaidStudent component
import BranchA from '../component/BranchA';
import BranchB from '../component/BranchB';

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
                    Branch A
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => handleButtonClick('free')}
                >
                                        Branch B
                </button>
            </div>

            {selectedOption === 'paid' && <BranchA />}
            {selectedOption === 'free' && <BranchB />}
        </div>
    );
}

export default Account;
