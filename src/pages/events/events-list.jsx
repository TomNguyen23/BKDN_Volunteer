import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button";
    
import { format, isAfter, isBefore } from "date-fns";
import { useEffect, useState } from 'react';
import EventFilter from "@/components/items/manage-events/events-filter";
import { Link } from "react-router-dom";
import URLS from "@/routes/urls";

const invoicesData = [
    {
        eventName: "Sự kiện chào đón tân sinh viên khoa CNTT",
        startTime: "2024-09-12T09:00:00.000Z",
        endTime: "2024-09-14T16:00:00.000Z",
        startRegister: "2024-08-12T09:00:00.000Z",
        endRegister: "2024-08-14T16:00:00.000Z",
    },
    {
        eventName: "Sự kiện trại BK Color",
        startTime: "2025-09-12T09:00:00.000Z",
        endTime: "2025-09-14T16:00:00.000Z",
        startRegister: "2025-08-12T09:00:00.000Z",
        endRegister: "2025-08-14T16:00:00.000Z",
    },
    {
        eventName: "Sự kiện trại khoa CNTT",
        startTime: "2025-02-23T09:00:00.000Z",
        endTime: "2025-02-25T16:00:00.000Z",
        startRegister: "2025-02-12T09:00:00.000Z",
        endRegister: "2025-02-14T16:00:00.000Z",
    },
    
  ]

const EventsList = () => {
    const [events, setEvents] = useState([]);

    const getStatus = (startTime, endTime) => {
        const now = new Date();
        const start = new Date(startTime);
        const end = new Date(endTime);
    
        if (isBefore(now, start)) {
            return 'Sắp diễn ra';
        }
        else if (isAfter(now, end)) {
            return 'Đã diễn ra';
        }
        return 'Đang diễn ra';
    };

    useEffect(() => {
        const updatedEvents = invoicesData.map(event => ({
            ...event,
            status: getStatus(event.startTime, event.endTime),
        }));
        setEvents(updatedEvents);
    }, []);

    

    return ( 
        <>
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
                <label className="input input-bordered flex items-center gap-2 h-10">
                    <input type="text" className="grow" placeholder="Tìm kiếm sự kiện ...." />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 
                            1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" 
                        />
                    </svg>
                </label>

                <EventFilter />
            </div>

            <Link to={URLS.NEW_EVENT} className="btn bg-main text-white">
                <span className="material-symbols-outlined">add</span>
                Tạo sự kiện
            </Link>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-3">STT</TableHead>
                    <TableHead className="w-[22rem]">Tên sự kiện</TableHead>
                    <TableHead>Thời gian diễn ra</TableHead>
                    <TableHead>Thời gian đăng ký</TableHead>
                    <TableHead className="text-center">Trạng thái</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map((event, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-center">{index + 1}</TableCell>
                        <TableCell>{event.eventName}</TableCell>
                        <TableCell>
                            {format(new Date(event.startTime), "HH:mm dd/MM/yyyy")} - {format(new Date(event.endTime), "HH:mm dd/MM/yyyy")}
                        </TableCell>
                        <TableCell>
                            {format(new Date(event.startRegister), "HH:mm dd/MM/yyyy")} - {format(new Date(event.endRegister), "HH:mm dd/MM/yyyy")}
                        </TableCell>
                        <TableCell className="text-center">
                            {event.status === 'Sắp diễn ra' ? (
                                <div className="badge bg-gray-400 text-white font-semibold">{event.status}</div>
                            ) : event.status === 'Đã diễn ra' ? (
                                <div className="badge bg-green-200 text-green-800 font-semibold">{event.status}</div>
                            ) : (
                                <div className="badge bg-blue-300 text-main font-semibold">{event.status}</div>
                            )}
                        </TableCell>
                        <TableCell className="text-right">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <span className="material-symbols-outlined cursor-pointer">more_vert</span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Chi tiết</DropdownMenuItem>
                                    <DropdownMenuItem>Chỉnh sửa sự kiện</DropdownMenuItem>
                                    <DropdownMenuItem>Đóng đơn đăng ký sớm</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-700">Hủy sự kiện</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            
        </Table>
        </>
     );
}
 
export default EventsList;