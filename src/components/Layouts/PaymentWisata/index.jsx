import React, { useState, useEffect, useRef } from "react";
import PaketWisataData from "../../Fragments/CardPaketWisata/PaketWisataData.json";

const PaymentPaketWisata = () => {
  const [nama, setNama] = useState("");
  const [selectedPaket, setSelectedPaket] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [totalNominal, setTotalNominal] = useState(0);
  const [selectedPaketPrice, setSelectedPaketPrice] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setPaymentButtonsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    const paket = PaketWisataData.find((item) => item.title === selectedPaket);
    if (paket) {
      setSelectedPaketPrice(paket.price);
    } else {
      setSelectedPaketPrice(900000);
    }
  }, [selectedPaket]);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleBayarSekarang = (e) => {
    e.preventDefault();
    if (nama !== "") {
      setTotalNominal(selectedPaketPrice);
      window.location.href = `/shop/paket-wisata/payment/status?nama=${nama}&nominal=${selectedPaketPrice}&metodePembayaran=${selectedPayment}`;
    } else {
      alert("Mohon isi nama Anda terlebih dahulu.");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 sm:mt-24 mt-12 mb-12 px-8">
      <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-16">
        <div className="sm:bg-whte sm:shadow-xl sm:rounded-xl sm:p-12 mb-16 sm:mb-0">
          <div className="img-payment mb-4">
            {/* Gambar paket wisata */}
            <img
              src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-xl mb-3"
              height={300}
            />
            {/* Nama paket wisata */}
            <p className="text-base font-semibold">Jejak Lombok</p>
          </div>
          <div className="card-payment-detail p-4 bg-[#F5F6F8] rounded-3xl mb-16">
            {/* Informasi detail paket wisata */}
            <p className="text-base font-semibold">Paket Wisata Jejak Lombok</p>
            <p className="text-base font-semibold text-[#6F6F6F]">500+ orang</p>
            <div className="bg-sky-700 rounded-3xl p-6 text-white mt-4 mb-[-60px]">
              {/* Harga paket wisata */}
              <p className="text-xl font-semibold mb-12">
                Rp. {selectedPaketPrice.toLocaleString()}
              </p>
              {/* Deskripsi tambahan */}
              <p className="text-sm text-gray-300">
                *Mohon untuk mengisi formulir terlebih dahulu dan baca deskripsi
                mengenai paket wisata yang Anda pilih.
              </p>
            </div>
          </div>
          <div className="desc-payment">
            {/* Deskripsi paket wisata */}
            <p className="mb-4 text-justify text-[#6F6F6F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              dignissimos saepe consequuntur quod ratione, quae vero a natus
              eius! Illum soluta debitis excepturi aliquid quam nostrum itaque
              blanditiis beatae totam quae ad obcaecati, ab est magni
              exercitationem dolor magnam iusto inventore accusantium, quisquam
              unde pariatur libero non dolore. Dolores, sit corrupti. Beatae
              nam, odit ducimus id totam error commodi tempore.
            </p>
            {/* Peta lokasi paket wisata */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504977.3342435287!2d115.94334025597072!3d-8.582975598642495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb7d23e8cc745%3A0x446689c4ab50d8c9!2sLombok!5e0!3m2!1sen!2sid!4v1708187529331!5m2!1sen!2sid"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className=" z-100 rounded-lg"
            ></iframe>
          </div>
        </div>
        {/* Form pembayaran */}
        <div className="relative">
          <div className="sticky top-20">
            <form action="" onSubmit={handleBayarSekarang}>
              {/* Input nama dan nomor telepon */}
              <div className="flex w-[100%] flex-col md:flex-row items-end gap-6 mb-8">
                <div className="w-full">
                  <label for="nama" className="font-medium">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-sky-700 tracking-wide leading-loose"
                    placeholder="Masukkan nama lengkap Anda"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label for="telepon" className="font-medium">
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    id="telepon"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-sky-700 tracking-wide leading-loose"
                    placeholder="Masukkan nomor telepon Anda"
                  />
                </div>
              </div>
              {/* Pilihan metode pembayaran */}
              <div className="w-full mb-8">
                <div className="font-medium mb-4">Metode Pembayaran</div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <button
                    type="button"
                    onClick={() => handlePaymentSelection("OVO")}
                    className={`h-[62px] md:h-[50px] text-gray-900 bg-white hover:bg-sky-700 focus:bg-sky-700 focus:text-white hover:text-white border border-gray-200 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center inline-flex items-center md:mr-2 mb-2 ${
                      selectedPayment === "OVO" ? "bg-sky-700 text-white" : ""
                    }`}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png"
                      alt=""
                      width={36}
                      className="mr-4"
                    />
                    OVO
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePaymentSelection("GoPay")}
                    className={`h-[62px] md:h-[50px] text-gray-900 bg-white hover:bg-sky-700 focus:bg-sky-700 focus:text-white hover:text-white border border-gray-200 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center inline-flex items-center md:mr-2 mb-2 ${
                      selectedPayment === "GoPay" ? "bg-sky-700 text-white" : ""
                    }`}
                  >
                    <img
                      src="https://www.pointstar-consulting.com/wp-content/uploads/2022/02/gopay-integration.png"
                      alt=""
                      width={36}
                      className="mr-4"
                    />
                    GoPay
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePaymentSelection("QRIS")}
                    className={`h-[62px] md:h-[50px] text-gray-900 bg-white hover:bg-sky-700 focus:bg-sky-700 focus:text-white hover:text-white border border-gray-200 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center inline-flex items-center md:mr-2 mb-2 ${
                      selectedPayment === "QRIS" ? "bg-sky-700 text-white" : ""
                    }`}
                  >
                    <img
                      src="https://seeklogo.com/images/Q/quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png"
                      alt=""
                      width={36}
                      className="mr-4"
                    />
                    QRIS
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePaymentSelection("VISA")}
                    className={`h-[62px] md:h-[50px] text-gray-900 bg-white hover:bg-sky-700 focus:bg-sky-700 focus:text-white hover:text-white border border-gray-200 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center inline-flex items-center md:mr-2 mb-2 ${
                      selectedPayment === "VISA" ? "bg-sky-700 text-white" : ""
                    }`}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                      alt=""
                      width={36}
                      className="mr-4"
                    />
                    VISA
                  </button>
                  {/* Tambahkan tombol pembayaran lainnya di sini */}
                </div>
              </div>
              {/* Tombol Bayar Sekarang */}
              <div className="w-full">
                <button
                  type="submit"
                  className="middle none center w-full h-[60px] rounded-[99px] bg-sky-700 py-3 px-6 text-base font-semibold text-white transition-all border border-transparent transition duration-300 hover:bg-white hover:border-sky-700 hover:text-sky-700"
                >
                  Bayar Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPaketWisata;
