type props = {
  day: string;
};

const Header = ({ day }: props) => {
  return <th className="text-center border">{day}</th>;
};

export default Header;
