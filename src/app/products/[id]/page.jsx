import Image from "next/image";
import React from "react";

const getSingleProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`);
  if (!res.ok) return null;
  return res.json();
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return <div className="text-center py-20">Product not found!</div>;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 md:p-12">
      <div className="card lg:card-side bg-base-100 shadow-2xl max-w-5xl border border-base-content/10 overflow-hidden rounded-4xl">
        <figure className="lg:w-1/2 relative min-h-75 md:min-h-125">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </figure>

        <div className="card-body lg:w-1/2 p-8 md:p-12">
          <div className="badge badge-primary badge-outline mb-4">
            {product.category}
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {product.name}
          </h2>
          <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-auto pt-8 border-t border-base-content/5">
            <div className="text-center sm:text-left">
              <span className="text-sm font-bold text-primary block uppercase tracking-widest">
                Price
              </span>
              <span className="text-4xl font-black">${product.price}</span>
            </div>
            <button className="btn btn-primary btn-lg rounded-2xl px-12 shadow-xl shadow-primary/20 w-full sm:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
