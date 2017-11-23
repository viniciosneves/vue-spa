import { routes as dashboard } from '@/modules/dashboard';
import { routes as auth } from '@/modules/auth';

const baseroute = [
  { path: '/', redirect: '/dashboard' },
];

export default [...baseroute, ...auth, ...dashboard];
