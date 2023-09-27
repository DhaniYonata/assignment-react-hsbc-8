import { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";
import MyModal from "../components/login";
import Pokeinfo from "../components/pokeInfo.jsx";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [showMyModal, setShowMyModal] = useState(false);
  const [showMyPokedex, setShowMyPokedex] = useState(false);
  const [pokeDex, setPokeDex] = useState();

  const navigate = useNavigate();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    console.log(res.data.next);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        // state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  const handleOnClosePokedex = () => setShowMyPokedex(false);

  const handleOnClose = () => setShowMyModal(false);

  return (
    <>
      <main className="grid grid-cols-12 grid-rows-6 h-screen">
        {/* header */}
        <div className="row-span-1 col-span-6">
          <div className="flex justify-center pt-14">
            <h1
              className="text-3xl font-bold font-body
        "
            >
              POKEDEX
            </h1>
          </div>
        </div>

        <nav className="row-span-1 col-span-6">
          <ul className="flex justify-center pt-14 gap-7">
            <li>
              <button href="">Beranda</button>
            </li>
            <li>
              <button onClick={() => navigate("/info")}>Info</button>
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
        {/* content */}
        <section className="row-span-4 col-span-12">
          <div className="p-9 gap-5 flex-wrap flex justify-center">
            <button onClick={() => setShowMyPokedex(true)}>
              <Card
                pokemon={pokeData}
                loading={loading}
                infoPokemon={(poke) => setPokeDex(poke)}
              />
            </button>
          </div>
          <div className="flex justify-between pt-11">
            <div className="p-9">
              <ul className="flex gap-4">
                <li>
                  <button
                    className="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
                    href="https://github.com/DhaniYonata/"
                  >
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>github [#142]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="Page-1" stroke="none" fill="none">
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-140.000000, -7559.000000)"
                          fill="#000000"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                              id="github-[#142]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    className="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
                    href="https://twitter.com/Dy_hariyono"
                  >
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 -2 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>twitter [#154]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="Page-1" stroke="none" fill="none">
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-60.000000, -7521.000000)"
                          fill="#000000"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                              id="twitter-[#154]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="p-9">
              <ul className="flex gap-4">
                <li>
                  {prevUrl && (
                    <button
                      className=" bg-slate-400 p-2 rounded-full text-white transition duration-150 ease-out hover:-translate-y-1 hover:scale-110 w-20"
                      onClick={() => {
                        setPokeData([]);
                        setUrl(prevUrl);
                      }}
                    >
                      Previous
                    </button>
                  )}
                </li>
                <li>
                  {nextUrl && (
                    <button
                      className=" bg-slate-400 p-2 rounded-full text-white transition duration-150 ease-out hover:-translate-y-1 hover:scale-110 w-20"
                      onClick={() => {
                        setPokeData([]);
                        setUrl(nextUrl);
                      }}
                    >
                      Next
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Pokeinfo
          onClose={handleOnClosePokedex}
          visible={showMyPokedex}
          data={pokeDex}
        />
        <MyModal onClose={handleOnClose} visible={showMyModal} />
      </main>
    </>
  );
}

export default HomePage;
