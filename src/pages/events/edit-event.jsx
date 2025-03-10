import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from "@/components/ui/toast";

import UploadImageItem from "@/components/items/file-media/upload-image";
import NewOrEditEvent from "@/components/cards/manage-events/new-or-edit-event";
import URLS from "@/routes/urls";

import { useGetEventCriteriasQuery } from "@/api/rtkQuery/featureApi/criteriaApiSlice";
import { useSelector } from "react-redux";
import { useGetEventByIdQuery } from "@/api/rtkQuery/featureApi/eventApiSlice";

const EditEvent = () => {
    const { toast } = useToast();
    const navigateTo = useNavigate();
    const newOrEditEventRef = useRef(null);
    const [eventPanel, setEventPanel] = useState([]);

    const eventID = useSelector((state) => state.events.eventID);
    const { data: event } = useGetEventByIdQuery(eventID);
    const { data: eventCriteria } = useGetEventCriteriasQuery(eventID);

    const handleGetImage = (image) => {
        setEventPanel(image);
    }

    const handleSubmit = async () => {
        if (newOrEditEventRef.current) {
            const eventData = newOrEditEventRef.current.collectAndValidateData();
            if (eventData) {
                console.log("Dữ liệu gửi lên server:", eventData);
            }

            if (!eventData) return; 
    
            const formData = new FormData();

            formData.append("files", eventPanel);
            Object.keys(eventData).forEach(key => {
                if (eventData[key] !== null) {
                    formData.append(key, eventData[key]);
                }
            });

            // await createEvent(formData)
            //     .unwrap()
            //     .then((res) => {
            //         toast({
            //             title: "Thành công",
            //             description: res.data,
            //         });
            //         navigateTo(URLS.MANAGE_EVENTS);
            //     })
            //     .catch((error) => {
            //         toast({
            //             variant: "destructive",
            //             title: "Uh oh! Có gì đó sai sai.",
            //             description: error.data,
            //             action: <ToastAction altText="Try again">Thử lại</ToastAction>,
            //         });
            //     });
        }
    };
    return ( 
        <>
        <h1 className="text-3xl font-bold text-gray-700">Tạo sự kiện mới</h1>

        <NewOrEditEvent 
            ref={newOrEditEventRef} 
            onHandleEventInParent={() => {}} 
            event={event}
            eventCriteria={eventCriteria}
        />

        <Separator className="my-10" />

        <div className="flex items-center gap-1 mt-8 mb-4">
            <span className="material-symbols-outlined text-main">wallpaper</span>
            <h3 className="font-bold font-inter text-lg text-main">Ảnh bìa</h3>
        </div>

        <UploadImageItem getImages={handleGetImage} />

        {/* {isLoading 
            ? <Button className='mt-8bg-main-hover float-end' disabled>
                Đang tạo sự kiện
                <span className="loading loading-dots loading-md ml-2"></span>
            </Button>
            : <Button className="mt-8 bg-main hover:bg-main-hover float-end" onClick={handleSubmit}>Xác nhận & Tạo sự kiện</Button>
        } */}
        <Button className="mt-8 bg-main hover:bg-main-hover float-end" onClick={handleSubmit}>Cập nhật sự kiện</Button>
        </>
    );
}
 
export default EditEvent;