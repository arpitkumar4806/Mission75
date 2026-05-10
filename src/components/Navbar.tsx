const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-12 w-[80%] px-4 py-2 mx-auto flex items-center justify-between rounded-full bg-white/30 backdrop-blur-md border-b border-white/20">
      <div className="font-bold">
        <span>Mission</span>
        <span className="text-blue-600">75</span>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>Docs</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
