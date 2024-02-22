// CardShop.jsx
import React from "react";
import CardShopData from "./CardShopData.json";

function truncateDescription(description) {
  if (description.split(" ").length > 15) {
    return description.split(" ").slice(0, 15).join(" ") + "...";
  } else {
    return description;
  }
}

function formatPrice(price) {
  // Format harga menjadi angka desimal dengan pemisah ribuan dan dua digit di belakang koma
  return price.toLocaleString("id-ID", { minimumFractionDigits: 2 });
}

function CardShop({ addToCart }) {
  const handleAddToCart = (item) => {
    // Panggil prop addToCart dengan item sebagai argumen
    addToCart(item);
  };

  return (
    <div className="sm:grid sm:grid-cols-4 sm:gap-6 mb-8">
      {CardShopData.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl shadow-md card-shop h-auto sm:h-[475px] mb-12"
        >
          <img src={item.imageUrl} alt="" className="rounded-t-xl" />
          <div className="bg-white p-4 rounded-xl">
            <p className="font-semibold text-base my-3">{item.title}</p>
            <p className="text-slate-900 text-sm mb-2 font-bold">
              Rp {item.price.toLocaleString()}
            </p>
            <p
              className="leading-loose mb-4 text-[#6F6F6F] text-sm"
              style={{ marginBottom: "1rem" }}
            >
              {truncateDescription(item.description)}
            </p>
            <div className="sm:absolute sm:bottom-4 sm:left-4 sm:right-4">
              {/* Menggunakan handleAddToCart saat tombol ditekan */}
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-sky-700 h-10 px-8 font-medium rounded-md text-white border border-transparent transition duration-300 hover:bg-white hover:border-sky-700 hover:text-sky-700"
              >
                Tambah Keranjang
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardShop;
