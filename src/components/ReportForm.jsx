'use client';
import SelectDevice from './SelectDevice';
import SelectHost from './SelectHost';
import Description from './Description';
import Button from './Button';

const ReportForm = () => {
  return (
    <form className="my-7">
      <SelectDevice />
      <SelectHost />
      <Description />
      <div className="mt-5 flex justify-center md:mt-10 md:justify-start md:pl-5">
        <Button className="">Submit</Button>
      </div>
    </form>
  );
};

export default ReportForm;
