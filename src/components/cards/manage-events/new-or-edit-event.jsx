/* eslint-disable react/display-name */
import { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from 'prop-types';
import { isBefore } from "date-fns";

import { Separator } from "@/components/ui/separator";
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import CriteriaCheckboxItem from "@/components/items/other/criteria-checkbox";

// eslint-disable-next-line no-unused-vars
const NewOrEditEvent = forwardRef(({ onHandleEventInParent }, ref) => {
    const { toast } = useToast();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [startRegTime, setStartRegTime] = useState();
    const [endRegTime, setEndRegTime] = useState();
    const [eventTitle, setEventTitle] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventContent, setEventContent] = useState("");
    const [eventCategory, setEventCategory] = useState("");
    const [eventServePoint, setEventServePoint] = useState("");
    const [isLimitParticipants, setIsLimitParticipants] = useState(false);
    const [participantLimit, setParticipantLimit] = useState("");
    const [planDocumentLink, setPlanDocumentLink] = useState("");
    const [falcultyCriteria, setFalcultyCriteria] = useState([]);
    const [universityCriteria, setUniversityCriteria] = useState([]);
    const [academicYear, setAcademicYear] = useState("");

    const data = [
        {
            "createdAt": "2025-03-01T22:30:25.020015",
            "updatedAt": "2025-03-01T22:30:25.020015",
            "id": 1,
            "name": "Công tác tổ chức tốt",
            "description": "Duy trì sinh hoạt định kỳ, có cơ cấu tổ chức rõ ràng và hoạt động hiệu quả."
        },
        {
            "createdAt": "2025-03-01T22:30:25.022348",
            "updatedAt": "2025-03-01T22:30:25.022348",
            "id": 2,
            "name": "Hoạt động phong trào sôi nổi",
            "description": "Tích cực tham gia và tổ chức các phong trào do Đoàn cấp trên phát động."
        },
        {
            "createdAt": "2025-03-01T22:30:25.023354",
            "updatedAt": "2025-03-01T22:30:25.023354",
            "id": 3,
            "name": "Công tác giáo dục hiệu quả",
            "description": "Thực hiện tốt việc tuyên truyền, giáo dục lý tưởng cách mạng, đạo đức, lối sống cho đoàn viên."
        },
        {
            "createdAt": "2025-03-01T22:30:25.02481",
            "updatedAt": "2025-03-01T22:30:25.02481",
            "id": 4,
            "name": "Hỗ trợ đoàn viên, sinh viên tốt",
            "description": "Quan tâm, hỗ trợ sinh viên khó khăn trong học tập và đời sống."
        },
        {
            "createdAt": "2025-03-01T22:30:25.026158",
            "updatedAt": "2025-03-01T22:30:25.026158",
            "id": 5,
            "name": "Ứng dụng công nghệ, chuyển đổi số tốt",
            "description": "Sử dụng nền tảng số trong quản lý, tuyên truyền và tổ chức hoạt động Đoàn."
        }
    ];

    const handleFalcultyCriteria = (id, isChecked) => {
        setFalcultyCriteria((prev) => {
            if (isChecked) {
                return [...prev, id];
            } else {
                return prev.filter((item) => item !== id);
            }
        });
    };

    const handleUniversityCriteria = (id, isChecked) => {
        setUniversityCriteria((prev) => {
            if (isChecked) {
                return [...prev, id];
            } else {
                return prev.filter((item) => item !== id);
            }
        });
    };

    useImperativeHandle(ref, () => ({
        collectAndValidateData: () => {
            if (isBefore(new Date(endTime), new Date(startTime))) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Có gì đó sai sai.",
                    description: "Ngày kết thúc không thể trước ngày bắt đầu",
                    action: <ToastAction altText="Try again">Thử lại</ToastAction>,
                });
                return null;
            }

            if (!eventTitle) {
                toast({
                    variant: "destructive",
                    title: "Thiếu thông tin",
                    description: "Vui lòng nhập tên sự kiện",
                    action: <ToastAction altText="Try again">Thử lại</ToastAction>,
                });
                return null;
            }

            return {
                name: eventTitle,
                location: eventLocation,
                description: eventContent,
                eventType: eventCategory,
                score: eventServePoint,
                date: startTime,
                endDate: endTime,
                registrationStartDate: startRegTime,
                registrationEndDate: endRegTime,
                additionalInfo: planDocumentLink,
                maxRegistrations: isLimitParticipants ? participantLimit : -1,
                five_good_lcd_id: falcultyCriteria,
                five_good_id: universityCriteria,
                semester: academicYear,
            };
        }
    }));

    return ( 
        <>
        <div className="flex items-center gap-1 mt-8 mb-4">
            <span className="material-symbols-outlined text-main">info</span>
            <h3 className="font-bold font-inter text-lg text-main">Thông tin chung</h3>
        </div>

        <article className="space-y-4 md:w-2/3">
            <label className="form-control w-full max-w-3xl">
                <div className="label">
                    <span className="label-text">Tên sự kiện</span>
                </div>
                <input 
                    type="text" 
                    placeholder="Sự kiện..." 
                    className="input input-bordered w-full max-w-3xl rounded-md" 
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                />
            </label>

            <label className="form-control w-full max-w-3xl">
                <div className="label">
                    <span className="label-text">Địa điểm diễn ra</span>
                </div>
                <input 
                    type="text" 
                    placeholder="Địa điểm..." 
                    className="input input-bordered w-full max-w-3xl rounded-md" 
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Năm học</span>
                </div>
                <input 
                    type="text" 
                    placeholder="Năm học..." 
                    className="input input-bordered w-full max-w-xs rounded-md" 
                    value={academicYear}
                    onChange={(e) => setAcademicYear(e.target.value)}
                />
            </label>
    
            <section className="flex flex-wrap md:flex-nowrap w-full max-w-3xl items-center gap-3">
                <label className="form-control w-full max-w-sm">
                    <div className="label">
                        <span className="label-text">Thời gian bắt đầu</span>
                    </div>
                    <input 
                        type="datetime-local" 
                        className="input input-bordered w-full max-w-sm rounded-md" 
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </label>
                <label className="form-control w-full max-w-sm">
                    <div className="label">
                        <span className="label-text">Thời gian kết thúc</span>
                    </div>
                    <input 
                        type="datetime-local" 
                        className="input input-bordered w-full max-w-sm rounded-md" 
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </label>
            </section>
    
            <section className="flex flex-wrap md:flex-nowrap w-full max-w-3xl items-center gap-3">
                <label className="form-control w-full max-w-sm">
                    <div className="label">
                        <span className="label-text">Thời gian bắt đầu đăng ký</span>
                    </div>
                    <input 
                        type="datetime-local" 
                        className="input input-bordered w-full max-w-sm rounded-md" 
                        value={startRegTime}
                        onChange={(e) => setStartRegTime(e.target.value)}
                    />
                </label>
                <label className="form-control w-full max-w-sm">
                    <div className="label">
                        <span className="label-text">Thời gian kết thúc đăng ký</span>
                    </div>
                    <input 
                        type="datetime-local" 
                        className="input input-bordered w-full max-w-sm rounded-md" 
                        value={endRegTime}
                        onChange={(e) => setEndRegTime(e.target.value)}
                    />                
                </label>
            </section>

            <label className="form-control w-full max-w-3xl">
                <div className="label">
                    <span className="label-text">Link bản kế hoạch</span>
                </div>
                <input 
                    type="text" 
                    placeholder="Link bản kế hoạch..." 
                    className="input input-bordered w-full max-w-3xl rounded-md" 
                    value={planDocumentLink}
                    onChange={(e) => setPlanDocumentLink(e.target.value)}
                />
            </label>
        </article>


        <Separator className="my-10" />

        <div className="flex items-center gap-1 mt-8 mb-4">
            <span className="material-symbols-outlined text-main">category</span>
            <h3 className="font-bold font-inter text-lg text-main">Danh mục & số lượng tham gia sự kiện</h3>
        </div>
        <article className="space-y-4 md:w-2/3">
            <label className="form-control w-full max-w-3xl">
                <div className="label">
                    <span className="label-text">Danh mục sự kiện</span>
                </div>
                <select  
                    className="select select-bordered rounded-md" 
                    value={eventCategory} 
                    onChange={(e) => setEventCategory(e.target.value)}
                >
                    <option value="">Chọn danh mục...</option>
                    <option value="1">Hoạt động truyền thống</option>
                    <option value="2">Hoạt động học thuật</option>
                </select>
            </label>

            <label className="form-control w-4/12">
                <div className="label">
                    <span className="label-text">Điểm phục vụ cộng đồng</span>
                </div>
                <input 
                    type="text" 
                    className="input input-bordered rounded-md" 
                    value={eventServePoint}
                    onChange={(e) => setEventServePoint(e.target.value)}
                />
            </label>

            <section className="flex flex-wrap justify-between items-center max-w-lg">
                <div className="form-control w-fit my-4">
                    <label className="label cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="toggle toggle-info" 
                            checked={isLimitParticipants} 
                            onChange={(e) => setIsLimitParticipants(e.target.checked)} 
                        />
                        <span className="label-text ml-2">Giới hạn số lượng tham gia</span>
                    </label>
                </div>
    
                {isLimitParticipants && (
                    <label className="form-control max-w-xs">
                        <input 
                            type="text" 
                            placeholder="Số lượng"
                            className="input input-bordered max-w-xs rounded-md" 
                            value={participantLimit}
                            onChange={(e) => setParticipantLimit(e.target.value)}
                        />
                    </label>
                )}
            </section>
        </article>

        <Separator className="my-10" />

        <div className="flex items-center gap-1 mt-8 mb-4">
            <span className="material-symbols-outlined text-main">workspace_premium</span>
            <h3 className="font-bold font-inter text-lg text-main">Sinh viên 5 tốt</h3>
        </div>
        <article className="space-y-4 md:w-2/3">
            <div className="mb-10">
                <h4 className="font-semibold text-gray-600 mb-3">Sinh viên 5 tốt cấp khoa</h4>
                {data.map((item, index) => (
                    <CriteriaCheckboxItem 
                        key={item.id}
                        group="faculty" 
                        index={index} 
                        label={item.name} 
                        description={item.description} 
                        value={item.id} 
                        onCheckboxChange={handleFalcultyCriteria}
                    />
                ))}
            </div>

            <div>
                <h4 className="font-semibold text-gray-600 mb-3">Sinh viên 5 tốt cấp trường</h4>
                {data.map((item, index) => (
                    <CriteriaCheckboxItem 
                        key={item.id} 
                        group="university"
                        index={index} 
                        label={item.name} 
                        description={item.description} 
                        value={item.id} 
                        onCheckboxChange={handleUniversityCriteria}
                    />
                ))}
            </div>
        </article>

        
        <Separator className="my-10" />

        <div className="flex items-center gap-1 mt-8 mb-4">
            <span className="material-symbols-outlined text-main">newsmode</span>
            <h3 className="font-bold font-inter text-lg text-main">Nội dung</h3>
        </div>

        <textarea 
            className="textarea rounded-md focus:border-none focus:outline-none w-full md:min-h-96" 
            placeholder="Soạn thảo nội dung ...."
            value={eventContent}
            onChange={(e) => setEventContent(e.target.value)}
        ></textarea>
        </>
     );
});

NewOrEditEvent.propTypes = {
    onHandleEventInParent: PropTypes.func.isRequired,
    handleFalcultyCriteria: PropTypes.func,
    handleUniversityCriteria: PropTypes.func,
};

export default NewOrEditEvent;