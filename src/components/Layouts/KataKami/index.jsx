import OurFoto from "../../../assets/img/our-foto.jpg";

const KataKamiSection = () => {
  return (
    <div className="bg-sky-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:py-12">
        <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-4">
          <div className="sm:mb-0 mb-16">
            <img
              src={OurFoto}
              alt=""
              width={400}
              className="rounded-xl mx-auto sm:mb-0"
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
          <div>
            <ul className="leading-loose">
              <li className="text-6xl font-black">"</li>
              <li className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae eveniet delectus quae incidunt obcaecati corrupti.
                Nobis, ullam beatae. Molestiae culpa ipsum minus eveniet at
                veritatis ratione nemo voluptatum sit saepe.
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  Muhammad Ahib Ibrilli & Akhila Zahra
                </h3>
                <p className="text-gray-400">Jejak Lombok Team</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KataKamiSection;
