import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../authentication/AuthProvider";

const Signup = () => {
    const { handleRegister, setUser, setLoading, handleUpdateUserData } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();


    const handleEmailRegister = (data) => {
        const { name, photo, email, password } = data;
        console.log(email, password);

        handleRegister(email, password)
            .then((res) => {
                toast.success('Registerd succesfully')
                setUser({ ...res?.user, photoURL: photo, displayName: name })
                handleUpdateUserData(name, photo)
                    .then(() => { })
                    .catch(() => { })
                navigate('/')
            })
            .catch(() => {
                toast.error("Register Failed")
                setLoading(false)
            })
    }
    return (
        <div className="">
            <div className="container mx-auto px-5">
                <div className="w-full py-10">
                    <div className="w-full bg-white mt-5 rounded-md">
                        <h1 className="text-3xl font-semibold text-center">New Here? Signup Now</h1>
                        <form onSubmit={handleSubmit(handleEmailRegister)} className="mt-10 w-full md:w-[70%] lg:w-[50%] mx-auto">
                            <input className="block w-full my-3 px-5 py-2 border rounded-md border-gray-200" type="text" placeholder="Full Name" name="name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}

                            <input className="block w-full my-3 px-5 py-2 border rounded-md border-gray-200" type="text" placeholder="Photo URL" name="photo" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-500">This field is required</span>}

                            <input className="block w-full my-3 px-5 py-2 border rounded-md border-gray-200" type="email" placeholder="Email" name="email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <input className="block w-full my-3 px-5 py-2 border rounded-md border-gray-200" type="password" placeholder="Password" name="password" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div className="flex justify-center items-center mt-5">
                                <input className="bg-blue-600 py-[6px] px-5 rounded-md font-medium hover:bg-transparent hover:text-blue-600 border-2 border-transparent hover:border-blue-600 duration-300 text-white text-sm cursor-pointer" type="submit" value={'Register'} />
                            </div>
                        </form>
                        <h1 className="text-center mt-3 font-medium">Already have an account? <Link to={'/signin'} className="font-bold hover:text-blue-600 duration-200">Signin</Link> Now.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;