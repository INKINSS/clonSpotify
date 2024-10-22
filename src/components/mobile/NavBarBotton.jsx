import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavBarBotton = () => {
    
  return (
    <main className="fixed bottom-0 w-full">
      <Tabs defaultValue="inicio" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="inicio">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <div className="fixed top-0">
          <TabsContent value="inicio">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </div>
      </Tabs>
    </main>
  );
};

export default NavBarBotton;
