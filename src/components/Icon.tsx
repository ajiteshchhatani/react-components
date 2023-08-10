interface IconPropsType {
  id: string;
  [key: string]: unknown;
}

const Icon = ({ id, ...svgProps }: IconPropsType) => {
  return (
    <svg {...svgProps}>
      <use href={`icons.svg#${id}`} />
    </svg>
  );
};

export default Icon;
