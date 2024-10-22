import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header>
      <Avatar>
        <AvatarImage src="/src/assets/iconProfile.webp" />
        <AvatarFallback>IK</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
