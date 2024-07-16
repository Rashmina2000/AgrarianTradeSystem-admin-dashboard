  import {
    Card,
    CardBody,
    Typography,
    Avatar
  } from "@material-tailwind/react";
  import React, { useEffect, useState } from 'react';
  import ViewCourierDetails from './ViewCourierDetails';
  import AdminService from "@/services/apiServics";

  export function Tables() {
    const [authorsTableData, setAuthorsTableData] = useState([]);
    const [isView, setIsView] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [nic, setNic] = useState("");
    const [telephone, setTelephone] = useState("");
    const [addL1, setAddL1] = useState("");
    const [addL2, setAddL2] = useState("");
    const [addL3, setAddL3] = useState("");
    const [vehicleNo, setVehicleNo] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [vehicleImg, setVehicleImg] = useState("");
    const [licenseImg, setLicenseImg] = useState("");

    // Get new couriers from database -----------------------
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await AdminService.getNewCouriers();
          setAuthorsTableData(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
      <div>
        {isView && 
          <ViewCourierDetails fname={fname} lname={lname} email={email} username={username} nic={nic} phoneNumber={telephone} profileImg={profileImg} addL1={addL1} addL2={addL2} addL3={addL3} vehicleNo={vehicleNo} vehicleImg={vehicleImg} licenseImg={licenseImg} NewUsers={true}/>
        }
        {!isView &&
          <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["User", "Name", "Vehicle no", "City", ""].map((el) => (
                        <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                            >
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {authorsTableData.map(
                      ({ profileImg, firstName, lastName, email, userName, phoneNumber, nic, vehicleNo, addL1, addL2, addL3, vehicleImg, licenseImg }, key) => {
                        const className = `py-3 px-5 ${
                          key === authorsTableData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                        }`;
                        
                        return (
                          <tr key={email}>
                            <td className={className}>
                              <div className="flex items-center gap-4">
                                <Avatar src={`https://syntecblobstorage.blob.core.windows.net/profilepic/${profileImg}`} alt={email} size="sm" variant="rounded" />
                                <div>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold"
                                    >
                                    {userName}
                                  </Typography>
                                  <Typography className="text-xs font-normal text-blue-gray-500">
                                    {email}
                                  </Typography>
                                </div>
                              </div>
                            </td>
                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {firstName}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {lastName}
                              </Typography>
                            </td>
                            <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                                {vehicleNo}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {addL3}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                as="a"
                                onClick={()=>{
                                  setEmail(email);
                                  setFname(firstName);
                                  setLname(lastName);
                                  setTelephone(phoneNumber);
                                  setUsername(userName);
                                  setNic(nic);
                                  setAddL1(addL1);
                                  setAddL2(addL2);
                                  setAddL3(addL3);
                                  setVehicleNo(vehicleNo);
                                  setProfileImg(profileImg);
                                  setVehicleImg(vehicleImg);
                                  setLicenseImg(licenseImg);
                                  setIsView(true)
                                }}
                                className="py-1 px-3 text-[11px] font-medium w-fit bg-green-600 text-gray-100 rounded-lg hover:cursor-pointer"
                                >
                                View
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
        }
      </div>
    );
  }
  
  export default Tables;
  