import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#f7f7f7] w-1/6">
      <nav className="flex flex-col" role="navigation">
        <ul className="flex flex-col gap-2">
          <Link className="px-4 py-2 hover:bg-[#e3e3e3]" to="/" role="link">
            Accordion
          </Link>
          <Link
            className="px-4 py-2 hover:bg-[#e3e3e3]"
            to="star_rating"
            role="link"
          >
            Star Rating
          </Link>
          <Link
            className="px-4 py-2 hover:bg-[#e3e3e3]"
            role="link"
            to="multi_step_form"
          >
            Multi Step Form
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
