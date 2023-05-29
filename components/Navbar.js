"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AllOutIcon from '@mui/icons-material/AllOut';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import FaceIcon from '@mui/icons-material/Face';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { useSession, signOut } from 'next-auth/react';
function Navbar() {
    const router = useRouter();

    const { data } = useSession();

    const [onTop, setOnTop] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    const handleScroll = () => {
        if (window.pageYOffset === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    }
    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                <Button onClick={() => router.push('/')} className="logo">
                                   
                                    <img style={{ "maxWidth": "120px" }} src='https://firebasestorage.googleapis.com/v0/b/smma-4a10e.appspot.com/o/122.png?alt=media&token=a7bca54e-58e3-4598-a087-3e8a3a3ea153'/>

                                </Button>


                                <ul className="nav">
                                    <Button   style={{ "color": "white" }} onClick={() => router.push('/')}> Home </Button>
                                    <Button   style={{ "color": "white" }} onClick={() => router.push('/services_Lists')}> Services</Button>
                                    <Button   style={{ "color": "white" }} onClick={() => router.push('/about')}> About </Button>
                                    {data?.user ? (<>
                                        <Button   style={{ "color": "white" }}  onClick={() => router.push('/order')}>Order</Button>
                                        <Button  style={{ "color": "white" }} >
                                            {(data?.user.name).charAt(0).toUpperCase() + (data?.user.name).slice(1)}
                                        </Button>
                                        {" "}
                                        <Button   style={{ "color": "white" }} onClick={() =>  signOut()}> Logout </Button>

                                    </>
                                    ) :
                                        <>
                                            <Button style={{ "color": "white" }}   onClick={() =>
                                                router.push('/login')}> Login </Button>
                                           <Button style={{ "color": "white" }}   onClick={() =>
                                                router.push('/register')}>Register </Button>
                                        </>
                                    }
                                   
                                   {data?.user.name == "Youssef" ? (<>
                                        <Button style={{ "color": "white" }} onClick={() => router.push('/Dashboard')}>Dashboard</Button>
                                    </>
                                    ) : <></> }
                                </ul>
                               

                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Navbar; 