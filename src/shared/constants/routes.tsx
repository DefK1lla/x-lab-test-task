import { Route } from 'shared/types/route'

import { ReactComponent as MainIcon } from 'assets/icons/routes/main.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/routes/search.svg'
import { ReactComponent as TablesIcon } from 'assets/icons/routes/tables.svg'
import { ReactComponent as CalendarIcon } from 'assets/icons/routes/calendar.svg'
import { ReactComponent as MapsIcon } from 'assets/icons/routes/maps.svg'
import { ReactComponent as WidgetsIcon } from 'assets/icons/routes/widgets.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/routes/settings.svg'
import { ReactComponent as SettingsProfileIcon } from 'assets/icons/routes/settings.profile.svg'
import { ReactComponent as SettingsFinancesIcon } from 'assets/icons/routes/settings.finances.svg'
import { ReactComponent as ExitIcon } from 'assets/icons/routes/exit.svg'
import { AddressSearchPage, MainPage } from 'pages'

const ROUTES: Route[] = [
  {
    label: 'Главная',
    href: '/',
    icon: <MainIcon />,
    element: <MainPage />,
  },
  {
    label: 'Поиск адресов',
    href: '/address',
    icon: <SearchIcon />,
    element: <AddressSearchPage />,
  },
  {
    label: 'Таблицы',
    href: '/tables',
    icon: <TablesIcon />,
    element: null,
  },
  {
    label: 'Календарь',
    href: '/calendar',
    icon: <CalendarIcon />,
    element: null,
  },
  {
    label: 'Карты',
    href: '/maps',
    icon: <MapsIcon />,
    element: null,
  },
  {
    label: 'Виджеты',
    href: '/widgets',
    icon: <WidgetsIcon />,
    element: null,
  },
  {
    label: 'Настройки',
    icon: <SettingsIcon />,
    element: null,
    items: [
      {
        label: 'Настройки профиля',
        href: '/settings/profile',
        icon: <SettingsProfileIcon />,
        element: null,
      },
      {
        label: 'Управление финансами',
        href: '/settings/finances',
        icon: <SettingsFinancesIcon />,
        element: null,
      },
    ],
  },
  {
    label: 'Выход',
    href: '/exit',
    icon: <ExitIcon />,
    element: null,
  },
]

export default ROUTES
