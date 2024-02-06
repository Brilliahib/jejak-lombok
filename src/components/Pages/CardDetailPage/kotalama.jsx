import KotaLamaLayout from "../../Layouts/CardDetail/KotaLama";

const KotaLamaPage = () => {
  return (
    <KotaLamaLayout>
      <div className="sm:flex mt-12 sm:grid sm:gap-4 sm:grid-cols-2">
        <div className="">
          <hr className="border-1 border-stone-600 mb-6" width="50%" />
          <h5 className="font-bold text-xl">Wisata hits di Semarang?</h5>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="leading-loose">
            Tempat wisata di Semarang yang lagi hits dan harganya pertama adalah
            Kota Lama Semarang. Destinasi pertama ini merupakan kawasan cagar
            budaya tempat gedung-gedung tua peninggalan Hindia Belanda ratusan
            tahun yang lalu.
          </p>
          <img
            className="mt-28 sm:mt-12"
            src="https://asset.kompas.com/crops/RDmQ3DPdxcLMCacPHJhHWMDgAx4=/71x0:912x561/750x500/data/photo/2020/01/19/5e2435421b70b.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="sm:flex sm:mt-36 mt-12 sm:grid sm:gap-4 sm:grid-cols-2">
        <div className="">
          <hr className="border-1 border-stone-600 mb-6" width="50%" />
          <h5 className="font-bold text-xl">Rekomen buat foto?</h5>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="leading-loose">
            Arsitektur gedung di kawasan Kota Lama bergaya khas Eropa yang cocok
            sebagai tempat foto yang instagramable. Kamu pun bisa menyusuri
            sudut wilayah ini sembari menikmati suasana senja atau malam di
            sana.
          </p>
        </div>
      </div>
    </KotaLamaLayout>
  );
};

export default KotaLamaPage;
