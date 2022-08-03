import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/default-layout';
import { History } from './pages/history';
import { Timer } from './pages/timer';

export function Routers() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Timer />} />
        <Route path='/history' element={<History />} />
      </Route>
    </Routes>
  );
}
