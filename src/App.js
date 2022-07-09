import './App.css';

import Card from './components/Card';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="container">
      <h2>Register</h2>
      <Card>
        <RegistrationForm />
      </Card>
    </div>
  );
}

export default App;
