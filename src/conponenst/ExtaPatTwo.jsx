export default function PopularSports() {
  return (
    <section className="py-16 bg-black">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Popular Sports</h2>
        <p className="text-gray-500 mt-2">
          Choose your favorite game and start booking
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6 text-center">

        <div className="p-4 border rounded-lg hover:shadow-lg">
          ⚽ <p>Football</p>
        </div>

        <div className="p-4 border rounded-lg hover:shadow-lg">
          🏸 <p>Badminton</p>
        </div>

        <div className="p-4 border rounded-lg hover:shadow-lg">
          🎾 <p>Tennis</p>
        </div>

        <div className="p-4 border rounded-lg hover:shadow-lg">
          🏏 <p>Cricket</p>
        </div>

        <div className="p-4 border rounded-lg hover:shadow-lg">
          🏊 <p>Swimming</p>
        </div>

        <div className="p-4 border rounded-lg hover:shadow-lg">
          🏃 <p>Running</p>
        </div>

      </div>
    </section>
  );
}