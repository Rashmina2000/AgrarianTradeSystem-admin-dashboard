import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import NewCourierTable from "./NewCourierTable";
import ApprovedCourierTable from "./ApprovedCourierTable"
   
  export function CourierTabs() {
    const data = [
      {
        label: "New Couriers",
        value: "html",
        desc: <NewCourierTable/>,
      },
      {
        label: "Approved Couriers",
        value: "react",
        desc: <ApprovedCourierTable/>,
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