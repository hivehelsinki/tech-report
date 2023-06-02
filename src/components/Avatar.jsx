const Avatar = ({ user }) => {
  return (
    <div
      className="flex h-7 w-7 items-center justify-around rounded-full bg-hgreen bg-cover bg-center"
      style={user.image_url && { backgroundImage: `url(${user.image_url})` }}
    >
      {!user.image_url && `${user.login[0]}`}
    </div>
  );
};

export default Avatar;
