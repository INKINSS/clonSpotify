import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useTabsStore from "@/stores/useTabsStore";

const Header = () => {
  const { setActiveTab } = useTabsStore();

  return (
    <header className="flex">
      <Avatar>
        <AvatarImage src="/src/assets/iconProfile.webp" />
        <AvatarFallback>IK</AvatarFallback>
      </Avatar>
      <div>
        <Tabs defaultValue="inicio" className="w-[400px]">
          <TabsList className="bg-transparent space-x-2">
            <TabsTrigger
              className="rounded-full data-[state=active]:shadow-none data-[state=active]:bg-greenLight px-4 py-2 bg-grayLight text-customWhite font-normal"
              value="inicio"
              onClick={() => setActiveTab("inicio")}
            >
              Todas
            </TabsTrigger>
            <TabsTrigger
              className="rounded-full px-4 py-2 data-[state=active]:shadow-none data-[state=active]:bg-greenLight bg-grayLight text-customWhite font-normal"
              value="musica"
            >
              Música
            </TabsTrigger>
            <TabsTrigger
              className="rounded-full px-4 py-2 data-[state=active]:shadow-none data-[state=active]:bg-greenLight bg-grayLight text-customWhite font-normal"
              value="premium"
              onClick={() => setActiveTab("premium")}
            >
              Podcast
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default Header;
