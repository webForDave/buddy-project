import ReactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './globals.css';
import App from './App';

ReactDom.createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
)