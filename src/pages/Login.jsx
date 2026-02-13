// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';

// const Login = ({ onLogin }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setIsLoading(true);

//         // Validate inputs
//         if (!email || !password) {
//             setError('Please enter both email and password');
//             setIsLoading(false);
//             return;
//         }

//         // Attempt login
//         const result = onLogin(email, password);

//         if (!result.success) {
//             setError(result.error);
//             setIsLoading(false);
//         }
//         // Success is handled by parent component
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream flex items-center justify-center px-6 py-12">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="w-full max-w-md"
//             >
//                 {/* Logo */}
//                 <div className="text-center mb-8">
//                     <h1 className="font-playfair text-4xl md:text-5xl text-espresso mb-2">
//                         LUMINA.
//                     </h1>
//                     <p className="text-gray-600 text-sm uppercase tracking-wider">Admin Access</p>
//                 </div>

//                 {/* Login Card */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.2, duration: 0.5 }}
//                     className="bg-white border border-espresso/10 shadow-2xl p-8 md:p-10"
//                 >
//                     <h2 className="font-playfair text-2xl text-espresso mb-6 text-center">
//                         Sign In
//                     </h2>

//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Email Input */}
//                         <div>
//                             <label className="block text-sm uppercase tracking-wider text-espresso mb-2">
//                                 Email Address
//                             </label>
//                             <div className="relative">
//                                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                                 <input
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full pl-12 pr-4 py-3 border border-espresso/20 focus:border-gold focus:outline-none transition-colors"
//                                     placeholder="admin@lumina.com"
//                                     disabled={isLoading}
//                                 />
//                             </div>
//                         </div>

//                         {/* Password Input */}
//                         <div>
//                             <label className="block text-sm uppercase tracking-wider text-espresso mb-2">
//                                 Password
//                             </label>
//                             <div className="relative">
//                                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="w-full pl-12 pr-4 py-3 border border-espresso/20 focus:border-gold focus:outline-none transition-colors"
//                                     placeholder="Enter your password"
//                                     disabled={isLoading}
//                                 />
//                             </div>
//                         </div>

//                         {/* Error Message */}
//                         {error && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: -10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm"
//                             >
//                                 <AlertCircle size={18} />
//                                 <span>{error}</span>
//                             </motion.div>
//                         )}

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             disabled={isLoading}
//                             className={`
//                                 w-full py-4 uppercase tracking-widest text-sm font-semibold
//                                 transition-all duration-300
//                                 ${isLoading
//                                     ? 'bg-gray-400 cursor-not-allowed'
//                                     : 'bg-espresso hover:bg-gold text-white'
//                                 }
//                             `}
//                         >
//                             {isLoading ? (
//                                 <span className="flex items-center justify-center gap-2">
//                                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                                     </svg>
//                                     Signing In...
//                                 </span>
//                             ) : (
//                                 'Sign In'
//                             )}
//                         </button>
//                     </form>

//                     {/* Info Box */}
//                     <div className="mt-8 pt-6 border-t border-espresso/10">
//                         <div className="bg-espresso/5 p-4 text-sm text-gray-600">
//                             <p className="font-semibold text-espresso mb-2">Default Credentials:</p>
//                             <p className="mb-1">Email: <code className="bg-white px-2 py-1 text-xs">admin@lumina.com</code></p>
//                             <p>Password: <code className="bg-white px-2 py-1 text-xs">admin123</code></p>
//                             <p className="mt-3 text-xs text-gray-500">
//                                 ⚠️ Change these credentials in <code>src/hooks/useAuth.js</code>
//                             </p>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Footer */}
//                 <p className="text-center text-gray-500 text-sm mt-6">
//                     Protected Admin Area
//                 </p>
//             </motion.div>
//         </div>
//     );
// };

// export default Login;
