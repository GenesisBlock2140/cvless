import { MapPin } from "lucide-react";

export default function CV() {
  return (
    <main className="max-w-[1200px] mx-auto px-2">
      <div className="w-[200px] h-[200px] bg-gray-100 rounded-full mx-auto"></div>
      <div className="w-full flex flex-col justify-center items-center my-10">
        <h1>John Doe</h1>
        <h2>Développeur web front-end freelance</h2>
        <div className="flex justify-center items-center gap-1">
          <MapPin size="18" /> Paris
        </div>
      </div>
      <section className="text-left">
        <h3 className="text-xl font-semibold">Profil</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section className="text-left my-10">
        <h3 className="text-xl font-semibold mb-5">Expériences</h3>
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-100 rounded-lg">
            <div className="flex justify-between py-2 px-5 gap-2">
              <p>2010-2012</p>
              <p>Airbnb développer at position grad blabla</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg">
            <div className="flex justify-between py-2 px-5">
              <p>2010-2012</p>
              <p>Airbnb développer</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg">
            <div className="flex justify-between py-2 px-5">
              <p>2010-2012</p>
              <p>Airbnb développer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-left my-10">
        <h3 className="text-xl font-semibold mb-5">Formations</h3>
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-100 rounded-lg">
            <div className="flex justify-between py-2 px-5 gap-2">
              <p>2010-2012</p>
              <p>Airbnb développer at position grad blabla</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg">
            <div className="flex justify-between py-2 px-5">
              <p>2010-2012</p>
              <p>Airbnb développer</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg">
            <div className="flex justify-between py-2 px-5">
              <p>2010-2012</p>
              <p>Airbnb développer</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Mes contacts</h3>
      </section>
    </main>
  );
}
