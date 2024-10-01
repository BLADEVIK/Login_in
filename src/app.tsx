import React from 'react';
import AuthForm from './components/AuthForm';
import { userStore } from './store/UserStore';
import { observer } from 'mobx-react-lite';

const App: React.FC = observer(() => {
    return (
        <div className="app">
            {userStore.user ? (
                <div>
                    <h1>Добро пожаловать, {userStore.user}</h1>
                    <button onClick={() => userStore.logout()}>Выйти</button>
                </div>
            ) : (
                <AuthForm />
            )}
        </div>
    );
});

export default App;