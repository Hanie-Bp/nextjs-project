const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-4 bg-gray-300">
        <ul className="flex justify-evenly w-56">
          <li>users</li>
          <li>posts</li>
          <li>recipes</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
