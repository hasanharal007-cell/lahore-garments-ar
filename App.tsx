
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import AdminDashboard from './components/Admin/AdminDashboard';
import { storageService } from './services/storage';
import { Product } from './types';

const ProductRouteWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const p = storageService.getProductById(id);
      setProduct(p);
    }
    setLoading(false);
  }, [id]);

  if (loading) return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
    </div>
  );

  if (!product) return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white p-6 text-center">
      <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
      <p className="text-gray-500 mb-8">The product you are looking for might have been moved or deleted.</p>
      <a href="/" className="px-6 py-2 bg-black text-white rounded-full">Return Home</a>
    </div>
  );

  return <ProductPage product={product} />;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Direct Product Access (QR Entry Point) */}
        <Route path="/product/:id" element={<ProductRouteWrapper />} />
        
        {/* Admin Interface */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Home Redirect (Optional, for general discovery) */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
