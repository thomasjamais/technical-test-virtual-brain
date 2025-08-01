import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";
import { useGetPokemonFight } from "../hooks/useGetPokemonFight";
import { queryClient } from "../queryClients";

const Fight: React.FC = () => {
  const { theme } = useTheme();
  const routeStates = useLocation().state;
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetPokemonFight(
    routeStates.selectedPokemon
  );
  const fightResult = data ?? ([] as string[]);

  if (isLoading || error)
    return (
      <div
        className={`${
          theme === "light" ? "bg-amber-50" : "bg-slate-800"
        } flex flex-col items-center pt-8`}
      >
        Création de votre combat...
      </div>
    );

  return (
    <div
      className={`${
        theme === "light" ? "bg-amber-50" : "bg-slate-800"
      } flex flex-col items-center pt-8 h-full`}
    >
      <ul className="text-align-center h-screen">
        {fightResult.map((fightLine, index) => {
          if (fightLine === "---END---")
            return (
              <button
                key={index}
                onClick={() => {
                  queryClient.setQueryData(["pokemons", "fight"], []);
                  navigate("/");
                }}
                className={`mt-4 px-4 py-2 rounded-md text-white ${
                  theme === "light" ? "bg-blue-500" : "bg-blue-700"
                }`}
              >
                Fin du combat, relancer un combat
              </button>
            );
          if (fightLine.startsWith("IMAGE:")) {
            return (
              <li key={index}>
                <img src={fightLine.split(" ")[1]} className="w-32 h-32" />
              </li>
            );
          }
          if (fightLine.startsWith("**")) {
            return (
              <li key={index} className="font-bold">
                {fightLine}
              </li>
            );
          }
          return <li key={index}>{fightLine}</li>;
        })}
      </ul>
    </div>
  );
};

export default Fight;
