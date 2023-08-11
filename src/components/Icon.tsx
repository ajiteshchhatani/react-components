interface IconPropsType {
  id: string;
  [key: string]: unknown;
}

const Icon = ({ id, ...svgProps }: IconPropsType) => {
  return (
    <svg {...svgProps} data-testid="icon_svg">
      <use href={`icons.svg#${id}`} />
    </svg>
  );
};

export default Icon;
