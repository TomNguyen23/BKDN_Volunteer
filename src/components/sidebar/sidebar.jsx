import { Link } from 'react-router-dom';

import logo from "@/assets/logo-DUT.jpg"

import SideBarItem from './sidebar-item';
import URLS from '@/routes/urls';

const SideBar = () => {
    return ( 
        <div className="w-1/5 md:p-4 bg-slate-50 hidden lg:block md:fixed md:h-full md:overflow-y-auto">
            <Link to={URLS.MANAGE_EVENTS} className='flex my-4'>
                <img src={logo} className='size-11 mr-2' alt="DUT-logo" />
                <div>
                    <p className='text-[0.6rem] font-medium font-inter'>ĐẠI HỌC ĐÀ NẴNG</p>
                    <p className='font-bold text-[0.7rem]'>TRƯỜNG ĐẠI HỌC BÁCH KHOA</p>
    
                    <hr className='w-11/12 text-left ml-0' />

                    <p className='text-[0.46rem] mt-0.5 font-medium font-inter'>HỆ THỐNG CHẤM ĐIỂM PHỤC VỤ CỘNG ĐỒNG</p>
                </div>
            </Link>

            <ul className='md:pt-4'>
                <li className='md:pb-5 text-[#64748B] text-sm font-bold uppercase'>Danh mục</li>
                
                <SideBarItem navigateTo={URLS.MANAGE_EVENTS}>
                    <div className="flex items-center">
                        <span className="material-symbols-outlined mr-1">event_list</span>
                        <span className='text-lg'>Quản lý sự kiện</span>
                    </div>
                </SideBarItem>

                <SideBarItem navigateTo={URLS.COMMUNITY_SCORE}>
                    <div className="flex items-center">
                        <span className="material-symbols-outlined mr-1">format_list_numbered_rtl</span>
                        <span className='text-lg'>Quản lý điểm PVCĐ</span>
                    </div>
                </SideBarItem>
                
                <SideBarItem navigateTo={URLS.EXELLENCE_STUDENTS}>
                    <div className="flex items-center">
                        <span className="material-symbols-outlined mr-1">social_leaderboard</span>
                        <span className='text-lg'>Sinh viên 5 tốt</span>
                    </div>
                </SideBarItem>
            </ul>
            
        </div>
     );
}
 
export default SideBar;