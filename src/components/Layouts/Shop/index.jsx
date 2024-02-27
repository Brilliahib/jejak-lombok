import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardShop from "../../Fragments/CardShop";
import { jsPDF } from "jspdf";
import CardMerchandise from "../../Fragments/CardMerchandise";

const ShopLayout = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleAction = () => {
    if (selectedItems.length > 0) {
      const pdfData = generatePDFData();
      openPDF(pdfData);
    }
  };

  const generatePDFData = () => {
    const doc = new jsPDF();

    doc.setFont("courier");
    doc.setFontSize(12);
    doc.text(
      "Pembayaran Jejak Lombok Merchandise",
      105,
      10,
      null,
      null,
      "center"
    );

    doc.setFontSize(20);
    doc.text("Total Pembayaran", 105, 30, null, null, "center");

    doc.setFontSize(14);
    doc.text(
      `Total Harga: Rp ${calculateTotalPrice().toLocaleString()}`,
      105,
      50,
      null,
      null,
      "center"
    );

    // Panduan pembayaran
    doc.setFontSize(14);
    doc.text("Panduan Pembayaran:", 20, 70);
    doc.setFontSize(12);
    doc.text("1. Bayar di Indomaret", 20, 80);
    doc.text("2. Transfer Bank BRI:", 20, 90);
    doc.text("   - No. Rekening: XXX-XXXX-XXXX", 30, 100);
    doc.text("   - Nama Penerima: Jejak Lombok Merchandise", 30, 110);
    doc.text("3. Transfer ke bank lainnya:", 20, 120);
    doc.text("   - Gunakan transfer antar bank atau ATM", 30, 130);
    doc.text("   - Input data penerima sesuai bank tujuan", 30, 140);
    doc.text("4. Pembayaran di outlet resmi:", 20, 150);
    doc.text("   - Kunjungi outlet resmi Jejak Lombok Merchandise", 30, 160);

    return doc.output();
  };

  const openPDF = (pdfData) => {
    const blob = new Blob([pdfData], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

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
          Makanan Khas
        </h1>
        <div className="card-content">
          <CardShop addToCart={addToCart} />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-black leading-normal mb-8 tracking-wide text-center">
          Merchandise
        </h1>
        <div className="card-content">
          <CardMerchandise addToCart={addToCart} />
        </div>
      </div>
      <div className="fixed bottom-8 right-8">
        <button
          className="bg-sky-700 text-white rounded-full p-4 flex items-center justify-center border border-transparent transition duration-300 hover:bg-white hover:border-sky-700 hover:text-sky-700"
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
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center px-6 sm:px-0"
          >
            <motion.div
              initial={{ scale: 0.5, y: "100%" }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: "100%" }}
              transition={{ duration: 0.3 }}
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
                    <p>Rp {selectedItem.price.toLocaleString()}</p>
                    <div className="flex items-center mt-2">
                      <button
                        className="bg-sky-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2"
                        onClick={() => decreaseQuantity(selectedItem.id)}
                      >
                        -
                      </button>
                      <button
                        className="bg-sky-700 text-white rounded-full w-6 h-6 flex items-center justify-center"
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
                  Total Harga: Rp {calculateTotalPrice().toLocaleString()}
                </p>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  onClick={handleAction}
                  className={`bg-${
                    selectedItems.length > 0 ? "sky" : "green"
                  }-700 text-white px-4 py-2 rounded-md`}
                >
                  {selectedItems.length > 0
                    ? "Bayar Sekarang (PDF)"
                    : "Bayar Sekarang"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShopLayout;
