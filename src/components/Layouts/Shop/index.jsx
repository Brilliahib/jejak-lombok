import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardShop from "../../Fragments/CardShop";
import { jsPDF } from "jspdf";
import CardMerchandise from "../../Fragments/CardMerchandise";
import "jspdf-autotable";

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

    doc.setFont("times");
    doc.setFontSize(20);
    doc.text("JEJAK LOMBOK", 105, 20, null, null, "center");

    doc.setFontSize(12);
    doc.text(
      `Jalan Raya Senggigi, Lombok Barat Nusa Tenggara Barat, Indonesia`,
      105,
      30,
      null,
      null,
      "center"
    );

    doc.line(10, 40, 200, 40);

    const startX = 10;
    const startY = 40;

    // Header untuk tabel
    const tableColumns = ["Nama Item", "Jumlah", "Harga"];
    const tableData = selectedItems.map((item) => {
      return [
        item.title,
        item.quantity,
        `Rp ${(item.price * item.quantity).toLocaleString()}`,
      ];
    });

    // Menambahkan tabel dengan warna latar atas abu-abu
    doc.autoTable({
      startY: startY + 10, // Mulai tabel sedikit di bawah garis horizontal
      head: [tableColumns],
      body: tableData,
      theme: "grid", // Tema tabel dengan garis
      margin: { top: startY + 15 }, // Margin dari tabel
      headStyles: { fillColor: [211, 211, 211], textColor: [0, 0, 0] }, // Warna latar atas tabel dan teksnya
      styles: {
        font: "times", // Set font tabel menjadi courier
      },
    });

    // Hitung total harga
    const totalHarga = selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Simpan posisi akhir tabel
    const tableEndY = doc.autoTable.previous.finalY;

    // Hitung posisi X untuk total pembayaran agar berada di pojok kanan
    const totalPaymentX = doc.internal.pageSize.width - 10;

    // Tambahkan teks total pembayaran di bawah tabel
    doc.setFontSize(12);
    doc.text(
      `Total Pembayaran: Rp ${totalHarga.toLocaleString()}`,
      totalPaymentX,
      tableEndY + 10,
      { align: "right" }
    );

    const transactionDateTime = new Date().toLocaleString();
    doc.setFontSize(10);
    doc.text(`Waktu Pemesanan: ${transactionDateTime}`, startX, tableEndY + 30);

    // Tambahkan batas waktu pembayaran
    const deadlineDate = new Date();
    deadlineDate.setDate(deadlineDate.getDate() + 1); // Paling lambat bayar 1 hari setelah transaksi
    const deadlineDateString = deadlineDate.toLocaleDateString();
    doc.text(
      `Batas Waktu Pembayaran: ${deadlineDateString}`,
      startX,
      tableEndY + 40
    );

    // Tambahkan panduan pembayaran pada slide berikutnya
    doc.addPage();
    doc.setFont("times");
    doc.setFontSize(20);
    doc.text("JEJAK LOMBOK", 105, 20, null, null, "center");

    doc.setFontSize(12);
    doc.text(
      `Jalan Raya Senggigi, Lombok Barat Nusa Tenggara Barat, Indonesia`,
      105,
      30,
      null,
      null,
      "center"
    );

    doc.line(10, 40, 200, 40);

    doc.setFontSize(12);
    doc.text("Panduan Pembayaran:", startX, startY + 20);
    doc.setFontSize(10);
    doc.text("1. Bayar di Indomaret", startX, startY + 30);
    doc.text("2. Transfer Bank BRI:", startX, startY + 40);
    doc.text("   - No. Rekening: XXX-XXXX-XXXX", startX + 5, startY + 50);
    doc.text(
      "   - Nama Penerima: Jejak Lombok Merchandise",
      startX + 5,
      startY + 60
    );
    doc.text("3. Transfer ke bank lainnya:", startX, startY + 70);
    doc.text(
      "   - Gunakan transfer antar bank atau ATM",
      startX + 5,
      startY + 80
    );
    doc.text(
      "   - Input data penerima sesuai bank tujuan",
      startX + 5,
      startY + 90
    );
    doc.text("4. Pembayaran di outlet resmi:", startX, startY + 100);
    doc.text(
      "   - Kunjungi outlet resmi Jejak Lombok Merchandise",
      startX + 5,
      startY + 110
    );

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
                className="absolute top-4 right-4 bg-red-500 text-white rounded-md w-8 h-8 flex items-center justify-center"
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
                  <div className="mb-4">
                    <h2 className="text-base font-semibold mb-2">
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
                  }-700 font-medium text-white px-8 py-2 rounded-md border border-transparent transition duration-300 hover:bg-white hover:border-sky-700 hover:text-sky-700`}
                >
                  {selectedItems.length > 0
                    ? "Bayar Sekarang"
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
