    import Image from "next/image"
    import Logo from "@/assets/logo.png"
    import Vector from "@/assets/Vector.svg"

    export const Header = () => {
        return (
            <div className="shadow-slate-50 shadow-custom-shadow py-4 px-8">
 
  
      <div className="flex justify-between items-center">
        <div>
          <Image src={Logo} alt="Logo" className="w-200 h-200" />
        </div>
        <div className="flex gap-5">
          <div className="flex gap-5 items-center text-[#485682] font-[400] font-poppins">
            <span className="hidden sm:inline">Find Suppliers</span>
            <div className="flex justify-center items-center gap-2">
              <span className="hidden sm:inline">Find Service Tags</span>
              <Vector className="hidden sm:inline" />
            </div>
            <button className="text-[#00732F] font-[700] text-sm border-[#00732F] border px-3 py-3 rounded-lg inline justify-center items-center">
              <p>Login/Signup</p>
            </button>
          </div>
        </div>
      </div>
    </div>
 


        
        )
    }