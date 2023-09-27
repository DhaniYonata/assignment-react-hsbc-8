import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyModal from "../components/login";

function ContactPage() {
  const navigate = useNavigate();
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  return (
    <>
      <>
        <main className="grid grid-cols-12 grid-rows-6 h-screen">
          {/* header */}
          <div className="row-span-1 col-span-6">
            <div className="flex justify-center pt-14">
              <h1 className="text-3xl font-bold font-body">POKEDEX</h1>
            </div>
          </div>
          <nav className="row-span-1 col-span-6">
            <ul className="flex justify-center pt-14 gap-7">
              <li>
                <a onClick={() => navigate("/")} href="">
                  Beranda
                </a>
              </li>
              <li>
                <a href="">Info</a>
              </li>
              <li>
                <button
                  className=" bg-slate-400 px-4 rounded-full text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
                  onClick={() => setShowMyModal(true)}
                  href=""
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>
          <MyModal onClose={handleOnClose} visible={showMyModal} />
          <section className="row-span-4 col-span-12">
            <div className="flex justify-center pt-16 pb-5">
              <p className=" text-3xl font-black">Apa itu Pokemon?</p>
            </div>
            <div className=" bg-gray-200 p-12 text-justify">
              <div className="bg-white p-10">
                <h1 className=" text-3xl font-bold">
                  Makhluk Misterius Yang Dapat Kamu Tangkap Dengan Poké Ball
                </h1>
                <p className="pt-4">
                  Pokémon adalah makhluk misterius dengan banyak rahasia.
                  Beberapa Pokémon tinggal bersama manusia dan beberapa tinggal
                  di alam bebas di padang rumput, gua, atau laut, tapi banyak
                  hal tentang ekologi mereka yang masih belum diketahui. Salah
                  satu fitur utama mereka adalah bahwa mereka dapat ditangkap
                  menggunakan Poké Ball, yang memungkinkan mereka dibawa-bawa.
                </p>
              </div>
              <div className="bg-slate-100 p-10 border border-sky-500">
                <h1 className=" text-3xl font-bold">
                  Berapa banyak jenis Pokémon yang ada?
                </h1>
                <p className="pt-4">
                  Sebenarnya, berapa banyak jenis Pokemon yang ada? Jumlah
                  pastinya tidak diketahui. Sementara ini ada lebih dari 800
                  jenis Pokémon yang telah dikonfirmasi, dan Pokémon yang belum
                  pernah terlihat pasti akan ditemukan di masa depan.
                </p>
              </div>
              <div className="bg-white p-10">
                <h1 className=" text-3xl font-bold">Ada banyak tipe Pokémon</h1>
                <p className="pt-4">
                  Pokémon dikelompokkan menjadi 18 tipe berdasarkan
                  karakteristiknya. Sebagai contoh, Pikachu adalah tipe Pokémon
                  Elektronik dan Magikarp adalah tipe Air. Ada beberapa Pokémon
                  yang termasuk dalam dua tipe, seperti Jigglypuff, yang
                  merupakan tipe Normal dan Peri. Setiap tipe memiliki afinitas
                  khusus yang memiliki pengaruh besar dalam pertarungan. Jika
                  Pokémon milik lawanmu memiliki jenis afinitas yang tepat, itu
                  bisa menjadi keuntungan besar dalam pertarungan.
                </p>
              </div>
              <div className="bg-slate-100 p-10 border border-sky-500">
                <h1 className=" text-3xl font-bold">
                  Website Latihan React HSBC-8
                </h1>
                <p className="pt-4">Dibuat oleh Dhani Yonata Hariyono</p>
                <p>Data diambil dari :</p>
                <ul>
                  <li>https://pokeapi.co/</li>
                  <li>https://id.portal-pokemon.com/about/</li>
                  <ul>https://www.svgrepo.com/</ul>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </>
    </>
  );
}

export default ContactPage;
