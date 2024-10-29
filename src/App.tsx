import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/Landing.tsx";
import GlobalLayout from "./layout/global.tsx";
import "../tailwind.css";
import LoginPage from "./pages/Login.tsx";
import AuthLayout from "./layout/auth.tsx";
import RegisterPage from "./pages/Register.tsx";

// tanstack query
const queryClient = new QueryClient();

// apollo for graphQL
const client = new ApolloClient({
  uri: "http://localhost:8080/product/graphql", // graphql server url
  cache: new InMemoryCache(),
});

// router
const routes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  // 하위에 루트 추가
];

const authRoutes: RouteObject[] = [
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: routes,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: authRoutes,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <RouterProvider router={router}></RouterProvider>
      </ApolloProvider>
    </QueryClientProvider>
  </StrictMode>
);
