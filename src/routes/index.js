// react
import { Suspense, lazy } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';

// components
import LoadingScreen from '../components/LoadingScreen';

// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
import RoleBasedGuard from '../guards/RoleBasedGuard';


const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
      
        {
          element: (
            <GuestGuard>
              <Signin />
            </GuestGuard>
          ),
          index: true,
        },
        {
          path: 'signup',
          element: (
            <GuestGuard>
              <Signup />
            </GuestGuard>
          ),
        },
        {
          path: 'signin',
          element: (
            <GuestGuard>
              <Signup />
            </GuestGuard>
          ),
        },
        { path: 'password', element: <ForgotPassword /> },
      ],
    },
    {
      path: 'user',
      element: (
        <RoleBasedGuard accessibleRoles={['approved']}>
          <DashboardLayout />
        </RoleBasedGuard>
      ),
      children: [
        { element: <Index />, index: true },
        { path: 'mining', element: <MiningTab /> },
        { path: 'deposits', element: <Deposits /> },
        { path: 'account', element: <Accounts /> },
        { path: 'withdrawals', element: <Withdrawal /> },
        { path: 'withdrawals/new', element: <NewWithdrawal /> },
        { path: 'traderoom', element: <TraderRoom /> },
        { path: 'ptraderoom', element: <TraderRoom /> },
        { path: 'deposits/buy', element: <BuyCrypto /> },
        { path: 'deposits/:id', element: <ComfirmDeposit /> },
        { path: 'software/:id', element: <BotDetails /> },
        { path: 'active-softwares', element: <ActiveSoftwares /> },
        { path: 'deposits/crypto', element: <FundAccount /> },
        { path: 'deposits/crypto', element: <FundAccount /> },
        { path: 'deposits/list', element: <AllDeposit /> },
        { path: 'deposits/upload/:id', element: <UploadProof /> },
        { path: 'deposits/crypto/:amount', element: <FundAccount /> },
        { path: 'deposits/pricing', element: <Pricing /> },
        { path: 'deposits/trading', element: <TradingPrice /> },
        { path: 'deposits/mining', element: <MiningPrice /> },
        { path: 'trading/traders', element: <Experts /> },
        { path: 'trading/markets', element: <Market /> },
        { path: 'trading/watchlist', element: <WatchList /> },
        { path: 'account-details', element: <StepTwo /> },
        { path: 'kyc', element: <Identity /> },
        { path: 'auth/profile', element: <Profile /> },
        { path: 'auth/password', element: <ChangePassword /> },
        { path: 'auth/address', element: <UpdateDetails /> },
        { path: 'mining/contracts', element: <MiningsContracts /> },
        { path: 'upload-profile-photo', element: <ProfilePhoto /> },
      ],
    },
    {
      path: 'user',
      element: (
        <AuthGuard accessibleRoles={['approved']}>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: 'signup/step-two', element: <Details /> },
        { path: 'signup/step-three', element: <Verification /> },
        { path: 'signup/step-four', element: <Identity /> },
      ],
    },
    {
      path: '/pages',
      element: <MainLayout />,
      children: [
        { path: 'about-us', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'privacy-policy', element: <Privacy /> },
        { path: 'terms-of-service', element: <TermsOfService /> },
        { path: 'forex-trading', element: <ForexTrading /> },
        { path: 'stocks-trading', element: <StocksTrading /> },
        { path: 'crypto-trading', element: <CryptoTrading /> },
        { path: 'options-trading', element: <OptionsTrading /> },
        { path: 'copy-expert-traders', element: <CopyTrading /> },
        { path: 'about-mining', element: <Mining /> },
        { path: 'bitcoin-mining', element: <BitcoinMining /> },
        { path: 'dogecoin-mining', element: <DcoinMining /> },
      ],
    },
  ]);
}

// pages
const Signin = Loadable(lazy(() => import('../pages/Signin')));
const Signup = Loadable(lazy(() => import('../pages/Signup')));
const ForgotPassword = Loadable(lazy(() => import('../pages/ForgotPassword')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const About = Loadable(lazy(() => import('../pages/AboutUs')));
const Privacy = Loadable(lazy(() => import('../pages/Privacy')));
const ForexTrading = Loadable(lazy(() => import('../pages/ForexTrading')));
const StocksTrading = Loadable(lazy(() => import('../pages/StocksTrading')));
const CryptoTrading = Loadable(lazy(() => import('../pages/CryptoTrading')));
const OptionsTrading = Loadable(lazy(() => import('../pages/OptionsTrading')));
const CopyTrading = Loadable(lazy(() => import('../pages/CopyExperts')));
const Mining = Loadable(lazy(() => import('../pages/Mining')));
const BitcoinMining = Loadable(lazy(() => import('../pages/BitcoinMining')));
const DcoinMining = Loadable(lazy(() => import('../pages/DogecoinMining')));
const Verification = Loadable(lazy(() => import('../pages/Verification')));
const Identity = Loadable(lazy(() => import('../pages/Identity')));
const TermsOfService = Loadable(lazy(() => import('../pages/TermsOfService')));

// dashboard

const Index = Loadable(lazy(() => import('../pages/user/Home')));
const MiningTab = Loadable(lazy(() => import('../pages/user/Mining')));
const Deposits = Loadable(lazy(() => import('../pages/user/Deposits')));
const Accounts = Loadable(lazy(() => import('../pages/user/Account')));
const Withdrawal = Loadable(lazy(() => import('../pages/user/Withdrawal')));
const BuyCrypto = Loadable(lazy(() => import('../pages/user/BuyCrypto')));
const TraderRoom = Loadable(lazy(() => import('../pages/user/TraderRoom')));
const FundAccount = Loadable(lazy(() => import('../pages/user/FundAccount')));
const Experts = Loadable(lazy(() => import('../pages/user/Experts')));
const Market = Loadable(lazy(() => import('../pages/user/Market')));
const WatchList = Loadable(lazy(() => import('../pages/user/WatchList')));
const Pricing = Loadable(lazy(() => import('../pages/user/Pricing')));
const TradingPrice = Loadable(lazy(() => import('../pages/user/TradingPrice')));
const MiningPrice = Loadable(lazy(() => import('../pages/user/MiningPrice')));
const ComfirmDeposit = Loadable(lazy(() => import('../pages/user/ComfirmDeposit')));
const AllDeposit = Loadable(lazy(() => import('../pages/user/AllDeposits')));
const UploadProof = Loadable(lazy(() => import('../pages/user/UploadProof')));
const StepTwo = Loadable(lazy(() => import('../pages/user/StepTwo')));
const NewWithdrawal = Loadable(lazy(() => import('../pages/user/NewWithdrawal')));
const Profile = Loadable(lazy(() => import('../pages/user/Profile')));
const ChangePassword = Loadable(lazy(() => import('../pages/user/ChangePassword')));
const UpdateDetails = Loadable(lazy(() => import('../pages/UpdateDetails')));
const MiningsContracts = Loadable(lazy(() => import('../pages/user/MiningsContracts')));
const ProfilePhoto = Loadable(lazy(() => import('../pages/user/ProfilePhoto')));
const Details = Loadable(lazy(() => import('../pages/user/Details')));
const BotDetails = Loadable(lazy(() => import('../pages/user/BotDetails')));
const ActiveSoftwares = Loadable(lazy(() => import('../pages/user/ActiveBots')));


