import Image from 'next/image';
const Avatar = ({ user }) => {
  return (
    <>
      {user.image_url ? (
        <Image
          src={user.image_url}
          alt="user_avatar"
          width={28}
          height={28}
          className="rounded-full"
        />
      ) : (
        <div className="flex h-7 w-7 items-center justify-around rounded-full bg-hgreen">
          user.login[0]
        </div>
      )}
    </>
  );
};

export default Avatar;
