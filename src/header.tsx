type props = {
  day: string;
};

const Header = ({ day }: props) => {
  return <th className="border text-center">{day}</th>;
};

export default Header;
