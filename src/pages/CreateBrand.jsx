import React, { useState } from 'react';
import CreateBrandTop from '../component/CreateBrandTop';


const CreateBrand = () => {

    return (
        <div>
            <h1 className="text-center">Create Brand</h1>
            <div className="text-center">
                <CreateBrandTop />
            </div>
        </div>
    );
}

export default CreateBrand;
