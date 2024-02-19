import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentStatusLayout = ({
  nama,
  nominalPaket,
  selectedPayment,
  paymentStatus,
  handleRefreshStatus,
}) => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 sm:mt-24 mt-12 mb-12 px-8">
      <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-16">
        <div className="sm:bg-whte sm:shadow-xl sm:rounded-xl sm:p-12 mb-16 sm:mb-0">
          <div className="img-payment mb-4">
            <img
              src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-xl mb-3"
              height={300}
            />
            <p className="text-base font-semibold">Jejak Lombok</p>
          </div>
          <div className="card-payment-detail p-4 bg-[#F5F6F8] rounded-3xl mb-16">
            <p className="text-base font-semibold">Paket Wisata Jejak Lombok</p>
            <p className="text-base font-semibold text-[#6F6F6F]">500+ orang</p>
            <div className="bg-sky-700 rounded-3xl p-6 text-white mt-4 mb-[-60px]">
              <p className="text-xl font-semibold mb-12">
                Rp. {nominalPaket.toLocaleString()}
              </p>
              <p className="text-sm text-gray-300">
                *Mohon untuk mengisi formulir terlebih dahulu dan baca deskripsi
                mengenai paket wisata yang Anda pilih.
              </p>
            </div>
          </div>
          <div className="desc-payment">
            <p className="mb-4 text-justify text-[#6F6F6F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              dignissimos saepe consequuntur quod ratione, quae vero a natus
              eius! Illum soluta debitis excepturi aliquid quam nostrum itaque
              blanditiis beatae totam quae ad obcaecati, ab est magni
              exercitationem dolor magnam iusto inventore accusantium, quisquam
              unde pariatur libero non dolore. Dolores, sit corrupti. Beatae
              nam, odit ducimus id totam error commodi tempore.
            </p>
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
        <div className="relative">
          <div className="sticky top-20">
            <div className="card-status-payment flex flex-col gap-6 h-[70vh] md:w-[38vw] justify-center items-center">
              <div className="text-center">
                <p className="text-2xl font-semibold text-slate-900 mb-4">
                  Cara Pembayaran
                </p>
                <p className="mb-4">
                  Atas nama,{" "}
                  <span className="font-semibold text-base uppercase">
                    {nama}
                  </span>
                </p>
                <p className="text-[#6F6F6F] mb-12">
                  Transfer sesuai nominal di bawah ini
                </p>
                <p className="text-3xl font-semibold mb-12">
                  Rp. {nominalPaket.toLocaleString()}
                </p>
                <p className="text-[#6F6F6F]">
                  Ke Pembayaran{" "}
                  <span className="font-bold">{selectedPayment}</span>
                </p>
              </div>
              <div className="w-[326px] h-[50px] bg-[#F5F6F8] flex flex-row gap-5 justify-center items-center text-sm rounded-2xl mb-4">
                {selectedPayment === "GoPay" && (
                  <img
                    src="https://www.pointstar-consulting.com/wp-content/uploads/2022/02/gopay-integration.png"
                    alt="GoPay"
                    width={36}
                    className="mr-4"
                  />
                )}
                {selectedPayment === "QRIS" && (
                  <img
                    src="https://seeklogo.com/images/Q/quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png"
                    alt="QRIS"
                    width={36}
                    className="mr-4"
                  />
                )}
                {selectedPayment === "VISA" && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                    alt="VISA"
                    width={36}
                    className="mr-4"
                  />
                )}
                {selectedPayment === "OVO" && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png"
                    alt="OVO"
                    width={36}
                    className="mr-4"
                  />
                )}
                <p>{selectedPayment}</p>
                <p className="text-slate-300">6####</p>
                <p>SALIN</p>
              </div>
              <p className="text-base">
                Status :{" "}
                <span
                  className={
                    paymentStatus === "BELUM DIBAYAR"
                      ? "uppercase text-red-500"
                      : "uppercase text-green-500"
                  }
                >
                  {paymentStatus}
                </span>
              </p>
              <div className="w-[332px] h-[30px] ">
                <button
                  onClick={handleRefreshStatus}
                  type="button" // Menjalankan fungsi saat tombol ditekan
                  className="middle none center w-full h-[60px] rounded-[99px] bg-sky-700 py-3 px-6 text-base font-semibold text-white transition-all border border-transparent transition duration-300 hover:bg-white hover:border-sky-700 hover:text-sky-700"
                >
                  Refresh Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentStatusPage = () => {
  const location = useLocation();
  const [nama, setNama] = useState("");
  const [nominalPaket, setNominalPaket] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("BELUM DIBAYAR"); // Tambahkan state untuk status pembayaran

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const namaFromURL = searchParams.get("nama");
    const nominalPaketFromURL = searchParams.get("nominal");
    const metodePembayaranFromURL = searchParams.get("metodePembayaran");

    setNama(namaFromURL);

    if (nominalPaketFromURL && !isNaN(Number(nominalPaketFromURL))) {
      setNominalPaket(Number(nominalPaketFromURL));
    } else {
      console.error("Nilai nominal dari URL tidak valid.");
    }

    setSelectedPayment(metodePembayaranFromURL);
  }, [location.search]);

  const handleRefreshStatus = () => {
    // Di sini Anda dapat menambahkan logika pembaruan status pembayaran,
    // seperti mengirim permintaan ke server untuk memperbarui status pembayaran.

    // Misalnya, jika berhasil diperbarui, Anda bisa mengatur status menjadi "SUDAH DIBAYAR".
    setPaymentStatus("SUDAH DIBAYAR");
  };
  return (
    <PaymentStatusLayout
      nama={nama}
      nominalPaket={nominalPaket}
      selectedPayment={selectedPayment}
      paymentStatus={paymentStatus} // Kirim status pembayaran ke komponen layout
      handleRefreshStatus={handleRefreshStatus} // Kirim fungsi penanganan pembaruan status
    />
  );
};

export default PaymentStatusPage;
