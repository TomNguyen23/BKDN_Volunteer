import { useRef, useState } from "react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import UploadImageItem from "@/components/items/file-media/upload-image";
import NewOrEditEvent from "@/components/cards/manage-events/new-or-edit-event";

const NewEvent = () => {
    const newOrEditEventRef = useRef(null);
    const [eventPanel, setEventPanel] = useState([]);

    const handleGetImage = (image) => {
        setEventPanel(image);
    }

    const handleSubmit = () => {
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
        }
    };
    return ( 
        <>
        <h1 className="text-3xl font-bold text-gray-700">Tạo sự kiện mới</h1>

        <NewOrEditEvent ref={newOrEditEventRef} onHandleEventInParent={() => {}} />

        <Separator className="my-10" />

        <div className="flex items-center gap-1 mt-8 mb-4">
            <span className="material-symbols-outlined text-main">wallpaper</span>
            <h3 className="font-bold font-inter text-lg text-main">Ảnh bìa</h3>
        </div>

        <UploadImageItem getImages={handleGetImage} />

        <Button className="mt-8 bg-main hover:bg-main-hover float-end" onClick={handleSubmit}>Tạo sự kiện</Button>
        </>
     );
}
 
export default NewEvent;