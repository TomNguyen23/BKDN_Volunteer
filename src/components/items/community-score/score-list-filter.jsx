import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import CheckboxButton from "@/components/items/checkbox/tag-checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const eventStatus = [
    { label: 'Sắp diễn ra', value: 'upcoming' },
    { label: 'Đang diễn ra', value: 'ongoing' },
    { label: 'Đã diễn ra', value: 'completed' },
];

const ScoreListFilterItem = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <Button variant="outline">
                    <span className="material-symbols-outlined pr-0.5">filter_list</span>
                    Bộ lọc
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <form className="space-y-4" >
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Trạng thái</span>
                        </div>
                        <div className="flex space-x-1">
                            {eventStatus.map((status, index) => (
                                <CheckboxButton
                                    key={index}
                                    index={index}
                                    label={status?.label}
                                    value={status?.value}
                                    // onCheckboxChange={handleCheckboxChange}
                                />
                            ))}
                        </div>
                    </label>
    
                    
    
                    <div className="flex justify-between space-x-2">
                        <Button type="reset" className="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-600">
                            Xóa bộ lọc
                        </Button>
                        <Button type="submit" className="w-1/2 bg-main hover:bg-main-hover">
                            Áp dụng bộ lọc
                        </Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
     );
}
 
export default ScoreListFilterItem;