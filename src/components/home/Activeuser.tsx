import { Package, ShoppingCart, Users } from "lucide-react";

export default function Activeuser() {
    return (
        <>
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-0 max-w-7xl mx-auto px-4 my-10">
                {/* Active Users */}
                <div 
                    style={{ backgroundImage: "url(/home/ticket.png)" }} 
                    className="group relative bg-cover bg-no-repeat bg-center p-4 sm:p-6 lg:p-[20px] text-center h-48 sm:h-52 lg:h-[200px]  overflow-hidden"
                >
                    {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div> */}
                    <div className=" flex items-center justify-center mx-auto mb-2 sm:mb-4 relative z-10 ">
                        <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 relative z-10"
                        style={{ color: "#fff", textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                    >
                        24.7K
                    </div>
                    <div
                        className="text-xs sm:text-sm font-bold uppercase tracking-wide mb-1 relative z-10"
                        style={{ color: "#fff", textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                    >
                        Active Users
                    </div>
                    <div className="text-xs text-white/90 font-medium relative z-10">Live Now</div>
                </div>

                {/* Daily Sales */}
                <div 
                    style={{ backgroundImage: "url(/home/ticket.png)" }} 
                    className="group relative bg-cover bg-no-repeat bg-center p-4 sm:p-6 lg:p-[20px] text-center h-48 sm:h-52 lg:h-[200px]  overflow-hidden"
                >
                    {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div> */}
                    <div className="flex items-center justify-center mx-auto mb-2 sm:mb-4  relative z-10 ">
                        <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 relative z-10"
                        style={{ color: "#fff", textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                    >
                        1,247
                    </div>
                    <div
                        className="text-xs sm:text-sm font-bold uppercase tracking-wide mb-1 relative z-10"
                        style={{ color: "#fff", textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                    >
                        Today's Sales
                    </div>
                    <div className="text-xs text-white/90 font-medium relative z-10">+23% Today</div>
                </div>

                {/* Total Orders */}
                <div 
                    style={{ backgroundImage: "url(/home/ticket.png)" }} 
                    className="group relative bg-cover bg-no-repeat bg-center p-4 sm:p-6 lg:p-[20px] text-center h-48 sm:h-52 lg:h-[200px]  overflow-hidden"
                >
                    {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div> */}
                    <div className="flex items-center justify-center mx-auto mb-2 sm:mb-4  relative z-10 ">
                        <Package className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 relative z-10"
                        style={{ color: "#fff", textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                    >
                        15K+
                    </div>
                    <div
                        className="text-xs sm:text-sm font-bold uppercase tracking-wide mb-1 relative z-10"
                        style={{ color: "#fff", textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                    >
                        Total Orders
                    </div>
                    <div className="text-xs text-white/90 font-medium relative z-10">This Month</div>
                </div>
            </div>
        </>
    );
}
