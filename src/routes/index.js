import LoginLayout from '@/layout/auth/login-layout'

import URLS from './urls'

import Login from '@/pages/auth/login'
import NotAuthorized from '@/pages/auth/not-authorized'
import EventsList from '@/pages/events/events-list'
import OTPAuth from '@/pages/auth/OTP_auth'
import EventDetail from '@/pages/events/event-detail'
import EventRegistration from '@/pages/events/event-registration'
import NewEvent from '@/pages/events/new-event'
import EventJoinedStudent from '@/pages/events/event-joined-student'
import EditEvent from '@/pages/events/edit-event'
import CommunityScoreList from '@/pages/community_score/score_list'
import ExternalEvent from '@/pages/events/external-event'

const publicRoutes = [
    {path: '/', element: Login, Layout: LoginLayout},
    {path: '/not-authorized', element: NotAuthorized, Layout: LoginLayout},
    {path: '/OTP', element: OTPAuth, Layout: LoginLayout},
]

const privateRoutes = [
    {path: URLS.MANAGE_EVENTS, element: EventsList, roles: ['LCD']},
    {path: URLS.EVENT_DETAILS, element: EventDetail},
    {path: URLS.EVENT_REGISTRATION, element: EventRegistration},
    {path: URLS.JOINED_EVENTS, element: EventJoinedStudent},
    {path: URLS.NEW_EVENT, element: NewEvent},
    {path: URLS.EDIT_EVENT, element: EditEvent},
    {path: URLS.EXTERNAL_ACTIVITIES, element: ExternalEvent},
    {path: URLS.COMMUNITY_SCORE, element: CommunityScoreList},
    {path: URLS.EXCELLENT_STUDENTS, element: EventDetail},
]

export { publicRoutes, privateRoutes }