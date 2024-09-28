import { 
	WelcomeContainer,
	WelcomeMessage,
	SubHeading
} from '../styles/welcome';

const Welcome = () => {
  return (
    <WelcomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <WelcomeMessage
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to the Application!
      </WelcomeMessage>
      <SubHeading
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Your journey starts here.
      </SubHeading>
    </WelcomeContainer>
  );
};

export default Welcome;