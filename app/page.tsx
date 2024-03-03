import "@/styles/style.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormContainer from "@/app/content/form";

export default function Home() {
  return (
    <main>
      <div className="content">
        <h2 className="text-4xl font-semibold">Settings</h2>
        <Tabs
          defaultValue="Your Profile"
          className=" sm:w-[100%] md:w-[80%] lg:w-[50%] mt-8"
        >
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 text-sm">
            <TabsTrigger value="Your Profile">Your Profile</TabsTrigger>
            <TabsTrigger value="Company Info">Company Info</TabsTrigger>
            <TabsTrigger value="Manage Seats">Manage Seats</TabsTrigger>
            <TabsTrigger className="hidden md:block" value="Do not Contact">
              Do not Contact
            </TabsTrigger>
            <TabsTrigger className="hidden md:block" value="Integrations">
              Integrations
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="account"></TabsContent> */}
          {/* <TabsContent value="account"></TabsContent> */}
        </Tabs>
        <FormContainer />
      </div>
    </main>
  );
}
