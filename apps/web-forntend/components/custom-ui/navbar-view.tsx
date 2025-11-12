"use client";
import { Swords, X, Menu, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { RoomForm } from "./room-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTheme } from "next-themes";
export function Navbarpage() {
  const router=useRouter()
  const [show, setShow] = useState<boolean>(false);
  const [expanded, setExpaned] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
 
  const handleLogout=async()=>{
    try{
      localStorage.removeItem("token")
     router.push('/login')
    } catch{
      toast.error('Pleas try  agian !')
    }
  }
  const {theme ,setTheme}=useTheme()
       const handleTheme=()=>{
           setTheme(theme=== "dark" ? "light" :"dark")
      }
  return (
    <div className=" relative   rounded-xl border dark:border-neutral-950 dark:bg-neutral-900 bg-white/70 shadow-sm border-neutral-50">
      <div className="w-full flex items-center justify-between px-2 py-2">
        <Link
          href="/"
          className="flex gap-2 px-3 py-2 transition duration-300 cursor-pointer items-center rounded-lg text-neutral-700 hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-300"
        >
          <Swords size="20" className="text-purple-500" />
          <h1 className="text-base font-semibold tracking-tight">PrismArt</h1>
        </Link>

        <RoomForm show={show} onShow={() => setShow(false)} />

        <div className="hidden mr-3 sm:flex  items-center gap-3">
          {token ? (
            <div className="flex items-center justify-center gap-2">
              <Button onClick={() => setShow(true)} className="flex flex-1 cursor-pointer">
                Create space
              </Button>
              <Button onClick={handleLogout} variant={'destructive'} className="flex  cursor-pointer">
                Logout
              </Button>
                <button 
                onClick={handleTheme}
               className=" flex  dark:text-white   rounded-md px-2 py-1.5 max-w-xl mx-auto   cursor-pointer">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            </div>
          ) : (
           <div className="flex gap-2  ">
            <button className=" flex flex-1 cursor-pointer  justify-center  font-semibold  text-[12px] rounded-md px-6 py-1.5 w-full  text-neutral-800 
             bg-neutral-100 border-neutral-50  shadow
             dark:text-neutral-200 dark:bg-zinc-950 dark:shadow-2xs">
            <Link  href={"/login"}>Login</Link>
           </button>
           <button 
             onClick={handleTheme}
            className=" flex  dark:text-white  rounded-md px-2 py-1.5 max-w-xl mx-auto   cursor-pointer">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            </div>
          )}
        </div>

        <div className="sm:hidden flex items-center">
          <button onClick={() => setExpaned(!expanded)} className="cursor-pointer">
            {expanded ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="sm:hidden  z-20 absolute top-14 left-0  right-0 dark:border-neutral-950 dark:bg-neutral-900 bg-white/70 border border-neutral-50  mt-1 rounded-xl shadow-2xs w-full flex flex-col items-start gap-2 px-3 py-3">
          {token ? (
            <div className="flex flex-col gap-1  w-full ">
              <Button onClick={() => setShow(true)} className="w-full">
                Create space
              </Button>
              <div className="flex  gap-1 w-full">
              <Button onClick={handleLogout} variant={'destructive'} className="flex flex-1 cursor-pointer">
                Logout
              </Button>
                 <button 
                onClick={handleTheme}
                className=" flex border dark:text-white dark:border-zinc-900 dark:bg-zinc-900 border-neutral-200 bg-neutral-200  rounded-md px-2 py-1.5 max-w-xl mx-auto   cursor-pointer">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
                 </div>
            </div>
          ) : (
            <div className="flex gap-2  w-full ">
            <button className=" flex flex-1   cursor-pointer  justify-center font-semibold  text-[12px] rounded-md px-4 py-1.5 w-full  bg-neutral-100 border-neutral-50  shadow
             dark:text-neutral-200 dark:bg-zinc-950 dark:shadow-2xs">
            <Link  href={"/login"}>Login</Link>
           </button>
           <button 
             onClick={handleTheme}
            className=" flex   dark:text-white  rounded-md px-5 py-1.5 max-w-xl mx-auto   cursor-pointer">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
