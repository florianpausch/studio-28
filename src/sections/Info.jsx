import { reasons } from "../constants";


const Info = () => {
  return (
  <section className="py-6 px-6 md:px-16">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-[40px] font-bold text-gray-800 mb-8">
      Warum <span className="text-[#b59762]">Studio 28</span>?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {reasons.map((reason, index) => (
        <div
          key={index}
          className=" shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4"
          style={{ borderColor: '#b59762' }}
        >
          <div className="text-5xl text-[#b59762]">{reason.icon}</div>
          <h3 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">
            {reason.title}
          </h3>
          <p className="text-gray-600">{reason.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
);
};

export default Info