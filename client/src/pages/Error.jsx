import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/404.svg'

function Error() {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="not found" />
                    <h3>Oops! page not found</h3>
                    <p>We can't seem to find the page you are looking for</p>
                    <Link to="/dashboard-student">Back Home</Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <div>
                <h3>something went wrong</h3>
            </div>
        </Wrapper>
    );
}
export default Error