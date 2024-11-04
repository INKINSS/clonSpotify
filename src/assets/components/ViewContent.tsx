import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Figure } from "../common/Figure";
import { ViewPrincipal } from "../views/mobile/ViewPrincipal";
import { ViewPodcast } from "../views/mobile/ViewPodcast";

export const ViewContent = () => {
  return (
    <section className="mt-5">
      <Tabs defaultValue="inicio">
        <div className="flex mx-4 space-x-3">
          <Figure url="/src/assets/resources/chowderProfile.webp" />
          <TabsList className="space-x-2">
            <TabsTrigger className="data-[state=active]:bg-greenCustom data-[state=active]:text-black text-black data-[state=inactive]:bg-hoverGrayCard data-[state=inactive]:text-white rounded-3xl px-4 py-[.5rem] text-[.9rem]"  value="inicio">Todas</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-greenCustom data-[state=active]:text-black data-[state=inactive]:bg-hoverGrayCard data-[state=inactive]:text-white rounded-3xl px-4 py-[.5rem] text-[.9rem]"  value="podcast">Podcast</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="mt-6" value="inicio">
          <ViewPrincipal />
        </TabsContent>
        <TabsContent className="mt-6" value="podcast">
          <ViewPodcast />
        </TabsContent>
      </Tabs>
    </section>
  );
};