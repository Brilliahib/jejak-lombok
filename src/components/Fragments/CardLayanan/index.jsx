const CardLayanan = () => {
  return (
    <div className="lg:flex lg:grid lg:grid-cols-4 lg:gap-x-8 md:grid md:flex md:grid-cols-2 md:gap-12 mt-8">
      <div
        className="card-layanan bg-white rounded-xl shadow-md p-8 text-center mb-8 sm:mb-0"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <div className="content-card">
          <div className="flex justify-center mb-4">
            <div className="bg-sky-700 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">
              Rekomendasi Destinasi
            </h1>
            <p className="text-[#6F6F6F] leading-relaxed">
              Menawarkan informasi destinasi wisata terbaik di Lombok, dengan
              ulasan, foto, dan info praktis.
            </p>
          </div>
        </div>
      </div>
      <div
        className="card-layanan bg-white rounded-xl shadow-md p-8 text-center mb-8 sm:mb-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="content-card">
          <div className="flex justify-center mb-4">
            <div className="bg-sky-700 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">Toko Online</h1>
            <p className="text-[#6F6F6F] leading-relaxed">
              Memungkinkan pembelian produk khas Lombok secara online, seperti
              kerajinan tangan dan makanan khas.
            </p>
          </div>
        </div>
      </div>
      <div
        className="card-layanan bg-white rounded-xl shadow-md p-8 text-center mb-8 sm:mb-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="content-card">
          <div className="flex justify-center mb-4">
            <div className="bg-sky-700 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">Paket Wisata</h1>
            <p className="text-[#6F6F6F] leading-relaxed">
              Penyedia paket lengkap untuk menjelajahi Lombok, termasuk wisata
              yang akan dikunjungi dan penginapan hotel.
            </p>
          </div>
        </div>
      </div>
      <div
        className="card-layanan bg-white rounded-xl shadow-md p-8 text-center mb-8 sm:mb-0"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <div className="content-card">
          <div className="flex justify-center mb-4">
            <div className="bg-sky-700 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">Chat Bot</h1>
            <p className="text-[#6F6F6F] leading-relaxed">
              Fitur chat bot memberikan informasi instan tentang destinasi,
              produk, dan paket wisata.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayanan;
