const OrganizeTripSection = () => {
  return (
    <div className="bg-sky-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-24 text-white pb-80 px-8">
        <div className="block sm:flex sm:grid sm:grid-cols-2 sm:gap-12">
          <div className="">
            <h1 className="text-4xl font-black leading-tight mb-8 tracking-wide">
              We Organize Your Trip
            </h1>
            <p className="leading-loose">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              laboriosam, aut soluta pariatur excepturi, neque ducimus numquam
              incidunt iusto dignissimos officiis voluptatem a eos esse quas
              nostrum odio libero id.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1500207907633-4ccab9bf1535?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full mt-12 sm:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizeTripSection;
