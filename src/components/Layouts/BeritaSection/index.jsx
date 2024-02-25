const BeritaLayout = () => {
  return (
    <div className="py-12 sm:py-24">
      <div>
        <div className="">
          <p
            className="text-base uppercase font-semibold text-sky-700 tracking-wider leading-loose"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            Berita Terkini
          </p>
          <h1
            className="text-4xl font-black leading-tight mb-8 tracking-wide text-slate-900"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="100 "
          >
            Kumpulan Berita Wisata Lombok
          </h1>
        </div>
        <div className="sm:flex sm:gap-10">
          <a
            href="https://travel.okezone.com/read/2024/01/22/406/2958715/10-alasan-kenapa-harus-berlibur-ke-lombok-minimal-sekali-seumur-hidup"
            className="card-berita block mb-10 sm:mb-0"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            <img
              src="https://img.okezone.com/content/2024/01/22/406/2958715/10-alasan-kenapa-harus-berlibur-ke-lombok-minimal-sekali-seumur-hidup-SgE2xKlrB0.JPG"
              alt=""
              className="rounded-xl w-[450px] sm:w-full img-berita"
            />
            <p className="text-[#6F6F6F] mt-4 mb-2">Info Wisata</p>
            <p className="text-slate-900 sm:text-xl text-base font-semibold">
              10 Alasan Kenapa Harus Berlibur ke Lombok Minimal Sekali Seumur
              Hidup
            </p>
            <p className="text-[#6F6F6F] mt-2">
              24 Januari 2024 | sumber: okezone.com
            </p>
          </a>
          <div className="w-full">
            <a
              href="https://travel.okezone.com/read/2023/11/24/408/2926745/7-resort-terbaik-di-lombok-cocok-buat-honeymoon-romantis-bikin-cinta-terus-membara"
              className="card-berita block sm:flex sm:gap-4 mb-10 sm:mb-8 w-full"
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="gambar-berita">
                <img
                  src="https://img.okezone.com/content/2023/11/24/408/2926745/7-resort-terbaik-di-lombok-cocok-buat-honeymoon-romantis-bikin-cinta-terus-membara-ZI4bZF7jcL.jpg"
                  alt=""
                  className="rounded-xl img-berita"
                  width={460}
                />
              </div>
              <div className="isi-berita">
                <p className="text-[#6F6F6F] sm:mt-0 mt-4 mb-2">Destinasi</p>
                <p className="text-slate-900 font-semibold text-base">
                  7 Resort Terbaik di Lombok Cocok buat Honeymoon, Romantis
                  Bikin Cinta Terus Membara!
                </p>
                <p className="text-[#6F6F6F] mt-2">
                  24 November 2023 | sumber: okezone.com
                </p>
              </div>
            </a>
            <a
              href="https://travel.okezone.com/read/2023/10/17/406/2903046/kenapa-pulau-pulau-di-lombok-nama-depannya-gili-simak-penjelasannya"
              className="card-berita sm:flex sm:gap-4 w-full"
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="gambar-berita">
                <img
                  src="https://img.okezone.com/content/2023/10/17/406/2903046/kenapa-pulau-pulau-di-lombok-nama-depannya-gili-simak-penjelasannya-XOoMpE5oRN.jpg"
                  alt=""
                  className="rounded-xl img-berita"
                  width={400}
                />
              </div>
              <div className="isi-berita">
                <p className="text-[#6F6F6F] mt-4 sm:mt-0 mb-2">Info Wisata</p>
                <p className="text-slate-900 font-semibold text-base">
                  Kenapa Pulau-Pulau di Lombok Nama Depannya Gili? Simak
                  Penjelasannya
                </p>
                <p className="text-[#6F6F6F] mt-2">
                  17 Oktober 2023 | sumber: okezone.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaLayout;
