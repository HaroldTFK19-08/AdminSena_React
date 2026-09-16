import AsideAdmin from "./Aside";
import TopBar from "./Header";

export default function LayoutAdmin({ children, titulo = "Panel principal" }) {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <AsideAdmin />
            <main className="flex-1 min-w-0 overflow-y-auto">
                <TopBar titulo={titulo} />
                <div className="w-full max-w-[1600px] mx-auto px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
