import { Loader } from "lucide-react";

export function Loadingroom(){
    return(
        <div className="min-h-screen flex justify-center items-center">
            <p className="text-[24px] font-bold text-neutral-400 flex items-center gap-2"> Joining to your room  <Loader className="animate-spin size-4" /> </p>
        </div>
    )
}