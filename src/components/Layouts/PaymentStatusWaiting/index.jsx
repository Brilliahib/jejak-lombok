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
      <div className="lg:flex lg:grid lg:grid-cols-2 lg:gap-16 md:block">
        <div className="sm:bg-whte sm:shadow-xl sm:rounded-xl sm:p-12 mb-16 sm:mb-0">
          <div className="img-payment mb-4">
            <img
              src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-xl mb-3"
              height={300}
            />
          </div>
          <div className="card-payment-detail p-4 bg-[#F5F6F8] rounded-3xl mb-16">
            <p className="text-xl font-bold mb-3 uppercase">
              Paket Wisata Jejak Lombok
            </p>
            <hr className="mb-4 border-gray-400" />
            <p className="text-base font-medium text-gray-600">
              Informasi Hotel :
            </p>
            <div className="flex gap-x-4 my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 text-sky-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                />
              </svg>{" "}
              <p className="text-sm text-[#6F6F6F] leading-loose">
                Gili Sudak Lombok Resort - Gili Sudak Jl. Jalan Dahlia no.1B
                Pelembak, Ampenan, Sekotong Barat, Lombok 83231 Indonesia
              </p>
            </div>
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
            <p className="mb-4 text-xl font-bold text-slate-900">
              Cara Pembayaran
            </p>
            <ol className="list-decimal ml-4 leading-loose text-gray-600 text-justify">
              <li>Isi terlebih dahulu data Anda berupa nama dan email.</li>
              <li>
                Pilih metode pembayaran yang nantinya anda gunakan untuk
                membayar.
              </li>
              <li>
                Setelah mengisi data dan memilih metode pembayaran, klik bayar
                sekarang dan transfer sesuai metode pembayaran dan nominal yang
                sudah Anda pilih.
              </li>
              <li>
                Setelah melakukan transaksi, refresh status dan cek email Anda.
              </li>
            </ol>
          </div>
        </div>
        <div className="relative md:flex md:justify-center lg:block mb-8">
          <div className="sticky top-20">
            <div className="card-status-payment flex flex-col gap-6 h-[70vh] md:w-[38vw] justify-center items-center">
              <div className="text-center">
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
              <img
                src="https://miro.medium.com/v2/resize:fit:405/1*k0h04CRy0j8MbBbqsodGAA.png"
                alt=""
                className="w-[150px]"
              />
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
