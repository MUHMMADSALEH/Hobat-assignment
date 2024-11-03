import Image from "next/image"
import Logo from "@/assets/logo.png"
import Vector from "@/assets/Vector.svg"

export const Header = () => {
    return (
        <div className="shadow-slate-50 shadow-custom-shadow px-10 py-5 flex justify-between border ">
            <div ><Image src={Logo} alt="Logo" className="w-200 h-200"/></div>
            <div className="flex gap-5 ">
                <div className="flex gap-5 items-center text-[#6D6E71] font-[400] font-poppins">
                    <span>Find Suppliers</span>
                    <div className="flex justify-center items-center gap-2">
                        <span>Find Service Tags</span>
                        <Vector/>
                    </div>

                    <div className="text-[#00732F] font-[700] text-sm border-[#00732F] border p-3 rounded-md"><p >Login/Sign Up</p></div>
                </div>
            </div>
        </div>
    )
}