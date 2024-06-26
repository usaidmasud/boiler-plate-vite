import BoxTransition from "@/ui/components/BoxTransition";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
function Page404() {
  const navigate = useNavigate();

  return (
    <BoxTransition>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <img src="/404.svg" alt="" className="h-32" />
        <div className="mt-6 text-center">
          <h5 className="text-xl font-sans mb-4">Halaman tidak ditemukan</h5>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="bg-primary-main text-sm text-secondary-main px-4 py-2 rounded-md shadow-md inline-flex gap-1 items-center hover:bg-primary-hover duration-300"
          >
            <ChevronLeftIcon className="w-4 h-4" /> Kembali Ke Halaman Utama
          </button>
        </div>
      </div>
    </BoxTransition>
  );
}

export default Page404;
