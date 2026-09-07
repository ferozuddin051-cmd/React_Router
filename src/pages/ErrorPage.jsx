import { useNavigate,useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = () => {
    const error = useRouteError();

    const navigate = useNavigate();
    
    const handleGoBack = () => {
        // navigate("/");
        navigate(-1);
    }
    
    console.log(error);

    if (error.status === 404) {
        return (
            <section className="error-section">
                <div className="error-content">
                    <figure>
                        <img
                            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                            alt="404 - page not found"
                        />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            The page you were looking for can not be found
                        </p>
                        <p className="p-b">
                            Let's get you back on track
                        </p>
                        {/* <NavLink to="/" className="back-home-btn">
                            Back to Home
                        </NavLink> */}
                        <button className="back-home-btn" onClick={handleGoBack}>Go Back</button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="error-section">
            <div className="error-content">
                <figure>
                    <img
                        src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                        alt="Something went wrong"
                    />
                </figure>
                <div className="text-center">
                    <p className="p-a">Something went wrong</p>
                    <p className="p-b">Please try again later</p>
                    
                    {/* <NavLink to="/" className="back-home-btn">
                        Back to Home
                    </NavLink> */}

                    <button className="back-home-btn" onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </section>
    );
};