import React from "react";

function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

                <div className="">
                    <img
                        src="/osteomyo-logo.png"
                        alt="osteomyo"
                        className="
                          w-40 md:w-45 lg:w-56
                          h-auto
                          object-contain
                          select-none
                          drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]
                        "
                    />
                </div>

            </div>
        </header>
    );
}

export default Header;
