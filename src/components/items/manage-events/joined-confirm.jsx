import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
  

const JoinedConfirmItem = ({ studentIds }) => {
    const { toast } = useToast();
    const [confirmOption, setConfirmOption] = useState('');

    const handleConfirm = () => {
        if (confirmOption === 'option-1') {
            console.log('Xác nhận tất cả sinh viên đều tham gia');
        } else if (confirmOption === 'option-2') {
            console.log('Xác nhận những sinh viên được đánh dấu:', studentIds);
        } else {
            toast({
                variant: "destructive",
                duration: 2000,
                title: "Uh oh! Có gì đó sai sai.",
                description: "Vui lòng chọn một danh mục xác nhận.",
                action: <ToastAction altText="Try again">Thử lại</ToastAction>,
            });
            return;
        }
    }

    return ( 
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-main hover:bg-main-hover text-white">
                    Xác nhận nhanh
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận tham gia</DialogTitle>
                    <DialogDescription>
                        Xác nhận tham gia sự kiện cho sinh viên
                    </DialogDescription>
                </DialogHeader>

                <article>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Danh mục xác nhận</span>
                        </div>
                        <select  
                            className="select select-bordered rounded-md" 
                            value={confirmOption} 
                            onChange={(e) => setConfirmOption(e.target.value)}
                        >
                            <option value="">Chọn danh mục...</option>
                            <option value="option-1">Xác nhận tất cả sinh viên đều tham gia</option>
                            <option value="option-2">Xác nhận những sinh viên được đánh dấu</option>
                        </select>
                    </label>

                    <p className="text-sm text-slate-600 font-medium my-5">
                        * Lưu ý: Điều kiện xác nhận trên dành cho những sinh viên đang trong trạng thái <i>Chờ xác nhận</i>.
                    </p>

                    <div className="flex justify-end mt-5">
                        {/* <Button className="bg-red-600 hover:bg-red-700 text-white mr-4">
                            <span className="material-symbols-outlined mr-2">block</span>
                            Xác nhận không tham gia
                        </Button> */}
                        <Button 
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                            onClick={handleConfirm}
                        >
                            <span className="material-symbols-outlined mr-2">task_alt</span>
                            Xác nhận tham gia
                        </Button>
                    </div>
                </article>
            </DialogContent>
        </Dialog>
     );
}
JoinedConfirmItem.propTypes = {
    studentIds: PropTypes.string.isRequired,
};

export default JoinedConfirmItem;