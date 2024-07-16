import React, { useRef, useState } from 'react';
import AdminService from '../../../services/apiServics.js';
import FormLabel from './FormLable.jsx';
import { SpinnerColors } from './Spinner.jsx';
import { MdOutlineErrorOutline } from "react-icons/md";

export default function ViewNewFarmerDetails({fname, lname, email, username, nic, phoneNumber, profileImg, addL1, addL2, addL3, vehicleNo, vehicleImg, licenseImg, NewUsers}) {
  const reasonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReasonEmpty, setIsReasonEmpty] = useState(false);

  // Function for reject a courier -----------------------

  const reject = async()=>{
    if(reasonRef.current.value==""){
        setIsReasonEmpty(true);
        return
    }
    const data={
        email: email,
        reason: reasonRef.current.value
    }
    try{
        setIsReasonEmpty(false);
        setIsLoading(true);
        const response = await AdminService.rejectCourier(data);
        setIsLoading(false);
        window.location.reload();
        console.log(response);
    }
    catch(error){
        setIsLoading(false);
        console.error('Error:', error);
    }
  }

  // Function for approve a courier ---------------------------
  
  const approve = async()=>{
    try{
        setIsLoading(true);
        const response = await AdminService.approveCourier(email);
        setIsLoading(false);
        window.location.reload();
        console.log(response);
    }
    catch (error){
        setIsLoading(false);
        console.error('Error:', error);
    }
    
  }

  return (
    <div>
        {isLoading && <SpinnerColors/>}
        <form className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Name</FormLabel>
                                <div className="w-full p-3 md:w-1/3">
                                    <input
                                        className="w-full dark:bg-gray-800 dark:border-gray-800 px-4 dark:placeholder-gray-500 dark:text-gray-400 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={fname} readOnly/>
                                </div>
                                <div className="w-full p-3 md:w-1/3">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={lname} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>User name</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={username}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Email address</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="email" value={email}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>NIC number</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={nic} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Phone number</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={phoneNumber} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Address line 1</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={addL1} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Address line 2</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={addL2} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Address line 3</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={addL3} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Vehicle registration number</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <input
                                        className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                        type="text" value={vehicleNo} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Profile photo</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <div className="flex items-center justify-center w-full">
                                        
                                        <img src={`https://syntecblobstorage.blob.core.windows.net/profilepic/${profileImg}`}/>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Vehicle photo</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <div className="flex items-center justify-center w-full">
                                        <img src={`https://syntecblobstorage.blob.core.windows.net/vehicleimage/${vehicleImg}`}/>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-6 border-b border-gray-500 dark:border-gray-800">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <FormLabel>Driving license photo</FormLabel>
                                <div className="w-full p-3 md:flex-1">
                                    <div className="flex items-center justify-center w-full">
                                        <img src={`https://syntecblobstorage.blob.core.windows.net/nicimage/${licenseImg}`}/>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {NewUsers &&
                        <>
                            <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <FormLabel>Reason for Rejecting</FormLabel>
                                        <div className="w-full p-3 md:flex-1">
                                            <textarea
                                                className=" h-52 w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200" ref={reasonRef}
                                                />
                                            {isReasonEmpty &&
                                                <p className="mt-4 flex text-base font-semibold text-red-400 dark:text-gray-400">
                                                    <MdOutlineErrorOutline size={20}/> &nbsp;Must fill the reason for rejecting the application.
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap -m-1.5">
                                <div className="w-full md:w-auto p-1.5">
                                    <input type='submit' value={"Approve"}
                                        className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-primary rounded-md hover:bg-green-800 active:ring-2 active:ring-green-800 active:shadow-xl" onClick={approve}>
                                    </input>
                                </div>
                                <div className="w-full md:w-auto p-1.5">
                                    <input type='button' value={"Reject"}
                                        className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-500 border border-primary rounded-md hover:bg-red-800 active:ring-2 active:ring-green-800 active:shadow-xl" onClick={reject}>
                                    </input>
                                </div>
                                <div className="w-full md:w-auto p-1.5">
                                    <input type='reset' value={"Cancel"}
                                        className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium hover:cursor-pointer text-gray-500 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-100 active:shadow-xl active:ring-2 active:ring-gray-300" onClick={()=>{window.location.reload()}}>
                                    </input>
                                </div>
                            </div>
                        </>
                    }
                    {!NewUsers &&
                        <div className="flex pt-6 flex-wrap -m-1.5">
                            <div className="w-full md:w-auto p-1.5">
                                <input type='reset' value={"Cancel"}
                                    className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium hover:cursor-pointer text-gray-500 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-100 active:shadow-xl active:ring-2 active:ring-gray-300" onClick={()=>{window.location.reload()}}>
                                </input>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </form>
    </div>
  )
}
