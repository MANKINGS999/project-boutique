import React, { useState, useRef } from 'react';
import { Upload, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageUpload = ({ onImageSelect, currentImage = null }) => {
    const [preview, setPreview] = useState(currentImage);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadStatus, setUploadStatus] = useState(null);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files[0]) {
            handleFile(files[0]);
        }
    };

    const handleFileInput = (e) => {
        const files = e.target.files;
        if (files && files[0]) {
            handleFile(files[0]);
        }
    };

    const handleFile = (file) => {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            setUploadStatus('error');
            setTimeout(() => setUploadStatus(null), 3000);
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setUploadStatus('error');
            setTimeout(() => setUploadStatus(null), 3000);
            return;
        }

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
            setUploadStatus('success');
            setTimeout(() => setUploadStatus(null), 2000);

            // Pass the file and preview to parent
            onImageSelect(file, reader.result);
        };
        reader.readAsDataURL(file);
    };

    const clearImage = () => {
        setPreview(null);
        setUploadStatus(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onImageSelect(null, null);
    };

    return (
        <div className="w-full">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
                id="image-upload"
            />

            {!preview ? (
                <label
                    htmlFor="image-upload"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
                        relative flex flex-col items-center justify-center
                        w-full h-64 border-2 border-dashed rounded-lg cursor-pointer
                        transition-all duration-300
                        ${isDragging
                            ? 'border-gold bg-gold/10'
                            : 'border-espresso/30 hover:border-gold hover:bg-espresso/5'
                        }
                    `}
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className={`w-12 h-12 mb-4 ${isDragging ? 'text-gold' : 'text-espresso/50'}`} />
                        <p className="mb-2 text-sm text-espresso">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, WEBP (MAX. 5MB)</p>
                    </div>

                    <AnimatePresence>
                        {uploadStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="absolute bottom-4 bg-red-100 text-red-700 px-4 py-2 rounded text-sm"
                            >
                                Invalid file. Please upload an image under 5MB.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </label>
            ) : (
                <div className="relative w-full">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-espresso/20">
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />

                        <button
                            onClick={clearImage}
                            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors group"
                        >
                            <X className="w-5 h-5 text-espresso group-hover:text-red-600" />
                        </button>

                        <AnimatePresence>
                            {uploadStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                                >
                                    <div className="bg-white p-4 rounded-full">
                                        <Check className="w-8 h-8 text-green-600" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="mt-4 w-full py-2 border border-espresso/30 text-espresso text-sm uppercase tracking-wider hover:bg-espresso/10 transition-colors"
                    >
                        Change Image
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
