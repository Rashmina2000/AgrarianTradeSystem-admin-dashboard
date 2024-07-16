import { useRef, useState } from 'react';
import { SpinnerColors } from '../dashboard/component/Spinner';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import AuthService from '../../services/apiServics';
import { jwtDecode } from 'jwt-decode';

function Login(){
    const [visibility, setVisibility]=useState(false);
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const passwordRef = useRef(null);
    const [logError, setLogError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Email or password is incorrect");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        try{
            setIsLoading(true);
            const response = await AuthService.login(data);
            console.log("Server response: ", response);
            sessionStorage.setItem('jwtToken', response.accessToken);
            setLogError(false);
            const token = sessionStorage.getItem('jwtToken');
            const decodedData = jwtDecode(token);
            setIsLoading(false);
            if(decodedData.role=="ATSAdmin"){
                navigate('/dashboard/farmers');
            }
        }
        catch (error){
            setIsLoading(false);
            if(error=="Email or password is incorrect"){
                setErrorMsg("Email or password is incorrect");
            }
            setLogError(true);
            console.error("Error: ", error);
        }
        
    }


    return(
        <>
            {isLoading && <SpinnerColors/>}
            <section className=" font-poppins">
                <div className="max-w-6xl px-0 mx-auto lg:px-6">
                    <div className="flex flex-col items-center h-full md:flex-row">
                        <div
                            className="flex items-center justify-center h-screen max-w-full px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
                            <div className="z-10 w-full p-10 bg-gray-100 dark:bg-gray-900 h-100">
                                <h2 className="text-xl font-bold leading-tight mb-7 md:text-3xl dark:text-gray-300">
                                    Admin Login</h2>
                                <form action="" className="mt-6">
                                    <div>
                                        <label for="" className="block text-gray-700 dark:text-gray-300">Email:</label>
                                        <input type="email"
                                            className="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                                            name="" placeholder="Enter your email" ref={emailRef}/>
                                    </div>
                                    <div className="mt-5">
                                        <div>
                                            <label for="" className="text-gray-700 dark:text-gray-300 ">Password:</label>
                                            <div className="relative flex items-center mt-2">
                                                <input type={visibility ? "text" : "password"}
                                                    className="w-full px-4 py-3 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:border dark:border-gray-800 "
                                                    name="" placeholder="Enter password" ref={passwordRef}/>
                                               {visibility? <FaRegEye size={25} onClick={()=> setVisibility(!visibility)} className='absolute right-3 bg-white pl-2 hover:cursor-pointer'/> : <FaRegEyeSlash size={25} onClick={()=> setVisibility(!visibility)}
                                                className='absolute right-3 bg-white pl-2 hover:cursor-pointer'/>} 
                                            </div>
                                        </div>
                                    </div>
                                    {logError && 
                                        <div className="mt-4 flex text-base font-semibold text-red-400 dark:text-gray-400">
                                            <MdOutlineErrorOutline size={20}/> &nbsp; {errorMsg}
                                        </div>
                                    }

                                    
                                    <button
                                        className="w-full px-4 py-3 mt-6 font-semibold text-gray-200 bg-green-500 rounded-lg hover:text-gray-700 hover:bg-green-300 "
                                        type="submit" onClick={handleLogin}>LOGIN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;