import ScoreListFilterItem from "@/components/items/community-score/score-list-filter";
import StudentJoinedListItem from "@/components/items/community-score/student-joined-list";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

const CommunityScoreList = () => {
    return ( 
        <>
        <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="flex items-center gap-4 mb-2">
                <label className="input input-bordered flex items-center gap-2 h-10">
                    <input type="text" className="grow" placeholder="Tìm kiếm sinh viên ...." />
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

                <ScoreListFilterItem />
            </div>

        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="hidden sm:table-cell">MSSV</TableHead>
                    <TableHead className="w-[25rem]">Họ và tên</TableHead>
                    <TableHead className="hidden sm:table-cell">Lớp</TableHead>
                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                    <TableHead className="hidden sm:table-cell">Số điện thoại</TableHead>
                    <TableHead className="text-center">Tổng điểm PVCĐ năm học</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium text-center hidden sm:table-cell">102200007</TableCell>
                    <TableCell>Nguyễn Vương Quốc Trường Thọ</TableCell>
                    <TableCell className="hidden sm:table-cell">
                        21TCLC_DT1
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                        102200007@sv1.dut.udn.vn
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                        0987654321
                    </TableCell>
                    <TableCell className="text-center font-medium">80</TableCell>
                    <TableCell className="text-right">
                        <StudentJoinedListItem />
                    </TableCell>
                </TableRow>
            </TableBody>
            
        </Table>
        </>
     );
}
 
export default CommunityScoreList;