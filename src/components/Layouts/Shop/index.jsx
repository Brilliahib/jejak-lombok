import React, { useState } from "react";
import CardShop from "../../Fragments/CardShop";

const ShopLayout = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (item) => {
    const existingItemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[existingItemIndex].quantity++;
      setSelectedItems(updatedSelectedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (itemId) => {
    const updatedSelectedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === itemId && selectedItem.quantity > 1) {
        return { ...selectedItem, quantity: selectedItem.quantity - 1 };
      }
      return selectedItem;
    });
    setSelectedItems(updatedSelectedItems);
  };

  const increaseQuantity = (itemId) => {
    const updatedSelectedItems = selectedItems.map((selectedItem) => {
      if (selectedItem.id === itemId) {
        return { ...selectedItem, quantity: selectedItem.quantity + 1 };
      }
      return selectedItem;
    });
    setSelectedItems(updatedSelectedItems);
  };

  const calculateTotalItems = () => {
    return selectedItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 sm:mt-24 mt-12 mb-12 px-8 relative">
      <div>
        <h1 className="text-4xl font-black leading-normal mb-8 tracking-wide text-center">
          Shop
        </h1>
        <div className="card-content">
          <CardShop addToCart={addToCart} />
        </div>
      </div>
      <div className="fixed bottom-8 right-8">
        <button
          className="bg-sky-700 text-white rounded-full w-12 h-12 flex items-center justify-center"
          onClick={() => setShowPopup(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        {calculateTotalItems() > 0 && (
          <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute -top-2 -right-2">
            {calculateTotalItems()}
          </div>
        )}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center px-6 sm:px-0">
          <div
            className="bg-white p-8 rounded-lg relative"
            style={{ width: 800, maxHeight: "80vh", overflowY: "auto" }}
          >
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setShowPopup(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {selectedItems.map((selectedItem) => (
              <div key={selectedItem.id} className="flex items-start mb-4">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="rounded-lg mr-4"
                  width={100}
                />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {selectedItem.title}
                  </h2>
                  <p>Jumlah: {selectedItem.quantity}</p>
                  <p>Rp {selectedItem.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"
                      onClick={() => decreaseQuantity(selectedItem.id)}
                    >
                      -
                    </button>
                    <button
                      className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                      onClick={() => increaseQuantity(selectedItem.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <p className="text-lg font-semibold">
                Total Harga: Rp {calculateTotalPrice()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopLayout;
