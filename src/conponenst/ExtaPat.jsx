export default function WhyChooseSportNest() {
  return (
    <section className="py-16 bg-base-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose SportNest?</h2>
        <p className="text-gray-500 mt-2">
          Fast, secure and easy sports facility booking platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
        
        <div className="card bg-base-100 shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold">⚡ Fast Booking</h3>
          <p className="text-gray-500 mt-2">
            Book your favorite sports facility in just a few clicks.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold">🔒 Secure System</h3>
          <p className="text-gray-500 mt-2">
            Fully protected user data with authentication.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold">📍 Easy Location</h3>
          <p className="text-gray-500 mt-2">
            Find nearby sports facilities easily.
          </p>
        </div>

      </div>
    </section>
  );
}