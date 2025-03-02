import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "@/redux/reducer/auth.reducer";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const user = useSelector(state => state.auth.user);

    const logoutHandler = () => {
        dispatch(logout());
        navigateTo('/');
    }

    return ( 
        <nav className="flex flex-wrap justify-between items-center px-5 md:px-12 bg-main h-16">
            <h1 className="uppercase font-semibold text-sm text-white">quản lý sự kiện</h1>

            <DropdownMenu>
                <DropdownMenuTrigger className="ml-5">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Admin</DropdownMenuLabel>
                    
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logoutHandler}>Đăng xuất</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
     );
}
 
export default Navbar;