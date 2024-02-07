import Card from "../../Fragments/Card";

const DestinationLayout = () => {
  const cardsData = [
    {
      imageUrl:
        "https://1.bp.blogspot.com/-FqVl7Vo_MB8/XUci97z17GI/AAAAAAAACS0/ia8p-W-weZUGNEKkQ7n8J_ekUVAQ2nfCQCLcBGAs/s1600/harga-tiket-masuk-wisata-candi-gedong-songo-terbaru-2019.jpg",
      title: "Candi Gedong Songo",
      description:
        "Tempat wisata di Semarang yang lagi hits dan harganya ini menjadi wisata alam sekaligus wisata sejarah. Sebab, Candi Gedong Songo terletak di kaki Gunung Ungaran dengan ketinggian 1200 mdpl. Dengan ketinggian tersebut, para wisatawan bisa menikmati udara sejuk sekaligus panorama alam yang menawan. ",
      destination: "/get-to-know/candi-gedong-songo",
    },
    {
      imageUrl:
        "https://image.popbela.com/content-images/post/20221231/a2093aad5ef62c094359423bbc9997c5.png?width=1600&format=webp&w=1600",
      title: "Kota Lama",
      description:
        "Tempat wisata di Semarang yang lagi hits dan harganya pertama adalah Kota Lama Semarang. Destinasi pertama ini merupakan kawasan cagar budaya tempat gedung-gedung tua peninggalan Hindia Belanda ratusan tahun yang lalu. Arsitektur gedung di kawasan Kota Lama bergaya khas Eropa yang cocok sebagai tempat foto yang instagramable. ",
      destination: "/get-to-know/kota-lama",
    },
    {
      imageUrl:
        "https://wisatasekolah.com/wp-content/uploads/2019/03/wisata-edukasi-semarang.jpg",
      title: "Sampokong",
      description:
        "Kalau kamu ingin berwisata sejarah di Semarang, maka Kelenteng Sam Poo Kong adalah tujuan yang tepat. Sebagai tempat ibadah untuk para penganut kepercayaan tradisional Tionghoa, Sam Poo Kong tampak begitu menarik. Sebab, bangunan kelenteng tersebut dibuat dengan arsitektur khas Cina yang dipadukan dengan budaya Jawa.",
      destination: "/get-to-know/sampokong",
    },
    {
      imageUrl:
        "https://image.popbela.com/content-images/post/20221231/aeb4887bbe72abfa998025495ac9d7bd.png?width=1600&format=webp&w=1600",
      title: "Saloka Theme Park",
      description:
        "Cocok untuk anak-anak, Saloka Theme Park merupakan tempat rekreasi yang menyediakan aneka wahana. Mengusung konsep kearifan lokal, Saloka didirikan di atas lahan seluas 12 hektare. Total wahana di tempat ini ada 25 wahana yang terbagi menjadi 5 zona permainan.",
      destination: "/get-to-know/saloka-park",
    },
    // Tambahkan card lainnya di sini jika diperlukan
  ];
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-24">
      <h1 className="font-extrabold text-3xl sm:text-4xl text-center mb-12 sm:mb-24">
        Rekomendasi Destinasi Wisata
      </h1>
      <div className="destination-content">
        <div className="block sm:grid grid-cols-3 gap-16">
          {cardsData.map((card) => (
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              destination={card.destination}
              mt="mt-16 sm:mt-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationLayout;
