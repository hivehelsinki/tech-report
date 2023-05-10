import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-5 inline-flex w-full justify-center pb-3 md:mt-24">
      <p className="text-sm text-slate-700">
        Developed by{' '}
        <Link
          className="underline underline-offset-4"
          target="_blank"
          href="https://github.com/amedeomajer"
        >
          ame
        </Link>
        . Want to{' '}
        <Link
          className="underline underline-offset-4"
          target="_blank"
          href="https://github.com/hivehelsinki/tech-report"
        >
          contribute
        </Link>
        ?
      </p>
    </footer>
  );
};

export default Footer;
