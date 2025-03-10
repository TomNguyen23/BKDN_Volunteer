import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UserDefaultAvatar from "@/assets/user-default-avt.jpg";

const JoinedConfirmForEachStudentItem = () => {
    return ( 
        <Dialog>
            <DialogTrigger asChild>
                <span className="material-symbols-outlined cursor-pointer text-3xl">more_horiz</span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Chi tiết tham gia</DialogTitle>
                </DialogHeader>

                <article>
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={UserDefaultAvatar} />
                            <AvatarFallback>SV</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold">Nguyễn Thị Trà My</h3>
                            <p className="text-sm text-slate-600">102210007</p>
                        </div>
                    </div>

                    <section className="space-y-4 mt-5">
                        <div className="flex items-center gap-1">
                            <p className="font-bold font-inter text-sm text-slate-600">Lớp sinh hoạt:</p>
                            <p className="text-sm text-slate-600">21TCLC_DT2</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="font-bold font-inter text-sm text-slate-600">Thời gian check-in:</p>
                            <p className="text-sm text-slate-600">8:21 12/12/2021</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="font-bold font-inter text-sm text-slate-600">Trạng thái:</p>
                            <div className="badge bg-yellow-100 text-yellow-600 font-semibold py-3">Chờ xác nhận</div>
                        </div>

                        {/* <div>
                            <p className="font-bold font-inter text-sm text-slate-600">Minh chứng</p>
                            <img   
                                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/481465069_1056289479860021_8230703946502279527_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=euf_kr4JySsQ7kNvgFkIQwg&_nc_oc=Adh2EU9_bltUJgtbfgS6PcnoohsSr9vZwmZwOkZDCJ80zNYPIv3MHWNfXdS6bKNq6e4&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&_nc_gid=Amyb1klmH4NCTHbPyQUIyGQ&oh=00_AYAlUeQiuX-LOUFcYdONEBhfsMDwromeUyH0dRwg4IiDow&oe=67CC4B90" 
                                alt="event-proof"
                                className="w-full h-60 object-cover rounded-lg mt-2 mb-8" 
                            />
                        </div> */}
                    </section >

                    <div className="flex justify-end mt-5">
                        {/* <Button className="bg-red-600 hover:bg-red-700 text-white mr-4">Xác nhận không tham gia</Button> */}
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Xác nhận tham gia</Button>
                    </div>
                </article>
            </DialogContent>
        </Dialog>
     );
}
 
export default JoinedConfirmForEachStudentItem;