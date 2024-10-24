import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import Body from "../../views/mobile/Body";
import useTabsStore from "@/stores/useTabsStore";

const NavBarBotton = () => {

  const { activeTab, setActiveTab } = useTabsStore()

  const sizeIcons = "1.6rem";

  return (
    <main className="fixed bottom-0 w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="inicio" className="w-full">
        <TabsList className="w-full h-16 bg-white flex justify-around px-5">
          <TabsTrigger className="flex flex-col" value="inicio">
            <GoHomeFill size={sizeIcons} />
            <p>Inicio</p>
          </TabsTrigger>
          <TabsTrigger className="flex flex-col" value="search">
            <FiSearch size={sizeIcons} />
            <p>Buscar</p>
          </TabsTrigger>
          <TabsTrigger className="flex flex-col" value="library">
            <BiLibrary size={sizeIcons} />
            <p>Tu biblioteca</p>
          </TabsTrigger>
          <TabsTrigger className="flex flex-col" value="premium">
            <FaSpotify size={sizeIcons} />
            <p>Spotify</p>
          </TabsTrigger>
        </TabsList>

        <div className="fixed top-0 w-full items-center flex bg-grayBold py-2">
          <TabsContent className='w-full' value="inicio">
            <Body />
          </TabsContent>
          <TabsContent value="search">Search</TabsContent>
          <TabsContent value="library">Library</TabsContent>
          <TabsContent value="premium">Premium</TabsContent>
        </div>
      </Tabs>
    </main>
  );
};

export default NavBarBotton;
