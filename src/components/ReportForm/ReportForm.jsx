'use client';
import SelectDevice from './SelectDevice';
import SelectHost from './SelectHost';
import Description from './Description';
import Button from '../Button';
import { useForm } from 'react-hook-form';
import * as Toast from '@radix-ui/react-toast';
import { useState } from 'react';

const ReportForm = () => {
  const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = async (data, event) => {
    const response = await fetch('/api/issues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: data.host,
        device: data.device,
        description: data.description,
      }),
    });
    if (response.status === 201) {
      console.log(response);
    }
  };
  const onError = (errors, event) => console.log(errors);
  return (
    <>
      {/* <Toast.Root
        className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]">
          Scheduled: Catch up
        </Toast.Title>
        <Toast.Description
          className="text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]"
          asChild
        >
          ddjvhbfdsjkvhdnvjdsnkvdsbjkvdsklndklssfhjdsfh,dsj,fnds
        </Toast.Description>
        <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
      </Toast.Root> */}
      <form className="my-7" onSubmit={handleSubmit(onSubmit, onError)}>
        <SelectDevice register={register} />
        <SelectHost register={register} />
        <Description register={register} />
        <div className="mt-8 flex justify-center md:mt-14 md:justify-start md:pl-5">
          <Button type={'submit'}>Submit</Button>
        </div>
      </form>
    </>
  );
};

export default ReportForm;
