// import
import React, {Component} from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
    HomeIcon,
    StatsIcon,
    CreditIcon,
    PersonIcon,
    DocumentIcon,
    RocketIcon,
    SupportIcon,
} from "components/Icons/Icons";
import GenAI from "./views/Dashboard/GenAI";
import Tab2 from "./views/Dashboard/Tab2";
import Tab3 from "./views/Dashboard/Tab3";
import Test from "./views/Dashboard/Test";

var dashRoutes = [
    {
        path: "/dashboard",
        name: "Models",
        icon: <HomeIcon color='inherit'/>,
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/Tab2",
        name: "Inputs",
        icon: <CreditIcon color='inherit'/>,
        component: Tab2,
        layout: "/admin",
    },
    {
        path: "/Tab3",
        name: "Forecasts",
        icon: <CreditIcon color='inherit'/>,
        component: Tab3,
        layout: "/admin",
    },
    {
        path: "/GenAi",
        name: "GenAi",
        icon: <CreditIcon color='inherit'/>,
        component: GenAI,
        layout: "/admin",
    },
    {
        path: "/Test",
        name: "Test",
        icon: <CreditIcon color='inherit'/>,
        component: Test,
        layout: "/admin",
    },
];
export default dashRoutes;
