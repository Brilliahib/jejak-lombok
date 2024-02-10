import React, { useState } from "react";
import CardShop from "../../Fragments/CardShop";

const ShopLayout = () => {
  const [cartItems, setCartItems] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (item) => {
    setSelectedItem({ ...item, quantity: 1 }); // Inisialisasi jumlah item dengan 1 saat ditambahkan ke keranjang
    setCartItems(cartItems + 1);
  };

  const decreaseQuantity = () => {
    if (selectedItem.quantity > 1) {
      setSelectedItem({ ...selectedItem, quantity: selectedItem.quantity - 1 });
      setCartItems(cartItems - 1);
    }
  };

  const increaseQuantity = () => {
    setSelectedItem({ ...selectedItem, quantity: selectedItem.quantity + 1 });
    setCartItems(cartItems + 1);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 sm:mt-24 mt-12 mb-12 px-8 relative">
      <div>
        <h1 className="text-4xl font-black leading-normal mb-8 tracking-wide text-center">
          Shop
        </h1>
        <div className="card-content">
          {/* Mengirimkan fungsi addToCart sebagai prop */}
          <CardShop addToCart={addToCart} />
        </div>
      </div>
      {/* Tombol Keranjang */}
      <div className="fixed bottom-8 right-8">
        {/* Tombol Keranjang dengan event onClick */}
        <button
          className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center"
          onClick={() => setShowPopup(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        {/* Notifikasi jumlah item dalam keranjang */}
        {cartItems > 0 && (
          <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute -top-2 -right-2">
            {cartItems}
          </div>
        )}
      </div>
      {/* Pop-up Detail Barang */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedItem.title}
            </h2>
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.title}
              className="mb-4 rounded-lg"
              width={300}
            />
            <p>Jumlah: {selectedItem.quantity}</p>
            <div className="flex items-center mt-4">
              <button
                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <button
                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={() => setShowPopup(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopLayout;
