import { Button } from "@/components/ui/button";

const EventDetail = () => {
    return ( 
        <>
        <div className="flex flex-wrap items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-700 mr-2">Hội trại truyền thống Bách khoa BK Color</h1>
            <div className="badge bg-blue-300 text-main font-semibold py-3">Đang diễn ra</div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            <img 
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/473104527_586942430644337_7347229508183043858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zQcgFeEMyNMQ7kNvgFMuZCH&_nc_oc=AdhbCxtT0_QBDXjQAlaJRvxOMlMO2JlfDcZsWgVlV6H1CQvM6-DvnJXlYeDXSLHc4x0&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AmjaaTM5HiATl2HTnkh38yJ&oh=00_AYApkBZCWgWkiPZ30gcQqes8kfgKYShAPXnhqYnNMxSuOA&oe=67C49ED2" 
                alt="event-img" 
                className="w-full h-96 object-cover rounded-lg"
            />

            <div>
                <section className="mb-6 space-y-2">
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-main">category</span>
                        <h3 className="font-bold font-inter text-lg text-main">Danh mục sự kiện</h3>
                    </div>
                    <div className="flex items-center gap-1 ml-7 mt-1">
                        <p className="font-bold font-inter text-sm text-slate-600">Loại hình:</p>
                        <p className="text-sm text-slate-600">Hoạt động truyền thống</p>
                    </div>
                    <div className="flex items-center gap-1 ml-7">
                        <p className="font-bold font-inter text-sm text-slate-600">Điểm phục vụ cộng đồng:</p>
                        <p className="text-sm text-slate-600">15</p>
                    </div>
                </section>

                <section className="space-y-2">
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-main">info</span>
                        <p className="font-bold font-inter text-lg text-main">Thông tin</p>
                    </div>
                    <div className="flex items-center gap-1 ml-7 mt-1">
                        <p className="font-bold font-inter text-sm text-slate-600">Thời gian:</p>
                        <p className="text-sm text-slate-600">7:00 24/02/2025 - 16:00 25/02/2025</p>
                    </div>
                    <div className="flex items-center gap-1 ml-7">
                        <p className="font-bold font-inter text-sm text-slate-600">Thời gian đăng ký:</p>
                        <p className="text-sm text-slate-600">9:00 12/02/2025 - 23:59 16/02/2025</p>
                    </div>
                    <div className="flex items-center gap-1 ml-7">
                        <p className="font-bold font-inter text-sm text-slate-600">Địa điểm:</p>
                        <p className="text-sm text-slate-600">Sân lớn trước hội trường F</p>
                    </div>

                    <div className="flex items-center gap-1 ml-7">
                        <p className="font-bold font-inter text-sm text-slate-600">Bản kế hoạch:</p>
                        <p className="text-sm text-slate-600">Link/file download</p>
                    </div>
                </section>

                <Button className="mt-6">Đóng đơn đăng ký sớm</Button>
            </div>
        </div>

        <section className="mt-5 space-y-2">
            <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-main">newsmode</span>
                <h3 className="font-bold font-inter text-lg text-main">Nội dung</h3>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit rem maxime a minima neque, ut quibusdam dolorum excepturi, vitae eum earum repellendus, aspernatur minus harum similique magnam perferendis veritatis!
                Culpa ad, suscipit quod unde ut voluptatem quo repellendus velit, id, quibusdam maxime? Autem soluta consectetur explicabo, molestias quasi, sunt impedit quibusdam et modi deleniti exercitationem maiores odio corrupti quidem?
                Totam ipsam quod, fuga illo expedita dolorum reprehenderit magnam placeat aliquid, dolor deleniti nam repellat at repudiandae aspernatur voluptatem sit, error iure! Deserunt quod quo, voluptates deleniti cumque iusto doloremque.0
            </p>
        </section>
        </>
     );
}
 
export default EventDetail;