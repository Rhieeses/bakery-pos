import { Menu } from "lucide-react";
import { Time } from "../../../components/custom/time";
import { CloseMenu } from "../../../components/custom/sidebar/close-menu";
import { SidebarMenu } from "../../../components/custom/sidebar/sidebar-menu";
import { Search } from "lucide-react";

export function Header() {
    return (
        <header className="p-2">
            <nav className="mt-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-10">
                    <SidebarMenu>
                        <Menu className="size-[2rem] cursor-pointer" />
                    </SidebarMenu>

                    <Time />
                </div>
                <div className="input-button relative my-2 flex grow items-center">
                    <input
                        className="w-full rounded-full bg-white p-5"
                        placeholder="Search something sweet on your mind.... "
                    />
                    <Search className="absolute right-0 mx-3 size-[3rem] rounded-full bg-gray-200/40 stroke-black p-3" />
                </div>

                <CloseMenu />
            </nav>
        </header>
    );
}
