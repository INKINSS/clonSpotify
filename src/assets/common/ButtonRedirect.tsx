import { TabsTrigger } from "@radix-ui/react-tabs";

interface Props {
  label: string;
  value: string;
}

export const ButtonRedirect = ({ label, value }: Props) => {
  return (
    <TabsTrigger className="data-[state=active]:bg-greenCustom data-[state=active]:text-white data-[state=inactive]:bg-hoverGrayCard data-[state=inactive]:text-white rounded-2xl" value={value}>
      {label}
    </TabsTrigger>
  );
};