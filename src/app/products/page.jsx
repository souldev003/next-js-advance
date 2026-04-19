import React from "react";
import Image from "next/image";
import { FiShoppingCart, FiEye, FiStar, FiPackage } from "react-icons/fi";
import Link from "next/link";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <FiPackage size={20} />
              <span className="font-bold tracking-widest uppercase text-sm">
                Premium Selection
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black italic">
              Our <span className="text-primary">Products</span>
            </h1>
          </div>
          <div className="bg-base-200 px-6 py-3 rounded-2xl border border-base-content/5">
            <p className="text-base-content/60 font-medium">
              Showing{" "}
              <span className="text-base-content font-bold">
                {products.length}
              </span>{" "}
              amazing items
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group card bg-base-100 border border-base-content/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem] overflow-hidden"
            >
              <figure className="relative h-64 overflow-hidden bg-base-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-primary font-bold px-4 py-3 rounded-full shadow-lg">
                    {product.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="btn btn-circle btn-white shadow-xl">
                    <FiEye size={20} />
                  </button>
                </div>
              </figure>

              <div className="card-body p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="card-title text-xl font-bold truncate max-w-[70%]">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-1 text-warning">
                    <FiStar fill="currentColor" size={14} />
                    <span className="text-xs font-bold text-base-content/70">
                      4.9
                    </span>
                  </div>
                </div>

                <p className="text-sm text-base-content/60 line-clamp-2 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-tighter block">
                      Price
                    </span>
                    <span className="text-2xl font-black text-base-content">
                      ${product.price}
                    </span>
                  </div>

                  <button className="btn btn-primary btn-circle shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    <FiShoppingCart size={20} />
                  </button>
                </div>
              </div>

              <div className="px-6 pb-4">
                <div className="w-full bg-base-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`${product.stock < 10 ? "bg-error" : "bg-success"} h-full transition-all duration-1000`}
                    style={{ width: `${(product.stock / 50) * 100}%` }}
                  ></div>
                </div>
                <p className="text-[10px] mt-2 font-bold text-base-content/40 uppercase tracking-widest">
                  Stock: {product.stock} units left
                </p>
              </div>

              <div className="p-6 pt-0">
                <Link href={`/products/${product.id}`} className="block w-full">
                  <button className="btn btn-primary w-full rounded-[1.8rem] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
