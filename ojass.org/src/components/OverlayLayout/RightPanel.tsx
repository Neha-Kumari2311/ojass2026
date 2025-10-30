import { useTheme } from "@/contexts/ThemeContext";
import { SocialMediaItems } from "@/lib/constants";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { RiLoginBoxFill } from "react-icons/ri";

export default function RightPanel() {
    const { theme } = useTheme();
    const isDystopia = theme === "dystopia";
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!panelRef.current) return;

        gsap.fromTo(
            panelRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 },
        );
    }, []);

    return (
        <div
            ref={panelRef}
            className={`layout-panel w-[60px] h-[50vh] fixed bottom-0 right-0 flex flex-col items-center justify-center hud-grid py-10 pt-14 pl-3 ${isDystopia ? "is-dystopia" : ""
                }`}
            style={{
                position: "fixed",
                bottom: "0",
                right: "0",
                clipPath:
                    "polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%, 20% 95%, 0% 50px)",
            }}>
            <div className="flex flex-col items-center justify-between h-full py-2">
                {/* Social Media Icons */}
                <div
                    className={`layout-text cursor-pointer hover:scale-110 transition-transform ${isDystopia ? "is-dystopia" : ""
                        } text-center`}
                    title="User Management">
                    <RiLoginBoxFill className="size-6 mx-auto" />
                    <div className="text-[10px]">LOGIN</div>
                </div>
                {SocialMediaItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`layout-text cursor-pointer hover:scale-110 transition-transform ${isDystopia ? "is-dystopia" : ""
                            }`}
                        title={item.title}>
                        <item.element className="size-6" />
                    </div>
                ))}
            </div>
        </div >
    );
}
