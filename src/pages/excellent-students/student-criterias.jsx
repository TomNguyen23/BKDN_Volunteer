import { useGetFalcutyCriteriaQuery, useGetSchoolCriteriaQuery } from "@/api/rtkQuery/featureApi/criteriaApiSlice";
import StudentCriteriasCard from "@/components/cards/excellent-students/student-criterias";
import { Separator } from "@/components/ui/separator";

const StudentCriterias = () => {
    const { data: falcutyCriteria } = useGetFalcutyCriteriaQuery();
    const { data: schoolCriteria} = useGetSchoolCriteriaQuery();
    return ( 
        <>
            
            <h1 className="font-bold text-gray-500 text-xl mb-8">Sinh viên 5 tốt cấp trường</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {schoolCriteria?.map((criteria) => (
                    <StudentCriteriasCard 
                        key={criteria.id} 
                        criteria={criteria} 
                        type="school"
                    />
                ))}
                
            </div>

            <Separator className="my-8" />
            
            <h1 className="font-bold text-gray-500 text-xl mb-8">Sinh viên 5 tốt cấp Liên chi Đoàn</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {falcutyCriteria?.map((criteria) => (
                    <StudentCriteriasCard 
                        key={criteria.id} 
                        criteria={criteria} 
                        type="falcuty"
                    />
                ))}
                
            </div>
        </>
     );
}
 
export default StudentCriterias;