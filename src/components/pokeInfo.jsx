const Pokeinfo = ({ onClose, visible, data }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72">
        <div className="flex justify-end">
          <button
            className=" font-extrabold pr-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={onClose}
          >
            X
          </button>
        </div>
        {!data ? (
          ""
        ) : (
          <>
            <div>
              <h1>{data.name}</h1>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt=""
              />
              <div className="abilities">
                {data.abilities.map((poke) => {
                  return (
                    <>
                      <div className="group">
                        <h2>{poke.ability.name}</h2>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="base-stat">
                {data.stats.map((poke) => {
                  return (
                    <>
                      <h3>
                        {poke.stat.name}:{poke.base_stat}
                      </h3>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pokeinfo;
