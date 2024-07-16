import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import NewFarmerTable from "./NewFarmerTable";
import ApprovedFarmerTable from "./ApprovedFarmerTable"
   
  export function FarmerTabs() {
    const data = [
      {
        label: "New Farmers",
        value: "html",
        desc: <NewFarmerTable/>,
      },
      {
        label: "Approved Farmers",
        value: "react",
        desc: <ApprovedFarmerTable/>,
      }
    ];
   
    return (
      <Tabs value="html" className="mt-5">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }