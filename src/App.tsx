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

// tanstack query
const queryClient = new QueryClient();

// apollo for graphQL
const client = new ApolloClient({
  uri: "/", // graphql server url
  cache: new InMemoryCache(),
});

// router
const routes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  // 하위에 루트 추가
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: routes,
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
