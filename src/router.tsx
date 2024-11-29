import { createBrowserRouter, RouteObject } from "react-router-dom";

import { LoginViewModel } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { SignUp } from "./pages/sign-up";
import { NotFound } from "./pages/not-found";
import { fetchPokemonDetails, fetchPokemonList } from "./services/pokemon-service";
import { PokemonType } from "./@types/pokemon";
import { Details } from "./pages/details";

type RoutesConfig = {
  dependenciesInjection: {
    dashboard?: {
      fetchPokemonList: () => Promise<PokemonType[]>
    },
    details?: {
      fetchPokemonDetails: (id: string) => Promise<PokemonType>}
  };
}

export const routesConfig = (props?: RoutesConfig) => {
  const dashboardFetchPokemonList = props?.dependenciesInjection.dashboard?.fetchPokemonList
  ? props.dependenciesInjection.dashboard.fetchPokemonList
  : () => ({} as Promise<PokemonType[]>);

  const fetchPokemonDetails = props?.dependenciesInjection.details?.fetchPokemonDetails
  ? props.dependenciesInjection.details.fetchPokemonDetails
  : () => ({} as Promise<PokemonType>);

  const routes: RouteObject[] = [
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <LoginViewModel />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/dashboard",
          element: <Dashboard fetchPokemonList={dashboardFetchPokemonList} />,
        },
        {
          path: "/details/:id",
          element: <Details fetchPokemonDetails={fetchPokemonDetails} />
        }
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
    },
    details: {
      fetchPokemonDetails
    }
  }
}));
