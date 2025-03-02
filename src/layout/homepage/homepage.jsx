import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import PropTypes from "prop-types";

import { Toaster } from "@/components/ui/toaster"
import EventDetailNavbar from "@/components/navbar/event-details-navbar/event-detail-navbar";
import URLS from "@/routes/urls";

function HomePage( { children } ) {
    const path = window.location.pathname;

    return ( 
    <div className="flex flex-wrap min-h-screen">
        <SideBar />
        <div className="md:w-1/5"></div>
        <div className="md:w-4/5 pb-7">
            <Navbar />
            <div className="flex-grow m-5 md:mx-12 md:my-7">
                {
                    (path === URLS.EVENT_DETAILS ||
                    path === URLS.EVENT_REGISTRATION ||
                    path === URLS.JOINED_EVENTS)
                    && <EventDetailNavbar />
                }
                {children}
            </div>
            <Toaster />
        </div>
    </div> 
    );
}

HomePage.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default HomePage;