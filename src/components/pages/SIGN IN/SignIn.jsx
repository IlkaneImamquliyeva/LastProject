import React, { useEffect,useState } from 'react'
import { useTranslation } from "react-i18next";




const SignIn = () => {
    const { t } = useTranslation();
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === 'ilkane@gmail.com' && password === 'ilkane') {
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('userEmail', email);
            setIsLoggedIn(true);
        }
    };


    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    };


    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn) {
            setIsLoggedIn(true);
            const storedEmail = localStorage.getItem('userEmail');
            setEmail(storedEmail);
        }
    }, []);




    return (
        <>
            <div className="login">
                <div className="loginBox ">

                    {isLoggedIn ? (
                        <div className='logout col-12'>
                            <p>{t("language.shopp.Welcome1")} {email} !</p>
                            <button onClick={handleLogout}> {t("language.shopp.Logout")}</button>
                        </div>
                    ):(

                  

               <div className="divlogin col-12">
                     <div className="email">
                        <input type="email" placeholder={t("language.shopp.Email")} value={email} onChange={(e) =>setEmail(e.target.value)} />
                    </div>
                    <div className="password mt-4">
                        <input type="password" placeholder= {t("language.shopp.Password")} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="signin mt-4">
                        <button type='submit' onClick={handleLogin}>{t("language.shopp.SIGNIN")}</button>
                    </div>
               </div>
                      )}
                </div>
            </div>


        </>
    )
}

export default SignIn