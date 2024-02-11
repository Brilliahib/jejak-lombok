import Logo from "../../../assets/img/JEJAK_LOMBOK.png";

const Footer = () => {
  return (
    <div className="bg-sky-950 text-white sm:mt-24 mt-12">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 px-8 py-12">
        <div className="sm:flex sm:grid sm:grid-cols-3 sm:gap-4">
          <div>
            <img src={Logo} alt="" width={100} />
          </div>
          <div className="mt-12 sm:mt-0">
            <h1 className="mb-4 font-bold">Link</h1>
            <ul className="leading-loose">
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
          <div className="mt-12 sm:mt-0">
            <h1 className="mb-4 font-bold">Contact</h1>
            <ul className="leading-loose">
              <li>+62812345678</li>
              <li>jejaklombok@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="hr text-center mt-12">
          <hr className="mb-6 border-gray-200" />
          <p>© Copyright 2024 | Made by Brilliahib & Akhila Zahra</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
