import { services } from '../constants';

const Overview = () => {
  return (
    <div className="py-12 text-center">
      {/* Überschrift */}
      <h2 className="text-[40px] font-bold text-gray-800 mb-6">
        Entdecke alle <span className="text-[#b59762]">Leistungen</span>.
      </h2>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <a
            href={service.link}
            key={index}
            className="relative group w-40 h-48 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover group-hover:blur-sm transition-all"
            />
            <div className="absolute bottom-0 p-4 w-full text-center bg-[#b59762] bg-opacity-90 text-white font-semibold text-[14px] transform translate-y-full group-hover:translate-y-0 transition-transform">
              {service.name}
            </div>
          </a>
        ))}
      </div>
      <hr  className='bg-gold border-gold mt-16 h-1'/>
    </div>

  );
};

export default Overview;
