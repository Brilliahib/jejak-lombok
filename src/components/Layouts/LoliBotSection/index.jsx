import Loli from "../../../assets/img/LOLI.png";
import Button from "../../Elements/Button";

const LoliBotSection = () => {
  return (
    <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-x-12 sm:pt-36 pt-24">
      <div className="img-loli">
        <img src={Loli} alt="Loli" width={300} />
      </div>
      <div className="text-loli">
        <h1 className="text-4xl font-black leading-normal mb-8 tracking-wide">
          Confused about where to go on holiday? Just ask Loli Bot!
        </h1>
        <p className="leading-loose mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          laboriosam, aut soluta pariatur excepturi, neque ducimus numquam
          incidunt iusto dignissimos officiis voluptatem a eos esse quas nostrum
          odio libero id.
        </p>
        <Button>Chat Loli Bot</Button>
      </div>
    </div>
  );
};

export default LoliBotSection;
