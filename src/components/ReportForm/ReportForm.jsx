'use client';
import SelectDevice from './SelectDevice';
import SelectHost from './SelectHost';
import Description from './Description';
import Button from '../Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from '@components/ui/use-toast';

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
      return toast({
        title: 'Great!',
        description: 'Issue created successfully',
      });
    }
  };
  const onError = (errors, event) => console.log(errors);
  return (
    <>
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
