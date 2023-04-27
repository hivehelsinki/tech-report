import Image from 'next/image';
const Avatar = ({ user }) => {
  return (
    <div className="flex h-7 w-7 items-center justify-around rounded-full bg-hgreen">
      {user.img_url ? (
        <Image src={user.img_url} alt="user_avatar" />
      ) : (
        user.login[0]
      )}
    </div>
  );
};

export default Avatar;
