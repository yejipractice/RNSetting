import React, {createContext, useState} from 'react';

// 임시
const BasicContext = createContext({
    userId: "id",
    setUserId: () => {},
    password: "pw",
    setPassword: () => {},
});

const BasicProvider = ({children}) => {
    const [userId, setUserId] = useState("id");
    const [password, setPassword] = useState("pw");

    const value = {
        userId,
        password,
        setUserId, 
        setPassword,
    };

    return <BasicContext.Provider value={value}>
        {children}
    </BasicContext.Provider>
};

const BasicConsumer = BasicContext.Consumer;

export {BasicConsumer, BasicProvider, BasicContext};