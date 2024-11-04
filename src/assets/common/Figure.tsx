import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
    url: string;
}

export const Figure = ({url}: Props) => {
  return (
    <Avatar>
      <AvatarImage className="object-cover" src={url} />
      <AvatarFallback>Ik</AvatarFallback>
    </Avatar>
  );
};
