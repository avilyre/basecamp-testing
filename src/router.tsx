import { createBrowserRouter, RouteObject } from "react-router-dom";

import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { SignUp } from "./pages/sign-up";
import { NotFound } from "./pages/not-found";
import { fetchPokemonList } from "./services/pokemon-service";
import { PokemonType } from "./@types/pokemon";

type RoutesConfig = {
  dependenciesInjection: {
    dashboard: {
      fetchPokemonList: () => Promise<PokemonType[]>
    }
  };
}

export const routesConfig = (props?: RoutesConfig) => {
  const dashboardFetchPokemonList = props?.dependenciesInjection.dashboard.fetchPokemonList
  ? props.dependenciesInjection.dashboard.fetchPokemonList
  : () => ({} as Promise<PokemonType[]>);

  const routes: RouteObject[] = [
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/dashboard",
          element: <Dashboard fetchPokemonList={dashboardFetchPokemonList} />,
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ];

  return routes;
}

export const router = createBrowserRouter(routesConfig({
  dependenciesInjection: {
    dashboard: {
      fetchPokemonList
    }
  }
}));
