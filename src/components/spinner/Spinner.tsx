import React from 'react';

const Spinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
            <div className="flex items-center justify-center   rounded-full animate-spin h-12 w-12">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;