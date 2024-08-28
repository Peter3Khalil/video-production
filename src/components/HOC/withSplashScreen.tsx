import SplashScreen from '@/components/splash-screen';

const withSplashScreen = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  const WithSplashScreen = (props: P) => {
    return (
      <>
        <SplashScreen />
        <Component {...props} />
      </>
    );
  };

  return WithSplashScreen;
};

export default withSplashScreen;
