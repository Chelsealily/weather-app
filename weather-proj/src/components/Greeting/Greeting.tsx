import "./Greeting.scss";

const getGreetingMessage = (hour: number): string => {
  if (hour < 12) {
    return "Good Morning! 🌅";
  }

  if (hour < 18) {
    return "Good Afternoon! 👋🏼";
  }

  return "Good Evening! 🌙";
};

const Greeting = () => {
  const currentHour = new Date().getHours();
  const greetingMessage = getGreetingMessage(currentHour);

  return (
    <div>
      <h3>{greetingMessage}</h3>
    </div>
  );
};

export default Greeting;
