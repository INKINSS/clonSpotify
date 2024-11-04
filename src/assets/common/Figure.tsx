import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
    url: string;
}

export const Figure = ({url}: Props) => {
  return (
    <Avatar className="w-[2.2rem] h-[2.2rem]">
      <AvatarImage className="object-cover w-full h-full" src={url} />
      <AvatarFallback>Ik</AvatarFallback>
    </Avatar>
  );
};
