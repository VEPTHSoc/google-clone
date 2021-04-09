function Avatar(props) {
  return (
    <img
      loading="lazy"
      src={props.url}
      alt="profile"
      className="h-10 rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110 "
    />
  );
}

export default Avatar;
