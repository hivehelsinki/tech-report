'use client';
import SelectDevice from './SelectDevice';
import SelectHost from './SelectHost';
// import { Progress } from './ui/progress';
import Description from './Description';

const ReportForm = () => {
  return (
    <form className="my-7 text-hdark">
      <SelectDevice />
      <SelectHost />
      <Description />
      {/* <Progress value={33} /> */}
    </form>
  );
};

export default ReportForm;
