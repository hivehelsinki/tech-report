import Label from '@/components/Label';

const Description = ({ watch, register, errors }) => {
  return (
    <div className="mt-7 md:mt-10">
      <Label>Describe your problem</Label>
      {errors.description && (
        <p className="mt-3 font-light text-hred md:px-5">
          {errors.description.message}
        </p>
      )}
      <div className="mt-4 flex flex-col space-y-4 md:flex-row-reverse md:items-center md:justify-end md:space-y-0 md:pl-5">
        <p className="text-sm md:ml-12 md:w-1/3">
          Please try to give a concise and meaningful description!
          <span className="mt-2 block text-sm font-light italic">
            e.g. “When I try to install node.js via brew a pop up notifies me
            that the CLI needs to be reinstalled.”
          </span>
        </p>
        <div className="relative md:w-2/5">
          <textarea
            rows={5}
            name="description"
            placeholder="Type your description..."
            {...register('description', {
              required: 'This is required',
              minLength: { value: 25, message: 'Minimum 25 characters' },
              maxLength: { value: 400, message: 'Maximum 400 characters' },
            })}
            className="w-full border border-b-4 px-4 py-4 outline-none"
          />
          <div
            className={`absolute -bottom-6 right-0 mb-2 mr-2 text-xs font-light transition-opacity duration-300 ease-linear
            ${
              watch('description').length > 400 ||
              watch('description').length < 25
                ? 'text-hred'
                : 'text-gray-400'
            }
            ${watch('description').length === 0 ? 'opacity-0' : 'opacity-100'}`}
          >
            {watch('description').length}/400
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
