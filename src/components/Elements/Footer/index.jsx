import LogoWithCircle from "../../../assets/img/logo-with-circle.png";

const Footer = () => {
  return (
    <div className="bg-sky-900 text-white sm:mt-0 mt-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:grid lg:grid-cols-3 lg:gap-4 justify-between md:block">
          <div className="sm:mb-0 mb-8 md:mb-8">
            <img className="mb-4" src={LogoWithCircle} alt="" width={50} />
            <h3 className="font-black text-xl mb-4">JEJAK LOMBOK</h3>
            <p className="text-gray-400">
              "Discover Lombok: Where Tradition Meets Technology!"
            </p>
          </div>
          <div className="sm:mb-0 mb-8 md:mb-8">
            <h1 className="mb-4 font-bold tracking-wider">Contact</h1>
            <ul className="leading-loose text-gray-400">
              <li>+62812345678</li>
              <li>jejaklombok@gmail.com</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 font-bold tracking-wider">Link</h1>
            <ul className="leading-loose text-gray-400">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/destinasi">Destination</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/chat">Chat</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hr text-center mt-12">
          <hr className="mb-6 border-gray-200" />
          <p className="text-gray-400">
            © Copyright 2024 | Made by Brilliahib & Akhila Zahra
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
