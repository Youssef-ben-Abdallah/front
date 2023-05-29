import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Serv = ({ service }) => {
    const style = {
        height: "100%"
    }
    const router = useRouter();
    const { data } = useSession();
    return (    
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            key={service?.service}
        >
            <div className='card ' style={style}>
                <div >
                    <center>
                        <center style={{ padding: 25 }}>{service?.SubCategoryID?.nomSubCategory}</center>
                    </center>
                    <center >
                        <Link href={`/services_Lists/${service._id}`}>
                            <h5 style={{ padding: 10 }}>{service.name}</h5>
                        </Link>
                    </center>
                    <center>
                        <h5 >${service.rate}</h5>
                    </center>
                </div>
                <center>
                    <span  >Min : ${service.min}</span>
                    <br></br>
                    <span  >Max : ${service.max}</span>
                </center>

                <section>
                    <center>
                    {data?.user ? (<>
                        <button style={{ "border-radius": "7%", width: 100, margin: 40 }}>
                            <Link href={`/order`}>
                                Order
                            </Link>
                        </button>
                        </>
                        ) : <button style={{ "border-radius": "7%", width: 100, margin: 40 }}  onClick={() =>
                            router.push('/login')}> Login </button>
                        }
                        
                    </center>
                </section>
            </div>
        </motion.div>
    )
}

export default Serv