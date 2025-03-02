import LoginLayout from '@/layout/auth/login-layout'

import URLS from './urls'

import Login from '@/pages/auth/login'
import NotAuthorized from '@/pages/auth/not-authorized'
import EventsList from '@/pages/events/events-list'
import OTPAuth from '@/pages/auth/OTP_auth'
import EventDetail from '@/pages/events/event-detail'
import EventRegistration from '@/pages/events/event-registration'
import NewEvent from '@/pages/events/new-event'

const publicRoutes = [
    {path: '/', element: Login, Layout: LoginLayout},
    // {path: URLS.MANAGE_EVENTS, element: EventsList},
    {path: URLS.EVENT_DETAILS, element: EventDetail},
    {path: URLS.EVENT_REGISTRATION, element: EventRegistration},
    {path: URLS.JOINED_EVENTS, element: EventsList},
    {path: URLS.NEW_EVENT, element: NewEvent},
    {path: '/not-authorized', element: NotAuthorized, Layout: LoginLayout},
    {path: '/OTP', element: OTPAuth, Layout: LoginLayout},
]

const privateRoutes = [
    {path: URLS.MANAGE_EVENTS, element: EventsList, roles: ['LCD']},
]

export { publicRoutes, privateRoutes }