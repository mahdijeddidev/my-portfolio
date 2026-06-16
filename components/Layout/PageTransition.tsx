"use client";

import { usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{
                opacity: 0,
                filter: "blur(6px)",
            }}
            animate={{
                opacity: 1,
                filter: "blur(0px)",
            }}
            exit={{
                opacity: 0,
                filter: "blur(6px)",
            }}
            transition={{
                duration: 0.3,
            }}
        >
            {children}
        </motion.div>

    );
}

// <motion.div
//     key={pathname}
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{
//         duration: 0.25,
//         ease: "easeInOut",
//     }}
//     style={{ willChange: "opacity" }}
//     className="w-full flex-1 flex flex-col"
// >
//     {children}
// </motion.div>

// "use client";

// import { NAV_ORDER } from "@/constants";
// import { usePathname } from "@/i18n/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";


// interface PageTransitionProps {
//     children: React.ReactNode;
// }

// export default function PageTransition({ children }: PageTransitionProps) {
//     const pathname = usePathname();
//     const [direction, setDirection] = useState<"left" | "right">("right");
//     const prevPathnameRef = useRef(pathname);

//     useEffect(() => {
//         const prevIndex = NAV_ORDER.indexOf(prevPathnameRef.current);
//         const currentIndex = NAV_ORDER.indexOf(pathname);

//         // If we find valid positions in our array, compare them
//         if (prevIndex !== -1 && currentIndex !== -1) {
//             if (currentIndex > prevIndex) {
//                 setDirection("right"); // Target is to the right -> slide page left
//             } else if (currentIndex < prevIndex) {
//                 setDirection("left");  // Target is to the left -> slide page right
//             }
//         }

//         prevPathnameRef.current = pathname;
//     }, [pathname]);

//     // Define our slide properties based on state orientation
//     const variants = {
//         initial: (dir: "left" | "right") => ({
//             opacity: 0,
//             x: dir === "right" ? 40 : -40,
//         }),
//         animate: {
//             opacity: 1,
//             x: 0,
//         },
//         exit: (dir: "left" | "right") => ({
//             opacity: 0,
//             x: dir === "right" ? -40 : 40,
//         }),
//     };

//     return (
//         <div className="relative w-full flex-1 flex flex-col overflow-hidden">
//             <AnimatePresence mode="popLayout" custom={direction}>
//                 <motion.div
//                     key={pathname}
//                     custom={direction}
//                     variants={variants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{
//                         duration: 0.3,
//                         ease: [0.25, 1, 0.5, 1], // Clean, snappy acceleration curve
//                     }}
//                     style={{ willChange: "transform, opacity" }}
//                     className="w-full flex-1 flex flex-col"
//                 >
//                     {children}
//                 </motion.div>
//             </AnimatePresence>
//         </div>
//     );
// }
