const Description = ({ register }) => {
  return (
    <div className="mt-5 md:mt-10">
      <label className="text-xl font-bold">Describe your problem</label>
      <div className="mt-4 flex flex-col space-y-4 md:flex-row-reverse md:items-center md:justify-end md:space-y-0 md:pl-5">
        <p className="text-sm md:ml-12 md:w-1/3">
          Please try to give a concise and meaningful description!
          <span className="mt-2 block text-sm font-light italic">
            ex. “When I try to install node.js via brew a pop up notifies me
            that the CLI needs to be reinstalled.”
          </span>
        </p>
        <textarea
          rows={5}
          placeholder="Type your description..."
          {...register('description', { required: true })}
          className="border border-b-2 px-4 py-3 outline-none md:w-2/5"
        />
      </div>
    </div>
  );
};

export default Description;
