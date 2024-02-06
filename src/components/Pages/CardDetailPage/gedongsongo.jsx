import GedongSongoLayout from "../../Layouts/CardDetail/GedongSongo";

const GedongSongoPage = () => {
  return (
    <GedongSongoLayout>
      <div className="sm:flex mt-12 sm:grid sm:gap-4 sm:grid-cols-2">
        <div className="">
          <hr className="border-1 border-stone-600 mb-6" width="50%" />
          <h5 className="font-bold text-xl">
            Mengapa Candi Gedong Songo menjadi wisata?
          </h5>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="leading-loose">
            Tempat wisata di Semarang yang lagi hits dan harganya ini menjadi
            wisata alam sekaligus wisata sejarah. Sebab, Candi Gedong Songo
            terletak di kaki Gunung Ungaran dengan ketinggian 1200 mdpl.
          </p>
          <img
            className="mt-28 sm:mt-12"
            src="https://bobobox.com/blog/wp-content//uploads/2023/07/Informasi-Wisata-Candi-Gedong-Songo.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="sm:flex sm:mt-36 mt-12 sm:grid sm:gap-4 sm:grid-cols-2">
        <div className="">
          <hr className="border-1 border-stone-600 mb-6" width="50%" />
          <h5 className="font-bold text-xl">Ada apa saja disana?</h5>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="leading-loose">
            Dengan ketinggian tersebut, para wisatawan bisa menikmati udara
            sejuk sekaligus panorama alam yang menawan. Tak hanya itu saja, di
            wisata Candi Gedong Songo kamu bisa menyewa kuda atau sekadar
            menelusuri arsitektur candi peninggalan Hindu ini.
          </p>
        </div>
      </div>
    </GedongSongoLayout>
  );
};

export default GedongSongoPage;
