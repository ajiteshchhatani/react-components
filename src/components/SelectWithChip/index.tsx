import { useEffect, useRef, useState } from "react";

const SKILL_OPTIONS: { label: string; value: string }[] = [
  {
    label: "HTML",
    value: "html",
  },
  {
    label: "CSS",
    value: "css",
  },
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "React",
    value: "react",
  },
  {
    label: "TypeScript",
    value: "typescript",
  },
  {
    label: "TailwindCSS",
    value: "tailwindcss",
  },
];

const SelectWithChip = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[] | []>([]);
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideMenu = (e: MouseEvent) => {
      // If clicked inside main container div the options menu should toggle their visibility
      // If clicked outside of bounds of menu anywhere in document, menu should close
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        e.stopPropagation();
        setOptionsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [menuRef]);

  const handleOptionsMenuClick = () => {
    setOptionsMenuOpen(!optionsMenuOpen);
  };

  const handleOptionsItemsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // When any skill is selected from options list, don't close menu as multiple selections
    setOptionsMenuOpen(true);
    setSelectedSkills([...selectedSkills, e.currentTarget.innerHTML]);
  };

  return (
    <label className="block">
      Skills:
      <div
        className="w-1/3 border border-red-700 min-h-[50px] h-fit rounded-sm relative"
        id="optionsMenuContainer"
        ref={menuRef}
        onClick={handleOptionsMenuClick}
      >
        {selectedSkills.length > 0 ? (
          <div className="flex flex-wrap p-2">
            {selectedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-center items-center border bg-gray-500 px-2 py-1 rounded-md gap-2"
              >
                <p>{skill}</p>
                <button
                  title="Remove skill"
                  onClick={(e) => e.stopPropagation()}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        ) : null}
        {optionsMenuOpen ? (
          <ul
            id="optionsMenu"
            className="list-none border border-t-0 absolute top-[50px] w-full"
          >
            {SKILL_OPTIONS.map((skill) => (
              <li
                key={skill.value}
                value={skill.value}
                onClick={handleOptionsItemsClick}
                className="hover:bg-blue-400 p-2"
              >
                {skill.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </label>
  );
};

export default SelectWithChip;
