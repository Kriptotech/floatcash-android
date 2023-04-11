import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login/Login.jsx";
import { TabRoutes } from "./TabRoutes.js";
import { Sidebar } from "../screens/Sidebar/index.jsx";
import { RegisterAgent } from "../screens/RegisterAgent/index.jsx";
import { SeeAgents } from "../screens/SeeAgents/index.jsx";
import { Agent } from "../screens/Agent/index.jsx";
import { RegisterComition } from "../screens/RegisterComition/index.jsx";
import { RequestMoney } from "../screens/RequestMoney/index.jsx";
import { Comitions } from "../screens/Comitions/index.jsx";
import { Comition } from "../screens/Comition/index.jsx";
import { NotConfirmedComitions } from "../screens/NotConfirmedComitions/index.jsx";
import { NotConfirmedComition } from "../screens/NotConfirmedComition/index.jsx";
import { InitialScreen } from "../screens/InitialScreen/index.jsx";
import { NotConfirmedMoneyRequests } from "../screens/NotConfirmedMoneyRequests/index.jsx";
import { NotConfirmedMoneyRequest } from "../screens/NotConfirmedMoneyRequest/index.jsx";
import { ConfirmedMoneyRequests } from "../screens/ConfirmedMoneyRequests/index.jsx";
import { ConfirmedMoneyRequest } from "../screens/ConfirmedMoneyRequest/index.jsx";
import { RegisterAgentSupervisor } from "../screens/RegisterAgentSupervisor/index.jsx";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="initial_screen" component={InitialScreen} />

            <Stack.Screen name="login" component={Login} />

            <Stack.Screen name="first_tab_nav" component={TabRoutes} />

            <Stack.Screen name="register_agent" component={RegisterAgent} />

            <Stack.Screen
                name="register_agent_supervisor"
                component={RegisterAgentSupervisor}
            />

            <Stack.Screen name="sidebar" component={Sidebar} />

            <Stack.Screen name="see_agents" component={SeeAgents} />

            <Stack.Screen name="agent" component={Agent} />

            <Stack.Screen
                name="register_comition"
                component={RegisterComition}
            />

            <Stack.Screen name="request_money" component={RequestMoney} />

            <Stack.Screen name="comitions" component={Comitions} />

            <Stack.Screen name="comition" component={Comition} />

            <Stack.Screen
                name="not_confirmed_comitions"
                component={NotConfirmedComitions}
            />

            <Stack.Screen
                name="not_confirmed_comition"
                component={NotConfirmedComition}
            />
            <Stack.Screen
                name="not_confirmed_money_requests"
                component={NotConfirmedMoneyRequests}
            />
            <Stack.Screen
                name="not_confirmed_money_request"
                component={NotConfirmedMoneyRequest}
            />
            <Stack.Screen
                name="confirmed_money_requests"
                component={ConfirmedMoneyRequests}
            />
            <Stack.Screen
                name="confirmed_money_request"
                component={ConfirmedMoneyRequest}
            />
        </Stack.Navigator>
    );
}
