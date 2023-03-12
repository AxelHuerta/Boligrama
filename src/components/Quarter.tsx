import {ReactNode} from "react";


type Props = {
  num: number;
  subject1: ReactNode;
  subject2?: ReactNode;
  subject3?: ReactNode;
  subject4?: ReactNode;
};

function Quarter({ num, subject1, subject2, subject3, subject4 }: Props) {
  return (
   <div className="mb-5 text-white">
      <div className='font-bold uppercase'>Trimestre {num}</div>
      <div className="grid grid-cols-4 gap-4">
        {subject1}
        {subject2}
        {subject3}
        {subject4}
      </div>
    </div> 
  );
}

export default Quarter;
