import {DevicesOutlined, CollectionsBookmarkOutlined, AssuredWorkloadOutlined, MovingOutlined} from "@mui/icons-material";
import {AccountCircleOutlined, LogoutOutlined} from "@mui/icons-material";

export const navMenu = [
    {
        name: 'Каса',
        icon: <DevicesOutlined/>,
        path: '/cash-register',
        id: 1
    }, 
    {
        name: 'Товари',
        icon: <CollectionsBookmarkOutlined/>,
        path: '/product',
        id: 2
    }, 
    {
        name: 'Транзакції',
        icon: <AssuredWorkloadOutlined/>,
        path: '/transaction',
        id: 3
    },
    {
        name: 'Аналітика',
        icon: <MovingOutlined/>,
        path: '/analytic',
        id: 4
    }, 
    {
        name: 'Кабінет',
        icon: <AccountCircleOutlined/>,
        path: '/personal-office',
        id: 5
    }
]