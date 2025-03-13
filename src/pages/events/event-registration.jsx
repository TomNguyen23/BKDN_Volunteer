import { EventChart } from "@/components/cards/manage-events/event-register-chart";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useGetEventRegistrationQuery } from "@/api/rtkQuery/featureApi/eventApiSlice";
import { useSelector } from "react-redux";
  

const EventRegistration = () => {
    const eventID = useSelector((state) => state.events.eventID);
    const { data: eventRegistration } = useGetEventRegistrationQuery(eventID);
    
    const downloadFileAtUrl = (url) => {
        const fileName = url.split("/").pop();
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobUrl = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement("a");
                a.href = blobUrl;
                a.download = fileName;
                a.click();
            });
    };

    return ( 
        <div>
            <EventChart 
                maxRegistrations={eventRegistration?.maxRegistrations}
                totalRegistrations={eventRegistration?.totalRegistrations}
                studentByCourse={eventRegistration?.studentByCourse}
            />

            <div className="flex justify-between items-center gap-4 mt-10 mb-3">
                <label className="input input-bordered flex items-center gap-2 h-10">
                    <input type="text" className="grow" placeholder="Tìm kiếm tên, lớp ...." />
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

                <Button 
                    className="btn-primary"
                    onClick={() => downloadFileAtUrl("http://localhost:8081/images/bd7265ef-2164-4229-9d16-71159660175e_481286189_617434270928486_850820291784427096_n.jpg")}
                >
                    Xuất file danh sách
                </Button>
            </div>

            <Table className="">
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[50px]">MSSV</TableHead>
                    <TableHead className="w-60">Họ và tên</TableHead>
                    <TableHead>Lớp sinh hoạt</TableHead>
                    <TableHead className="w-80">Khoa</TableHead>
                    <TableHead>E-mail</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {eventRegistration?.users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user?.studentId}</TableCell>
                            <TableCell>{user?.fullname}</TableCell>
                            <TableCell>{user?.clazz ? user.clazz : "-"}</TableCell>
                            <TableCell>{user?.department ? user.department : "-"}</TableCell>
                            <TableCell>{user?.email ? user.email : "-"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
     );
}
 
export default EventRegistration;