export default function MyModal({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded-[10px] w-72">
        <div className="flex justify-end">
          <button
            className=" font-extrabold pr-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <h1 className="font-semibold text-center text-xl text-gray-700">
          Welcome Trainer
        </h1>
        <p className="text-center text-gray-700 mb-5">Sign in</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="username"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="********"
          />
        </div>
        <div className="text-center flex gap-3 justify-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
            Sign in
          </button>
          <button className="px-5 py-2 bg-slate-300  text-gray-700 rounded transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
