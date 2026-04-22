import { Link, Button } from "@heroui/react";
import ThemTaggle from "../ThemTaggle/ThemTaggle";

const Navbar = () => {
    return (
        <div>
            {/* Basic */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">ACME</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/">Home</Link>
                        <Link href="/task">Tasks</Link>
                    </div>
                    <div>
                        <ThemTaggle />
                    </div>
                </header>

            </nav>
        </div>
    );
};

export default Navbar;