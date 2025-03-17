import React from "react";
import { motion, AnimatePresence } from "framer-motion"

const SuccessMessage = ({ message }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed mt-10 top-4 right-4 bg-green-500 text-white px-6 py-3
            rounded-lg shadow-lg flex items-center space-x-2 "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    <span>{message}</span>
            </motion.div>
        </AnimatePresence>
    );
};

export default SuccessMessage;